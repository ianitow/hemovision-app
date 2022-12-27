import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from 'src/theme/colors';

export function Button({
  outlined = false,
  children,
  style = [],
  icon = null,
  iconRight = null,
  ...rest
}) {
  const newStyles = [
    {
      backgroundColor: outlined ? 'transparent' : colors.primary,

      borderColor: outlined ? colors.primary : 'transparent',
    },
    ...style,
  ];

  return (
    <TouchableOpacity
      className="flex-row justify-center items-center rounded-md border   px-4 py-2 text-sm  text-white shadow-sm  focus:outline-none focus:ring-offset-2 w-full h-14 font-bold"
      style={newStyles}
      {...rest}
    >
      <View className="mr-1">{icon}</View>
      <Text className="uppercase" style={{ color: outlined ? colors.primary : '#FFFFFF' }}>
        {children}
      </Text>
      <View className="ml-1">{iconRight}</View>
    </TouchableOpacity>
  );
}
