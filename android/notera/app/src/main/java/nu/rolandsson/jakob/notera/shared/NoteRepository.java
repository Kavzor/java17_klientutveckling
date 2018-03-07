package nu.rolandsson.jakob.notera.shared;

import java.util.LinkedList;
import java.util.List;

/**
 * Created by Martin on 2018-03-07.
 */

public class NoteRepository {
    private List<Note> notes = new LinkedList<>();
    private List<Note> filteredNotes = new LinkedList<>();

    { //default notes
        notes.add(new Note("Hello", "World"));
        notes.add(new Note("Bye", "World"));
        notes.add(new Note("Sunny day", "Must be a sunny day"));
        notes.add(new Note("A car is a car", "A stone is a stone"));
        filteredNotes = notes;
    }

    public void reset() {
        this.filteredNotes = this.notes;
    }

    public List<Note> getAll() {
        return this.filteredNotes;
    }

    public void setAll(List<Note> notes) {
        this.filteredNotes = notes;
    }

    //filteredNotes är det vi ser på skärmen, därför måste vi utgå
    //från objekten i filteredNotes
    public int getId(int positionId) {
        return this.notes.indexOf(this.filteredNotes.get(positionId));
    }

    public Note get(int id){
        return filteredNotes.get(id);
    }

    public void remove(Note note) {
        this.notes.remove(note);
        this.filteredNotes = this.notes;
    }

    public void update(int id, Note note) {
        this.notes.set(id, note);
        this.filteredNotes = this.notes;
    }

    public void add(Note note) {
        this.notes.add(note);
        this.filteredNotes = this.notes;
    }

    public int getAmountOfChecked() {
        return this.getChecked().size();
    }

    public void removeChecked() {
        this.notes.removeAll(this.getChecked());
        this.filteredNotes = this.notes;
    }

    private List<Note> getChecked() {
        List<Note> notes = new LinkedList<>();
        for(Note note : this.getAll()) {
            if(note.isChecked()) {
                notes.add(note);
            }
        }
        return notes;
    }
}
