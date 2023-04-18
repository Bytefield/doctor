import { useCallback } from 'react';
import SQLite from 'react-native-sqlite-storage';

const useDeletePatient = () => {
  const deletePatient = useCallback((patientId, callback) => {
    const db = SQLite.openDatabase({ name: 'PatientsDB.db' });

    db.transaction((txn) => {
      txn.executeSql('DELETE FROM patients WHERE id=?', [patientId], (tx, results) => {
        callback(results.rowsAffected);
      });
    });
  }, []);

  return { deletePatient };
};

export default useDeletePatient;
