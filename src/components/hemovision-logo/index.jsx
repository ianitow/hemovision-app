import { View, Text } from 'react-native';
import React from 'react';
import Logo from 'src/assets/logo.svg';
import LogoMinimal from 'src/assets/logo_minimal.svg';
export function HemovisionLogo({ size = 32, isMinimal = false }) {
  return (
    <View className={`flex items-center  justify-center h-${size}`}>
      {isMinimal ? <LogoMinimal className="h-full w-full" /> : <Logo className="h-full w-full" />}
    </View>
  );
}
