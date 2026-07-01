package com.yswnthdev.labsession_02;

import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class SecondActivity extends AppCompatActivity {

    private TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);
        Log.d("Lifecycle", "SecondActivity: onCreate");

        textView = findViewById(R.id.textView);
        String receivedData = getIntent().getStringExtra("text-message"); // Receiving data
        textView.setText(receivedData);
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.d("Lifecycle", "SecondActivity: onStart");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.d("Lifecycle", "SecondActivity: onResume");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.d("Lifecycle", "SecondActivity: onPause");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.d("Lifecycle", "SecondActivity: onStop");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.d("Lifecycle", "SecondActivity: onRestart");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.d("Lifecycle", "SecondActivity: onDestroy");
    }
}