import { View, Text } from 'react-native'
import React from 'react'
import Logo from "src/assets/logo.svg";
export function HemovisionLogo() {
  return (
    <View className="flex items-center  justify-center h-32">
    <Logo className="h-full w-full" />
  </View>
  )
}