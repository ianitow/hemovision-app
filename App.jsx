import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PublicNavigator, AuthNavigator } from 'src/navigations';
import { lockPortraitMode } from 'src/utils/screen';

export default function App() {
  useEffect(() => {
    lockPortraitMode();
  }, []);

  const state = {
    public: () => <PublicNavigator />,
    logged: () => <AuthNavigator />,
  };
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>{state['logged']()}</SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
