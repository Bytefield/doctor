import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Button,
} from 'react-native';

const CreateAppointmentScreen = ({ route }) => {
    const { patient } = route.params;

    // State for date input
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleCreateAppointment = async () => {
        // await ...
    };

    return (
        <View style={styles.container}>
            <Text style={styles.patientName}>{patient.name}</Text>
            <TextInput
                style={styles.input}
                value={date}
                onChangeText={setDate}
                placeholder="Enter appointment date (YYYY-MM-DD)"
            />
            <TextInput
                style={styles.input}
                value={time}
                onChangeText={setTime}
                placeholder="Enter appointment time (HH:mm)"
            />
            <Button title="Create Appointment" onPress={handleCreateAppointment} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    patientName: {
        fontSize: 24,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 16,
        minWidth: '80%',
    },
});

export default CreateAppointmentScreen;
