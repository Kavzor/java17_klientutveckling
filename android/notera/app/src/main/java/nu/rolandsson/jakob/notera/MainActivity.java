package nu.rolandsson.jakob.notera;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.*;

import nu.rolandsson.jakob.notera.adapter.NoteListAdapter;
import nu.rolandsson.jakob.notera.component.ButtonComponent;
import nu.rolandsson.jakob.notera.component.NoteListComponent;
import nu.rolandsson.jakob.notera.controller.ActionHandler;
import nu.rolandsson.jakob.notera.controller.ModelHandler;
import nu.rolandsson.jakob.notera.controller.RootActionHandler;
import nu.rolandsson.jakob.notera.controller.ViewHandler;
import nu.rolandsson.jakob.notera.controller.constant.Action;
import nu.rolandsson.jakob.notera.controller.constant.HandlerLevel;

public class MainActivity extends AppCompatActivity implements RootActionHandler {

    private NoteListComponent noteList;
    private SearchView searchView;
    private ButtonComponent removeBtn;
    private ButtonComponent addBtn;

    private ActionHandler rootActionHandler;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        findViews();
        setupHandlers();
/*
        NoteListAdapter listAdapter = new NoteListAdapter();
        noteList.setAdapter(listAdapter);*/
    }


    private void findViews() {
        noteList = findViewById(R.id.main_note_list);
        searchView = findViewById(R.id.main_note_search);

        removeBtn = findViewById(R.id.main_remove_button);
        removeBtn.setButtonType(ButtonComponent.ButtonType.REMOVE);

    }

    private void setupHandlers() {
        ActionHandler viewHandler = new ViewHandler(this);
        ActionHandler modelHandler = new ModelHandler(this);

        viewHandler.setNextHandler(modelHandler);
        setRootActionHandler(viewHandler);
    }

    public void setRootActionHandler(ActionHandler handler) {
        this.rootActionHandler = handler;
    }

    public ActionHandler getRootActionHandler() {
        return this.rootActionHandler;
    }

    public NoteListComponent getListComponent() {
        return this.noteList;
    }

    @Override
    public void invokeAction(HandlerLevel level, Action action) {
        rootActionHandler.handle(level, action);
    }
}
