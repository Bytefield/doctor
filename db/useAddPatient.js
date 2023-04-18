import { useCallback } from 'react';
import SQLite from 'react-native-sqlite-storage';

const useAddPatient = () => {
  const addPatient = useCallback((patient, callback) => {
    const db = SQLite.openDatabase({ name: 'PatientsDB.db' });

    db.transaction((txn) => {
      txn.executeSql(
        'INSERT INTO patients (first_name, last_name, date_of_birth, phone_number, email) VALUES (?, ?, ?, ?, ?)',
        [patient.firstName, patient.lastName, patient.dateOfBirth, patient.phoneNumber, patient.email],
        (tx, results) => {
          callback(results.insertId);
        },
      );
    });
  }, []);

  return { addPatient };
};

export default useAddPatient;