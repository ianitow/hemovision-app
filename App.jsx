import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { PublicNavigator, AuthNavigator } from 'src/navigations';

export default function App() {
  const state = {
    public: () => <PublicNavigator />,
    logged: () => <AuthNavigator />,
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>{state['logged']()}</SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
