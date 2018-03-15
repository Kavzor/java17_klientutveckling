package nu.rolandsson.jakob.notera.component;

import android.app.Activity;
import android.content.Context;
import android.util.AttributeSet;
import android.util.Log;
import android.view.ContextMenu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;

import nu.rolandsson.jakob.notera.R;
import nu.rolandsson.jakob.notera.adapter.NoteListAdapter;
import nu.rolandsson.jakob.notera.controller.RootActionHandler;
import nu.rolandsson.jakob.notera.controller.constant.Action;
import nu.rolandsson.jakob.notera.controller.constant.HandlerLevel;
import nu.rolandsson.jakob.notera.shared.Note;

/**
 * Created by Martin on 2018-03-07.
 */

public class NoteListComponent extends ListView
        implements AdapterView.OnItemClickListener,
            View.OnCreateContextMenuListener,
            MenuItem.OnMenuItemClickListener {

    private static final String TAG = "NoteListComponent";

    private int selectedPosition;
    private Note selectedNote;
    private RootActionHandler rootHandler;

    public NoteListComponent(Context context, AttributeSet attrs) {
        super(context, attrs);
        this.rootHandler = (RootActionHandler) context;

        initalize();
    }


    private void initalize() {
        this.setAdapter(new NoteListAdapter());
        this.setOnItemClickListener(this);
        this.setOnCreateContextMenuListener(this);
    }

    public int getSelectedPosition() {
        return selectedPosition;
    }

    public void setSelectedPosition(int selectedPosition) {
        this.selectedPosition = selectedPosition;
    }

    public Note getSelectedNote() {
        return selectedNote;
    }

    public void setSelectedNote(Note selectedNote) {
        this.selectedNote = selectedNote;
    }

    @Override
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        setSelectedPosition(position);
        Note selectedNote = (Note) getItemAtPosition(position);
        setSelectedNote(selectedNote);

        this.rootHandler.invokeAction(HandlerLevel.MODEL, Action.TOGGLE_CHECK);
        /*Note note = (Note) this.getItemAtPosition(position);
        note.setChecked(!note.isChecked());
        ((NoteListAdapter) getAdapter()).notifyDataSetChanged();
        Log.v(TAG, "Note checked: " + note.isChecked());*/
    }

    @Override
    public void onCreateContextMenu(ContextMenu menu, View v, ContextMenu.ContextMenuInfo menuInfo) {
        MenuInflater inflater = ((Activity) getContext()).getMenuInflater();
        inflater.inflate(R.menu.note_item_menu, menu);
        menu.setHeaderTitle(R.string.menu_title);


        for(int index = 0; index < menu.size(); index++) {
            menu.getItem(index).setOnMenuItemClickListener(this);
        }
    }

    @Override
    public boolean onMenuItemClick(MenuItem item) {
        AdapterContextMenuInfo info = (AdapterContextMenuInfo) item.getMenuInfo();
        this.setSelectedPosition(info.position);
        this.setSelectedNote((Note) getItemAtPosition(info.position));

        String menuAction = item.getTitle().toString();
        if(menuAction.equals("Update")) {
            rootHandler.invokeAction(HandlerLevel.VIEW, Action.OPEN_UPDATE_VIEW);
        }
        else if(menuAction.equals("Remove")) {
            rootHandler.invokeAction(HandlerLevel.MODEL, Action.REMOVE_NOTE);
        }
        return false;
    }
}







