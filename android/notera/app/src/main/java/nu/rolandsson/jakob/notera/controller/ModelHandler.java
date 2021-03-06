package nu.rolandsson.jakob.notera.controller;

import nu.rolandsson.jakob.notera.MainActivity;
import nu.rolandsson.jakob.notera.controller.constant.Action;
import nu.rolandsson.jakob.notera.controller.constant.HandlerLevel;
import nu.rolandsson.jakob.notera.shared.Note;

/**
 * Created by Martin on 2018-03-07.
 */

public class ModelHandler extends Handler implements ActionHandler {
    private ActionHandler nextHandler;

    public ModelHandler(MainActivity activity) {
        super(activity);
    }

    @Override
    public void setNextHandler(ActionHandler handler) {
        this.nextHandler = handler;
    }

    @Override
    public void handle(HandlerLevel level, Action action) {
        if(level == HandlerLevel.MODEL) {
            updateModel(action);
        }
        else {
            nextHandler.handle(level, action);
        }
    }

    private void updateModel(Action action) {
        Note note = getListComponent().getSelectedNote();

        switch(action) {
            case TOGGLE_CHECK:
                note.setChecked(!note.isChecked());
            break;
            case REMOVE_CHECKED_NOTES:
                getRepository().removeChecked();
            break;
            case ADD_NOTE:
                getRepository().add(note);
            break;
            case REMOVE_NOTE:
                getRepository().remove(note);
            break;
            case UPDATE_NOTE:
                int position = getListComponent().getSelectedPosition();
                position = getRepository().getId(position);
                getRepository().update(position, note);
            break;
        }

        getRootActionHandler().invokeAction(HandlerLevel.VIEW, Action.REFRESH_VIEW);
    }
}








