package nu.rolandsson.jakob.notera;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import nu.rolandsson.jakob.notera.shared.Note;

public class NoteActivity extends AppCompatActivity implements View.OnClickListener {

    private static final String TAG = "NoteActivity";

    private EditText title;
    private EditText text;

    private Button saveBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_note);
        findViews();


        saveBtn.setOnClickListener(this);

    }

    private void findViews() {
        title = findViewById(R.id.note_title);
        text = findViewById(R.id.note_text);
        saveBtn = findViewById(R.id.note_save_btn);
    }

    @Override
    public void onClick(View v) {
        String titleValue = title.getText().toString();
        String textValue = text.getText().toString();
        Note note = new Note(titleValue, textValue);

        Log.v(TAG, "Note: " + titleValue);

        Intent intent = new Intent();
        intent.putExtra("note", note);
        setResult(RESULT_OK, intent);
        finish();
    }
}
