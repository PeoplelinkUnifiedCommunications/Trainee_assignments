package com.ontrack.m;

import androidx.appcompat.app.AppCompatActivity;

import android.app.DatePickerDialog;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.ImageView;
import android.widget.Spinner;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.io.InputStream;
import java.util.*;

import android.widget.ArrayAdapter;

import androidx.appcompat.widget.AppCompatEditText;
import androidx.appcompat.widget.AppCompatSpinner;

public class signup<spinnerArrayAdapter, titleAdapter, bloodGroupAdapter> extends AppCompatActivity {

    Spinner countrySpinner;
    Spinner citySpinner;
    Spinner stateSpinner;
    Button button;
    String countryId;
    String stateId;
    AppCompatSpinner spinner;
    AppCompatSpinner titleSpinner;
    AppCompatSpinner bloodGroupSpinner;
    AppCompatEditText dobPicker;

    private DatePicker datePicker;
    private Calendar calendar;
    private int year, month, day;
    ImageView datePickerBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);

        spinner = findViewById(R.id.lanSpinner);
        titleSpinner = findViewById(R.id.titleSpinner);
        bloodGroupSpinner = findViewById(R.id.bloodGroupSpinner);


        button = findViewById(R.id.but);
        countrySpinner = findViewById(R.id.countrySpinner);
        citySpinner = findViewById(R.id.citySpinner);
        stateSpinner = findViewById(R.id.stateSpinner);
        dobPicker = findViewById(R.id.dobPicker);
        datePickerBtn = findViewById(R.id.datePickerBtn);


        calendar = Calendar.getInstance();
        year = calendar.get(Calendar.YEAR);

        month = calendar.get(Calendar.MONTH);
        day = calendar.get(Calendar.DAY_OF_MONTH);


        datePickerBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                DatePickerDialog datePickerDialog = new DatePickerDialog(signup.this,
                        new DatePickerDialog.OnDateSetListener() {

                            @Override
                            public void onDateSet(DatePicker view, int year,
                                                  int monthOfYear, int dayOfMonth) {

                                dobPicker.setText(dayOfMonth + "-" + (monthOfYear + 1) + "-" + year);

                            }
                        }, year, month, day);
                datePickerDialog.show();
            }

        });

        loadCountryJSONFromAsset();
        String[] langArray = {"English"};
        String[] titleArray = {"Mrs", "Mr", "Ms"};
        String[] bloodGroupArray = {"o+", "o-", "A+", "A-", "B+", "B-"};

        ArrayAdapter<String> spinnerArrayAdapter = new ArrayAdapter<String>
                (this, android.R.layout.simple_spinner_item,
                        langArray); //selected item will look like a spinner set from XML
        spinnerArrayAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner.setAdapter(spinnerArrayAdapter);


        ArrayAdapter<String> titleAdapter = new ArrayAdapter<String>
                (this, android.R.layout.simple_spinner_item,
                        titleArray); //selected item will look like a spinner set from XML
        titleAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        titleSpinner.setAdapter(titleAdapter);


        ArrayAdapter<String> bloodGroupAdapter = new ArrayAdapter<String>
                (this, android.R.layout.simple_spinner_item,
                        bloodGroupArray); //selected item will look like a spinner set from XML
        bloodGroupAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        bloodGroupSpinner.setAdapter(bloodGroupAdapter);


        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                {
                    Intent intent = new Intent(signup.this, MainActivity2.class);
                    startActivity(intent);
                }


            }

        });

    }


    public String loadCountryJSONFromAsset() {
        String json = null;
        ArrayList<String> countrylist = new ArrayList();
        try {
            InputStream is = getAssets().open("countries.json");
            int size = is.available();
            byte[] buffer = new byte[size];
            is.read(buffer);
            is.close();
            json = new String(buffer, "UTF-8");

            JSONArray jsonArray = new JSONArray(json);
            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject obj = jsonArray.getJSONObject(i);

                countrylist.add(obj.getString("value"));


            }

            ArrayAdapter<String> spinnerArrayAdapter = new ArrayAdapter<String>
                    (this, android.R.layout.simple_spinner_item,
                            countrylist); //selected item will look like a spinner set from XML
            spinnerArrayAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
            countrySpinner.setAdapter(spinnerArrayAdapter);
//            Toast.makeText(this, countrylist.toString(), Toast.LENGTH_SHORT).show();

            countrySpinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
                public void onItemSelected(AdapterView<?> parent, View view, int pos, long id) {
                    countryId = parent.getItemAtPosition(pos).toString();
                    loadStateJSONFromAsset(countryId);
                }

                public void onNothingSelected(AdapterView<?> parent) {
                }
            });

        } catch (IOException | JSONException ex) {
            ex.printStackTrace();
            return null;
        }
        return json;
    }

    public String loadCityJSONFromAsset(String stateId) {
        String json = null;
        ArrayList<String> citylist = new ArrayList();
        try {
            InputStream is = getAssets().open("cities.json");
            int size = is.available();
            byte[] buffer = new byte[size];
            is.read(buffer);
            is.close();
            json = new String(buffer, "UTF-8");

            JSONArray jsonArray = new JSONArray(json);
            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject obj = jsonArray.getJSONObject(i);

                if (stateId.equals(obj.getString("stateid")))

                    citylist.add(obj.getString("value"));


            }

            ArrayAdapter<String> spinnerArrayAdapter = new ArrayAdapter<String>
                    (this, android.R.layout.simple_spinner_item,
                            citylist); //selected item will look like a spinner set from XML
            spinnerArrayAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
            citySpinner.setAdapter(spinnerArrayAdapter);
//            Toast.makeText(this, countrylist.toString(), Toast.LENGTH_SHORT).show();


        } catch (IOException | JSONException ex) {
            ex.printStackTrace();
            return null;
        }
        return json;
    }

    public String loadStateJSONFromAsset(String countryId) {
        String json = null;
        ArrayList<String> statelist = new ArrayList();
        try {
            InputStream is = getAssets().open("states.json");
            int size = is.available();
            byte[] buffer = new byte[size];
            is.read(buffer);
            is.close();
            json = new String(buffer, "UTF-8");

            JSONArray jsonArray = new JSONArray(json);
            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject obj = jsonArray.getJSONObject(i);
                if (countryId.equals(obj.getString("countryid")))
                    statelist.add(obj.getString("value"));


            }

            ArrayAdapter<String> spinnerArrayAdapter = new ArrayAdapter<String>
                    (this, android.R.layout.simple_spinner_item,
                            statelist); //selected item will look like a spinner set from XML
            spinnerArrayAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
            stateSpinner.setAdapter(spinnerArrayAdapter);
//            Toast.makeText(this, countrylist.toString(), Toast.LENGTH_SHORT).show();
            stateSpinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
                public void onItemSelected(AdapterView<?> parent, View view, int pos, long id) {
                    stateId = parent.getItemAtPosition(pos).toString();
                    loadCityJSONFromAsset(stateId);
                }

                public void onNothingSelected(AdapterView<?> parent) {
                }
            });

        } catch (IOException | JSONException ex) {
            ex.printStackTrace();
            return null;
        }
        return json;
    }


    public void onClick(View v) {
        PersonDatebase appDb = PersonDatebase.getInstance(this);
        Person person = new Person();
        person.address = "hello";
        person.fname = "hello";
        appDb.personDao().insertPerson(person);
        Intent intent = new Intent(signup.this, MainActivity2.class);
        startActivity(intent);
    }
}