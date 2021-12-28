package com.ontrack.m;

import android.database.Cursor;
import androidx.room.EntityInsertionAdapter;
import androidx.room.RoomDatabase;
import androidx.room.RoomSQLiteQuery;
import androidx.sqlite.db.SupportSQLiteStatement;
import java.lang.Override;
import java.lang.String;
import java.lang.SuppressWarnings;
import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("unchecked")
public final class UserDao_Impl implements UserDao {
  private final RoomDatabase __db;

  private final EntityInsertionAdapter __insertionAdapterOfPerson;

  public UserDao_Impl(RoomDatabase __db) {
    this.__db = __db;
    this.__insertionAdapterOfPerson = new EntityInsertionAdapter<Person>(__db) {
      @Override
      public String createQuery() {
        return "INSERT OR REPLACE INTO `heloe`(`id`,`title`,`fname`,`lname`,`phoneno`,`email`,`gender`,`bloodgroup`,`dob`,`address`,`country`,`state`,`city`,`password`) VALUES (nullif(?, 0),?,?,?,?,?,?,?,?,?,?,?,?,?)";
      }

      @Override
      public void bind(SupportSQLiteStatement stmt, Person value) {
        stmt.bindLong(1, value.id);
        if (value.title == null) {
          stmt.bindNull(2);
        } else {
          stmt.bindString(2, value.title);
        }
        if (value.fname == null) {
          stmt.bindNull(3);
        } else {
          stmt.bindString(3, value.fname);
        }
        if (value.lname == null) {
          stmt.bindNull(4);
        } else {
          stmt.bindString(4, value.lname);
        }
        stmt.bindLong(5, value.phoneno);
        if (value.email == null) {
          stmt.bindNull(6);
        } else {
          stmt.bindString(6, value.email);
        }
        if (value.bloodgroup == null) {
          stmt.bindNull(7);
        } else {
          stmt.bindString(7, value.bloodgroup);
        }
        if (value.gender == null) {
          stmt.bindNull(8);
        } else {
          stmt.bindString(8, value.gender);
        }
        stmt.bindLong(9, value.dob);
        if (value.address == null) {
          stmt.bindNull(10);
        } else {
          stmt.bindString(10, value.address);
        }
        if (value.country == null) {
          stmt.bindNull(11);
        } else {
          stmt.bindString(11, value.country);
        }
        if (value.state == null) {
          stmt.bindNull(12);
        } else {
          stmt.bindString(12, value.state);
        }
        if (value.city == null) {
          stmt.bindNull(13);
        } else {
          stmt.bindString(13, value.city);
        }
        if (value.password == null) {
          stmt.bindNull(14);
        } else {
          stmt.bindString(14, value.password);
        }
      }
    };
  }

  @Override
  public void insertPerson(Person person) {
    __db.beginTransaction();
    try {
      __insertionAdapterOfPerson.insert(person);
      __db.setTransactionSuccessful();
    } finally {
      __db.endTransaction();
    }
  }

  @Override
  public List<Person> getAllUsers() {
    final String _sql = "select * from heloe";
    final RoomSQLiteQuery _statement = RoomSQLiteQuery.acquire(_sql, 0);
    final Cursor _cursor = __db.query(_statement);
    try {
      final int _cursorIndexOfId = _cursor.getColumnIndexOrThrow("id");
      final int _cursorIndexOfTitle = _cursor.getColumnIndexOrThrow("title");
      final int _cursorIndexOfFname = _cursor.getColumnIndexOrThrow("fname");
      final int _cursorIndexOfLname = _cursor.getColumnIndexOrThrow("lname");
      final int _cursorIndexOfPhoneno = _cursor.getColumnIndexOrThrow("phoneno");
      final int _cursorIndexOfEmail = _cursor.getColumnIndexOrThrow("email");
      final int _cursorIndexOfBloodgroup = _cursor.getColumnIndexOrThrow("gender");
      final int _cursorIndexOfGender = _cursor.getColumnIndexOrThrow("bloodgroup");
      final int _cursorIndexOfDob = _cursor.getColumnIndexOrThrow("dob");
      final int _cursorIndexOfAddress = _cursor.getColumnIndexOrThrow("address");
      final int _cursorIndexOfCountry = _cursor.getColumnIndexOrThrow("country");
      final int _cursorIndexOfState = _cursor.getColumnIndexOrThrow("state");
      final int _cursorIndexOfCity = _cursor.getColumnIndexOrThrow("city");
      final int _cursorIndexOfPassword = _cursor.getColumnIndexOrThrow("password");
      final List<Person> _result = new ArrayList<Person>(_cursor.getCount());
      while(_cursor.moveToNext()) {
        final Person _item;
        _item = new Person();
        _item.id = _cursor.getInt(_cursorIndexOfId);
        _item.title = _cursor.getString(_cursorIndexOfTitle);
        _item.fname = _cursor.getString(_cursorIndexOfFname);
        _item.lname = _cursor.getString(_cursorIndexOfLname);
        _item.phoneno = _cursor.getInt(_cursorIndexOfPhoneno);
        _item.email = _cursor.getString(_cursorIndexOfEmail);
        _item.bloodgroup = _cursor.getString(_cursorIndexOfBloodgroup);
        _item.gender = _cursor.getString(_cursorIndexOfGender);
        _item.dob = _cursor.getInt(_cursorIndexOfDob);
        _item.address = _cursor.getString(_cursorIndexOfAddress);
        _item.country = _cursor.getString(_cursorIndexOfCountry);
        _item.state = _cursor.getString(_cursorIndexOfState);
        _item.city = _cursor.getString(_cursorIndexOfCity);
        _item.password = _cursor.getString(_cursorIndexOfPassword);
        _result.add(_item);
      }
      return _result;
    } finally {
      _cursor.close();
      _statement.release();
    }
  }
}
