package com.ontrack.m;

import androidx.room.Dao;
import androidx.room.Delete;
import androidx.room.Insert;
import androidx.room.OnConflictStrategy;
import androidx.room.Query;

import java.util.List;

@Dao
public interface UserDao{


    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insertPerson(Person person);

    @Query("select * from heloe")
    List<Person> getAllUsers();


}
