import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './pages/Login';
import HomeProf from './pages/HomeProf';
import HomeCliente from './pages/HomeCliente';
import DetailCliente from './pages/DetailCliente';
import DetailProf from './pages/DetailProf';

const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HomeProf"
                    component={HomeProf}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HomeCliente"
                    component={HomeCliente}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="DetailProf"
                    component={DetailProf}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="DetailCliente"
                    component={DetailCliente}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;