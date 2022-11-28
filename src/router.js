import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import EsqueciSenha from "./pages/EsqueciSenha";
import AlterarSenha from "./pages/AlterarSenha";
import Agendar from "./pages/Agendar";
import Home from "./pages/Home";
import ScheduleDetails from "./pages/ScheduleDetails";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
          initialParams={{ userId: 4, userName: "Teste username" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EsqueciSenha"
          component={EsqueciSenha}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AlterarSenha"
          component={AlterarSenha}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScheduleDetails"
          component={ScheduleDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Agendar"
          component={Agendar}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
