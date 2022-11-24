import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import  { AuthNavigator } from "src/navigations";

export default function App() {
    return (
        <NavigationContainer>
           <AuthNavigator/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#9b30ff",
        alignItems: "center",
        justifyContent: "center",
    },
});
