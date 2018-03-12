package nu.rolandsson.jakob.notera.component;

import android.content.Context;
import android.support.v7.widget.AppCompatButton;
import android.util.AttributeSet;
import android.view.View;

import nu.rolandsson.jakob.notera.controller.RootActionHandler;
import nu.rolandsson.jakob.notera.controller.constant.Action;
import nu.rolandsson.jakob.notera.controller.constant.HandlerLevel;

/**
 * Created by Martin on 2018-03-12.
 */

public class ButtonComponent extends AppCompatButton {
    public enum ButtonType {
        ADD, REMOVE
    }

    private RootActionHandler rootHandler;

    public ButtonComponent(Context context, AttributeSet attrs) {
        super(context, attrs);
        this.rootHandler = (RootActionHandler) context;
    }

    public void setButtonType(ButtonType type) {
        switch(type) {
            case ADD:
                this.setOnClickListener(onClickOpenAddView());
            break;
            case REMOVE:
                this.setOnClickListener(onClickRemoveChecked());
            break;
        }
    }

    OnClickListener onClickOpenAddView() {
        return view -> {
            rootHandler.invokeAction(HandlerLevel.VIEW, Action.OPEN_ADD_VIEW);
        };
    }

    OnClickListener onClickRemoveChecked() {
        return view -> {
          rootHandler.invokeAction(HandlerLevel.MODEL, Action.REMOVE_CHECKED_NOTES);
        };
    }
}
