import { useState, useEffect } from 'react';
import SQLite from 'react-native-sqlite-storage';

const useGetPatients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = SQLite.openDatabase({ name: 'PatientsDB.db' });

    db.transaction((txn) => {
      txn.executeSql('SELECT * FROM patients', [], (tx, results) => {
        let data = [];
        for (let i = 0; i < results.rows.length; i++) {
          data.push(results.rows.item(i));
        }
        setPatients(data);
        setLoading(false);
      });
    });
  }, []);

  return { patients, loading };
};

export default useGetPatients;