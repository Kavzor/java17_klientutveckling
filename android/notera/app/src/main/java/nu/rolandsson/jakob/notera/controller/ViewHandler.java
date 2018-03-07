package nu.rolandsson.jakob.notera.controller;


import android.widget.Button;

import nu.rolandsson.jakob.notera.MainActivity;
import nu.rolandsson.jakob.notera.R;
import nu.rolandsson.jakob.notera.controller.constant.Action;
import nu.rolandsson.jakob.notera.controller.constant.HandlerLevel;

public class ViewHandler extends Handler implements ActionHandler{

    private ActionHandler nextHandler;

    public ViewHandler(MainActivity activity) {
        super(activity);
    }


    @Override
    public void setNextHandler(ActionHandler handler) {
        this.nextHandler = handler;
    }

    @Override
    public void handle(HandlerLevel level, Action action) {
        if(level == HandlerLevel.VIEW) {
            updateView(action);
        }
        else {
            nextHandler.handle(level, action);
        }
    }

    private void updateView(Action action) {
        switch(action) {
            case REFRESH_VIEW:
                getAdapter().notifyDataSetChanged(); //denna säger åt listcomponent att uppdatera vyn
            case UPDATE_CHECKED:
                int amount = getRepository().getAmountOfChecked();
                String removeBtnText = getActivity().
                        getString(R.string.main_format_remove_btn, amount);
                Button button = getActivity().findViewById(R.id.main_remove_button);
                button.setText(removeBtnText);
            break;
        }
    }
}









