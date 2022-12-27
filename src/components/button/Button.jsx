import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from 'src/theme/colors';

export function Button({
  outlined = false,
  children,
  style = [],
  icon = null,
  iconRight = null,
  textStyle = [],
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
      className="flex-row items-center rounded-md border   px-4 py-2 text-sm  text-white shadow-sm  focus:outline-none focus:ring-offset-2 w-full h-10 font-bold "
      style={newStyles}
      {...rest}
    >
      {icon && <View className="mr-1">{icon}</View>}
      <Text
        className="uppercase self-centerborder "
        style={[{ color: outlined ? colors.primary : '#FFFFFF' }, ...textStyle]}
      >
        {children}
      </Text>

      {iconRight && <View className="ml-1">{iconRight}</View>}
    </TouchableOpacity>
  );
}
