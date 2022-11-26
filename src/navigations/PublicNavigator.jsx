import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "src/screens/Login";
import { Register } from "src/screens/Register";

const Stack = createNativeStackNavigator();

export function PublicNavigator() {
    return (
        <>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </>
    );
}
