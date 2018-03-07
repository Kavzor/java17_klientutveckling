package nu.rolandsson.jakob.notera.component;

import android.content.Context;
import android.util.AttributeSet;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;

import nu.rolandsson.jakob.notera.adapter.NoteListAdapter;
import nu.rolandsson.jakob.notera.controller.RootActionHandler;
import nu.rolandsson.jakob.notera.controller.constant.Action;
import nu.rolandsson.jakob.notera.controller.constant.HandlerLevel;
import nu.rolandsson.jakob.notera.shared.Note;

/**
 * Created by Martin on 2018-03-07.
 */

public class NoteListComponent extends ListView implements AdapterView.OnItemClickListener {
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
}







