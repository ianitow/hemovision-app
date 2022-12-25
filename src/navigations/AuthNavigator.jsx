import React from 'react';

import { Feed, Classify, Collections, Notifications, Profile } from 'src/screens';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {} from '@react-navigation/elements';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from 'src/theme/colors';
import Constants from 'expo-constants';
import { Text, View } from 'react-native';
import { Header } from 'src/components/header/Header';
const Tab = createMaterialTopTabNavigator();

export function AuthNavigator() {
  return (
    <>
      <Header />
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarPosition={'bottom'}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let properties = {
              Feed: {
                iconName: focused ? 'home' : 'home-outline',
                color: focused ? colors.primary : colors.text,
              },
              Collections: {
                iconName: focused ? 'list' : 'list-outline',
                color: focused ? colors.primary : colors.text,
              },
              Classify: {
                iconName: focused ? 'camera' : 'camera-outline',
                color: focused ? colors.primary : colors.text,
              },
              Notifications: {
                iconName: focused ? 'notifications' : 'notifications-outline',
                color: focused ? colors.primary : colors.text,
              },
              Profile: {
                iconName: focused ? 'person' : 'person-outline',
                color: focused ? colors.primary : colors.text,
              },
            };

            // You can return any component that you like here!
            return (
              <View
                className=" self-center w-9 h-9 flex flex-row items-center justify-center"
                style={{ marginTop: -8 }}
              >
                <Ionicons
                  name={properties[route.name].iconName}
                  size={28}
                  color={properties[route.name].color}
                />
              </View>
            );
          },
          tabBarStyle: {
            paddingVertical: 2,
          },

          tabBarPressColor: colors.primary,
          tabBarShowLabel: false,
          tabBarIndicatorStyle: {
            borderBottomWidth: 2,
            borderBottomColor: colors.primary,
          },
          keyboardHidesTabBar: Platform.OS == 'ios' ? false : true,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.text,
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
