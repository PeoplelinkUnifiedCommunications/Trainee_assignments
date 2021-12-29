package com.ontrack.m;

import android.content.Context;

import androidx.room.Database;
import androidx.room.Room;
import androidx.room.RoomDatabase;



@Database(entities = Person.class,exportSchema = false, version = 1)
public abstract class PersonDatebase extends RoomDatabase {
    private static final String DB_NAME = "person_db";
    private static PersonDatebase instance;

     static synchronized PersonDatebase getInstance(Context context) {
        if (instance == null) {
            instance = Room.databaseBuilder(context.getApplicationContext(),PersonDatebase.class, DB_NAME)
            .fallbackToDestructiveMigration()
                    .build();
        }
        return instance;

    }

    public abstract UserDao personDao();

}



