import Realm from 'realm';
import { ObjectId } from 'bson';
import patientSchema from './schemas/patientSchema';
import medicalRecordSchema from './schemas/medicalRecordSchema';

const DATABASE_NAME = 'doctor-qtcic.realm';
const OBJECT_TYPES = [patientSchema, medicalRecordSchema];

async function connect() {
  const realm = await Realm.open({
    path: DATABASE_NAME,
    schema: OBJECT_TYPES,
    schemaVersion: 0,
    deleteRealmIfMigrationNeeded: true,
  });
  return realm;
}

async function db() {
  const realm = await Realm.open({ schema: OBJECT_TYPES, path: DATABASE_NAME });
  return realm;
}

function generateObjectId() {
  return new ObjectId().toHexString();
}

export default { connect, db, generateObjectId };
