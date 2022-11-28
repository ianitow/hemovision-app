import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { colors } from 'src/theme/colors';
import { Header } from '../header/Header';

export function Layout({ children }) {
  return (
    <View className="flex flex-1 " style={{ backgroundColor: '#f3f3f3', color: colors.text }}>
      <Header />
      <ScrollView>{children}</ScrollView>
    </View>
  );
}
