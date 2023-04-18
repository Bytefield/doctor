import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const PatientDetailScreen = ({ route, navigation }) => {
    const { patient } = route.params;

    const handleCreateAppointmentPress = () => {
        navigation.navigate('CreateAppointment', { patient });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.patientName}>{patient.name}</Text>
            <Text style={styles.patientAge}>Age: {patient.age}</Text>
            <Button
                title="Create Appointment"
                onPress={handleCreateAppointmentPress}
            />
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
    patientAge: {
        fontSize: 18,
    },
});

export default PatientDetailScreen;
