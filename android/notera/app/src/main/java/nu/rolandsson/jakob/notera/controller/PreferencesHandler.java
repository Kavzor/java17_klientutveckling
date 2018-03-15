package nu.rolandsson.jakob.notera.controller;

import com.google.gson.Gson;

import nu.rolandsson.jakob.notera.MainActivity;
import nu.rolandsson.jakob.notera.controller.constant.Action;
import nu.rolandsson.jakob.notera.controller.constant.HandlerLevel;

/**
 * Created by Martin on 2018-03-15.
 */

public class PreferencesHandler extends Handler implements ActionHandler {

    public PreferencesHandler(MainActivity activity) {
        super(activity);
    }

    @Override
    public void setNextHandler(ActionHandler handler) {

    }

    @Override
    public void handle(HandlerLevel level, Action action) {
        Gson gson = new Gson();
        JSonElem
    }
}
