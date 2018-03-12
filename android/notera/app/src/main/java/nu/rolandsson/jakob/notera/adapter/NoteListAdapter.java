package nu.rolandsson.jakob.notera.adapter;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.CheckedTextView;
import android.widget.Filter;
import android.widget.Filterable;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import nu.rolandsson.jakob.notera.R;
import nu.rolandsson.jakob.notera.shared.Note;
import nu.rolandsson.jakob.notera.shared.NoteRepository;

/**
 * Created by Martin on 2018-03-07.
 */

public class NoteListAdapter extends BaseAdapter implements Filterable {

    private NoteRepository noteRepository;
    private NoteFilter filter;

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

    @Override
    public Filter getFilter() {
        if(filter == null) {
            filter = new NoteFilter();
        }
        return filter;
    }

    public class NoteFilter extends Filter {
        private static final String TAG = "NoteFilter";

        @Override
        protected FilterResults performFiltering(CharSequence constraint) {
            Log.v(TAG, "Filter constraint: " + constraint);
            List<Note> notes = noteRepository.reset();

            if(isEmpty(constraint)) {
                return setFiltered(notes);
            }
            else {
                String critera  = constraint.toString().toLowerCase();
                List<Note> filteredNotes = new ArrayList<>(notes.size());
                for(Note note : notes) {
                    String title = note.getTitle().toLowerCase();
                    if(title.contains(critera)) {
                        filteredNotes.add(note);
                    }
                }
                return setFiltered(filteredNotes);
            }
        }

        private boolean isEmpty(CharSequence constraint) {
            return constraint == null || constraint.length() < 1;
        }

        private FilterResults setFiltered(List<Note> notes) {
            FilterResults results = new FilterResults();
            results.count = notes.size();
            results.values = notes;
            return results;
        }

        @SuppressWarnings("unchecked")
        @Override
        protected void publishResults(CharSequence constraint, FilterResults results) {
            noteRepository.setAll((List<Note>) results.values);
            notifyDataSetChanged();
        }
    }
}












