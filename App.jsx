import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { PublicNavigator, AuthNavigator } from "src/navigations";

export default function App() {
    const state = {
        public: <PublicNavigator />,
        logged: <AuthNavigator />,
    };
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <SafeAreaView   style={{ flex: 1}}>
                    <PublicNavigator></PublicNavigator>
                </SafeAreaView>
            </NavigationContainer>
        </SafeAreaProvider>
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
