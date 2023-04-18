import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const patients = [
    { id: '1', name: 'John Doe', age: 45 },
    { id: '2', name: 'Jane Smith', age: 32 },
    { id: '3', name: 'Michael Brown', age: 51 },
];

const PatientListScreen = ({ navigation }) => {

    const [search, setSearch] = useState('');
    const [filteredPatients, setFilteredPatients] = useState(patients);

    const searchPatients = (searchText) => {
        setSearch(searchText);
        if (searchText.trim() === '') {
            setFilteredPatients(patients);
        } else {
            const filtered = patients.filter((patient) =>
                patient.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredPatients(filtered);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                value={search}
                onChangeText={searchPatients}
                placeholder="Search patients..."
            />
            <FlatList
                data={filteredPatients}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => navigation.navigate('PatientDetail', { patient: item })}
                    >
                        <Text style={styles.patientName}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        margin: 8,
    },
    listItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    patientName: {
        fontSize: 18,
    },
});

export default PatientListScreen;