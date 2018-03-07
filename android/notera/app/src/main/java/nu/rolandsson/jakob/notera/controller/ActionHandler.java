package nu.rolandsson.jakob.notera.controller;

import nu.rolandsson.jakob.notera.controller.constant.Action;
import nu.rolandsson.jakob.notera.controller.constant.HandlerLevel;

/**
 * Created by Martin on 2018-03-07.
 */

public interface ActionHandler {
    void setNextHandler(ActionHandler handler);
    void handle(HandlerLevel level, Action action);
}
