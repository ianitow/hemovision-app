import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { colors } from 'src/theme/colors';
import { Header } from '../header/Header';

export function Layout({ contentContainerStyle, style = [], children }) {
  return (
    <View
      className="flex flex-1 mx-4 my-4 mb-2   "
      style={[{ backgroundColor: '#f3f3f3', color: colors.text }, ...style]}
    >
      <ScrollView
        contentContainerStyle={contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );
}
