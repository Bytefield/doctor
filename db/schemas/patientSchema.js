export default patientSchema = {
    name: 'Patient',
    primaryKey: '_id',
    properties: {
        _id: 'objectId',
        firstName: 'string',
        lastName: 'string',
        gender: 'string',
        dateOfBirth: 'date',
        phone: {
            type: 'object',
            properties: {
                home: 'string',
                mobile: 'string',
            },
        },
        email: 'string',
        address: {
            street: 'string',
            city: 'string',
            state: 'string',
            zipCode: 'string',
        },
        medicalHistory: {
            type: 'array',
            objectType: 'MedicalRecord',
        },
    },
};