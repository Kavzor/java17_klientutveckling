package nu.rolandsson.jakob.notera.controller;

import nu.rolandsson.jakob.notera.MainActivity;
import nu.rolandsson.jakob.notera.adapter.NoteListAdapter;
import nu.rolandsson.jakob.notera.component.NoteListComponent;
import nu.rolandsson.jakob.notera.shared.NoteRepository;

abstract class Handler {
    private MainActivity activity;

    Handler(MainActivity activity) {
        this.activity = activity;
    }

    MainActivity getActivity() {
        return this.activity;
    }

    NoteListComponent getListComponent() {
        return getActivity().getListComponent();
    }

    NoteListAdapter getAdapter() {
        return (NoteListAdapter) getListComponent().getAdapter();
    }

    NoteRepository getRepository() {
        return getAdapter().getRepository();
    }

    RootActionHandler getRootActionHandler() {
        return getActivity();
    }
}
