import { useEffect } from 'react';
import SQLite from 'react-native-sqlite-storage';

export default useCreateDatabase = () => {
  useEffect(() => {
    const db = SQLite.openDatabase({ name: 'PatientsDB.db' });

    db.transaction((txn) => {
      txn.executeSql(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='patients'`,
        [],
        (_, result) => {
          if (result.rows.length === 0) {
            txn.executeSql(
              `CREATE TABLE IF NOT EXISTS patients (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                first_name TEXT,
                last_name TEXT,
                date_of_birth TEXT,
                phone_number TEXT,
                email TEXT,
                password TEXT
              );`,
              []
            );
          }
        }
      );

      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS visits (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          patient_id INTEGER,
          date TEXT,
          details TEXT,
          FOREIGN KEY (patient_id) REFERENCES patients (id)
        );`,
        [],
      );
    });
  }, []);
};