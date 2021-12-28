package com.ontrack.m;

import androidx.room.DatabaseConfiguration;
import androidx.room.InvalidationTracker;
import androidx.room.RoomOpenHelper;
import androidx.room.RoomOpenHelper.Delegate;
import androidx.room.util.TableInfo;
import androidx.room.util.TableInfo.Column;
import androidx.room.util.TableInfo.ForeignKey;
import androidx.room.util.TableInfo.Index;
import androidx.sqlite.db.SupportSQLiteDatabase;
import androidx.sqlite.db.SupportSQLiteOpenHelper;
import androidx.sqlite.db.SupportSQLiteOpenHelper.Callback;
import androidx.sqlite.db.SupportSQLiteOpenHelper.Configuration;
import java.lang.IllegalStateException;
import java.lang.Override;
import java.lang.String;
import java.lang.SuppressWarnings;
import java.util.HashMap;
import java.util.HashSet;

@SuppressWarnings("unchecked")
public final class PersonDatebase_Impl extends PersonDatebase {
  private volatile UserDao _userDao;

  @Override
  protected SupportSQLiteOpenHelper createOpenHelper(DatabaseConfiguration configuration) {
    final SupportSQLiteOpenHelper.Callback _openCallback = new RoomOpenHelper(configuration, new RoomOpenHelper.Delegate(1) {
      @Override
      public void createAllTables(SupportSQLiteDatabase _db) {
        _db.execSQL("CREATE TABLE IF NOT EXISTS `heloe` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `title` TEXT, `fname` TEXT, `lname` TEXT, `phoneno` INTEGER NOT NULL, `email` TEXT, `gender` TEXT, `bloodgroup` TEXT, `dob` INTEGER NOT NULL, `address` TEXT, `country` TEXT, `state` TEXT, `city` TEXT, `password` TEXT)");
        _db.execSQL("CREATE TABLE IF NOT EXISTS room_master_table (id INTEGER PRIMARY KEY,identity_hash TEXT)");
        _db.execSQL("INSERT OR REPLACE INTO room_master_table (id,identity_hash) VALUES(42, \"ba3b739d5145917e25e937ef39df8459\")");
      }

      @Override
      public void dropAllTables(SupportSQLiteDatabase _db) {
        _db.execSQL("DROP TABLE IF EXISTS `heloe`");
      }

      @Override
      protected void onCreate(SupportSQLiteDatabase _db) {
        if (mCallbacks != null) {
          for (int _i = 0, _size = mCallbacks.size(); _i < _size; _i++) {
            mCallbacks.get(_i).onCreate(_db);
          }
        }
      }

      @Override
      public void onOpen(SupportSQLiteDatabase _db) {
        mDatabase = _db;
        internalInitInvalidationTracker(_db);
        if (mCallbacks != null) {
          for (int _i = 0, _size = mCallbacks.size(); _i < _size; _i++) {
            mCallbacks.get(_i).onOpen(_db);
          }
        }
      }

      @Override
      protected void validateMigration(SupportSQLiteDatabase _db) {
        final HashMap<String, TableInfo.Column> _columnsHeloe = new HashMap<String, TableInfo.Column>(14);
        _columnsHeloe.put("id", new TableInfo.Column("id", "INTEGER", true, 1));
        _columnsHeloe.put("title", new TableInfo.Column("title", "TEXT", false, 0));
        _columnsHeloe.put("fname", new TableInfo.Column("fname", "TEXT", false, 0));
        _columnsHeloe.put("lname", new TableInfo.Column("lname", "TEXT", false, 0));
        _columnsHeloe.put("phoneno", new TableInfo.Column("phoneno", "INTEGER", true, 0));
        _columnsHeloe.put("email", new TableInfo.Column("email", "TEXT", false, 0));
        _columnsHeloe.put("gender", new TableInfo.Column("gender", "TEXT", false, 0));
        _columnsHeloe.put("bloodgroup", new TableInfo.Column("bloodgroup", "TEXT", false, 0));
        _columnsHeloe.put("dob", new TableInfo.Column("dob", "INTEGER", true, 0));
        _columnsHeloe.put("address", new TableInfo.Column("address", "TEXT", false, 0));
        _columnsHeloe.put("country", new TableInfo.Column("country", "TEXT", false, 0));
        _columnsHeloe.put("state", new TableInfo.Column("state", "TEXT", false, 0));
        _columnsHeloe.put("city", new TableInfo.Column("city", "TEXT", false, 0));
        _columnsHeloe.put("password", new TableInfo.Column("password", "TEXT", false, 0));
        final HashSet<TableInfo.ForeignKey> _foreignKeysHeloe = new HashSet<TableInfo.ForeignKey>(0);
        final HashSet<TableInfo.Index> _indicesHeloe = new HashSet<TableInfo.Index>(0);
        final TableInfo _infoHeloe = new TableInfo("heloe", _columnsHeloe, _foreignKeysHeloe, _indicesHeloe);
        final TableInfo _existingHeloe = TableInfo.read(_db, "heloe");
        if (! _infoHeloe.equals(_existingHeloe)) {
          throw new IllegalStateException("Migration didn't properly handle heloe(com.ontrack.m.Person).\n"
                  + " Expected:\n" + _infoHeloe + "\n"
                  + " Found:\n" + _existingHeloe);
        }
      }
    }, "ba3b739d5145917e25e937ef39df8459", "eb813729ba4a74f663cc4407dd0f70cf");
    final SupportSQLiteOpenHelper.Configuration _sqliteConfig = SupportSQLiteOpenHelper.Configuration.builder(configuration.context)
        .name(configuration.name)
        .callback(_openCallback)
        .build();
    final SupportSQLiteOpenHelper _helper = configuration.sqliteOpenHelperFactory.create(_sqliteConfig);
    return _helper;
  }

  @Override
  protected InvalidationTracker createInvalidationTracker() {
    return new InvalidationTracker(this, "heloe");
  }

  @Override
  public void clearAllTables() {
    super.assertNotMainThread();
    final SupportSQLiteDatabase _db = super.getOpenHelper().getWritableDatabase();
    try {
      super.beginTransaction();
      _db.execSQL("DELETE FROM `heloe`");
      super.setTransactionSuccessful();
    } finally {
      super.endTransaction();
      _db.query("PRAGMA wal_checkpoint(FULL)").close();
      if (!_db.inTransaction()) {
        _db.execSQL("VACUUM");
      }
    }
  }

  @Override
  public UserDao personDao() {
    if (_userDao != null) {
      return _userDao;
    } else {
      synchronized(this) {
        if(_userDao == null) {
          _userDao = new UserDao_Impl(this);
        }
        return _userDao;
      }
    }
  }
}
