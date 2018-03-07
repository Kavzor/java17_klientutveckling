package nu.rolandsson.jakob.notera.shared;

import java.io.Serializable;


//Serializable behövs då vi ska skicka anteckning mellan olika activities
public class Note implements Serializable {
    private String title;
    private String text;
    private boolean checked;


    public Note() {}

    public Note(String title, String text) {
        this.title = title;
        this.text = text;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public boolean isChecked() {
        return checked;
    }

    public void setChecked(boolean checked) {
        this.checked = checked;
    }
}
