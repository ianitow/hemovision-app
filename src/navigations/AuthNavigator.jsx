import React from "react";

import {
    Feed,
    Classify,
    Collections,
    Notifications,
    Profile,
} from "src/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "src/theme/colors";
import Constants from "expo-constants";
const Tab = createBottomTabNavigator();

export function AuthNavigator() {
    return (
        <>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let properties = {
                            Feed: {
                                iconName: focused ? "home" : "home-outline",
                                color: focused ? colors.primary : colors.text,
                            },
                            Collections: {
                                iconName: focused ? "list" : "list-outline",
                                color: focused ? colors.primary : colors.text,
                            },
                            Classify: {
                                iconName: focused ? "camera" : "camera-outline",
                                color: focused ? colors.primary : colors.text,
                            },
                            Notifications: {
                                iconName: focused
                                    ? "notifications"
                                    : "notifications-outline",
                                color: focused ? colors.primary : colors.text,
                            },
                            Profile: {
                                iconName: focused ? "person" : "person-outline",
                                color: focused ? colors.primary : colors.text,
                            },
                        };

                        // You can return any component that you like here!
                        return (
                            <Ionicons
                                name={properties[route.name].iconName}
                                size={28}
                                color={properties[route.name].color}
                            />
                        );
                    },

                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.text,
                    headerShown: false,

                    headerStyle: {
                        backgroundColor: "#f4511e",
                    },
                })}
            >
                <Tab.Screen name="Feed" component={Feed} />
                <Tab.Screen name="Collections" component={Collections} />
                <Tab.Screen name="Classify" component={Classify} />
                <Tab.Screen name="Notifications" component={Notifications} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </>
    );
}
