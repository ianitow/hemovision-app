import { View } from 'react-native';
import React from 'react';
import { colors } from 'src/theme/colors';
import { HText } from '../h-text/Text';

export function Title({ children, style = [] }) {
  return (
    <View
      className=" mb-4 "
      style={[...style, { borderLeftWidth: 10, borderColor: colors.primary }]}
    >
      <View className="pl-2">
        <HText className="font-bold text-lg">{children}</HText>
      </View>
    </View>
  );
}
