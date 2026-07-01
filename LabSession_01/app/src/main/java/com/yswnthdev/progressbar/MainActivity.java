package com.yswnthdev.progressbar;

import android.app.AlertDialog;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private ProgressBar progressBar;
    private TextView progressText;
    private final Handler handler = new Handler(Looper.getMainLooper());
    private int progress = 0;
    private Runnable progressRunnable;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);

        Button submit = findViewById(R.id.btnSubmit);

        progressBar = findViewById(R.id.progressBar);
        progressText = findViewById(R.id.tvProgress);

        submit.setOnClickListener(v -> startProgress());
    }

    private void startProgress() {
        stopProgress();
        progress = 0;

        progressRunnable = new Runnable() {
            @Override
            public void run() {
                progress++;

                progressBar.setProgress(progress);
                progressText.setText("Progress: " + progress + "%");

                if (progress < 100) {
                    handler.postDelayed(this, 50); // smoother animation
                } else {
                    showDialog();
                }
            }
        };

        handler.post(progressRunnable);
    }

    private void stopProgress() {
        if (progressRunnable != null) {
            handler.removeCallbacks(progressRunnable);
            progressRunnable = null;
        }
    }

    private void showDialog() {
        new AlertDialog.Builder(this)
                .setTitle("Download Complete")
                .setIcon(R.drawable.ic_launcher_foreground)
                .setMessage("Download Complete")
                .setPositiveButton("OK", (dialog, which) -> {
                    progress = 0;
                    progressBar.setProgress(0);
                    progressText.setText("Progress: 0%");
                })
                .setNegativeButton("Cancel", (dialog, which) -> dialog.dismiss())
                .show();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        stopProgress();
    }
}
