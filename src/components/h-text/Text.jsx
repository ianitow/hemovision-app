import { View, Text } from 'react-native';
import React from 'react';
import { colors } from 'src/theme/colors';

export function HText({ children, style = [], ...rest }) {
  const newStyles = [{ color: colors.text }, ...style];
  return (
    <Text style={newStyles} {...rest}>
      {children}
    </Text>
  );
}
