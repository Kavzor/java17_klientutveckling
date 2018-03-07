package nu.rolandsson.jakob.notera.controller;

import nu.rolandsson.jakob.notera.controller.constant.Action;
import nu.rolandsson.jakob.notera.controller.constant.HandlerLevel;

/**
 * Created by Martin on 2018-03-07.
 */

public interface RootActionHandler {
    void invokeAction(HandlerLevel level, Action action);
}
