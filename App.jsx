import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PublicNavigator, AuthNavigator } from 'src/navigations';
import { lockPortraitMode } from 'src/utils/screen';
import { Header } from 'src/components/header/Header';
export default function App() {
  useEffect(() => {
    lockPortraitMode();
  }, []);

  const state = {
    public: () => <PublicNavigator />,
    logged: () => <AuthNavigator />,
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <Header />
          {state['logged']()}
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
