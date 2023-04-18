import { useCallback } from 'react';
import SQLite from 'react-native-sqlite-storage';

const useUpdatePatient = () => {
  const updatePatient = useCallback((patient, callback) => {
    const db = SQLite.openDatabase({ name: 'PatientsDB.db' });

    db.transaction((txn) => {
      txn.executeSql(
        'UPDATE patients SET first_name=?, last_name=?, date_of_birth=?, phone_number=?, email=? WHERE id=?',
        [patient.firstName, patient.lastName, patient.dateOfBirth, patient.phoneNumber, patient.email, patient.id],
        (tx, results) => {
          callback(results.rowsAffected);
        },
      );
    });
  }, []);

  return { updatePatient };
};

export default useUpdatePatient;
