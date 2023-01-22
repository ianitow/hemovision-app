import React from 'react';

import { Classify, Collections, Feed, Notifications, Profile } from 'src/screens';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {} from '@react-navigation/elements';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from 'src/theme/colors';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from 'src/components/header/Header';
import { Comment } from 'src/screens/Comment/Comment';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export function DefaultBottomTabs() {
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

export function AuthNavigator() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DefaultBottomTabs" component={DefaultBottomTabs} />

        <Stack.Group screenOptions={{ headerShown: true }}>
          <Stack.Screen
            name="CommentModal"
            component={Comment}
            options={{
              animation: 'slide_from_bottom',
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
}
