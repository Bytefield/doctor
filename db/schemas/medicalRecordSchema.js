const medicalRecordSchema = {
    name: 'MedicalRecord',
    primaryKey: '_id',
    properties: {
        _id: 'objectId',
        date: 'date',
        doctor: 'string',
        diagnosis: 'string',
        prescription: 'string',
    },
};