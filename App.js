import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import PatientListScreen from './src/screens/PatientListScreen';
import PatientDetailScreen from './src/screens/PatientDetailScreen';
import CreateAppointmentScreen from './src/screens/CreateAppointmentScreen';

const Stack = createStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Register">
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ title: 'Login' }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ title: 'Register' }}
                />
                <Stack.Screen
                    name="PatientList"
                    component={PatientListScreen}
                    options={{ title: 'Patient List' }}
                />
                <Stack.Screen
                    name="PatientDetail"
                    component={PatientDetailScreen}
                    options={{ title: 'Patient Detail' }}
                />
                <Stack.Screen
                    name="CreateAppointment"
                    component={CreateAppointmentScreen}
                    options={{ title: 'Create Appointment' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}