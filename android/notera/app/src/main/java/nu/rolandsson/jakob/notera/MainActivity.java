package nu.rolandsson.jakob.notera;

import android.content.Intent;
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
import nu.rolandsson.jakob.notera.shared.Note;

public class MainActivity extends AppCompatActivity implements RootActionHandler {

    public static final int REQUEST_ADD_NOTE = 0;
    public static final int REQUEST_UPDATE_NOTE = 1;

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
    }


    private void findViews() {
        noteList = findViewById(R.id.main_note_list);
        searchView = findViewById(R.id.main_note_search);

        removeBtn = findViewById(R.id.main_remove_button);
        removeBtn.setButtonType(ButtonComponent.ButtonType.REMOVE);

        addBtn = findViewById(R.id.main_add_button);
        addBtn.setButtonType(ButtonComponent.ButtonType.ADD);
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


    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if(resultCode == RESULT_OK) {
            Note note = (Note) data.getSerializableExtra("note");

            getListComponent().setSelectedNote(note);

            switch(requestCode) {
                case REQUEST_ADD_NOTE:
                    invokeAction(HandlerLevel.MODEL, Action.ADD_NOTE);
                break;
            }
        }
    }
}
