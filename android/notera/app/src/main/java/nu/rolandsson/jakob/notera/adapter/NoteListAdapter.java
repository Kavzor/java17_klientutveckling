package nu.rolandsson.jakob.notera.adapter;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.CheckedTextView;

import nu.rolandsson.jakob.notera.R;
import nu.rolandsson.jakob.notera.shared.Note;
import nu.rolandsson.jakob.notera.shared.NoteRepository;

/**
 * Created by Martin on 2018-03-07.
 */

public class NoteListAdapter extends BaseAdapter {

    private NoteRepository noteRepository;

    public NoteListAdapter() {
        this.noteRepository = new NoteRepository();
    }

    public NoteRepository getRepository() {
        return this.noteRepository;
    }


    @Override
    public int getCount() {
        return this.noteRepository.getAll().size();
    }

    @Override
    public Object getItem(int position) {
        return this.noteRepository.get(position);
    }

    @Override
    public long getItemId(int position) {
        return this.noteRepository.getId(position);
    }

    @Override //View objektet representerar varje list-item
    public View getView(int position, View convertView, ViewGroup parent) {
        Note note = (Note) this.getItem(position);

        if (convertView == null) {
            convertView = LayoutInflater.
                    from(parent.getContext()).
                    inflate(R.layout.note_list_item, parent, false);
        }

        if (note != null) {
            CheckedTextView noteItemView = convertView.findViewById(R.id.main_note_list_item);
            noteItemView.setText(note.getTitle());
            noteItemView.setChecked(note.isChecked());
            //se till så att checkboxen fungerar
        }
        return convertView;
    }

}
