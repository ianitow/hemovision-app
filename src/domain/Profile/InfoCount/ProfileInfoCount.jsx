import { View, Text } from 'react-native';
import React from 'react';
import { HText } from 'src/components/h-text/Text';
import { colors } from 'src/theme/colors';

export function ProfileInfoCount({ value, label }) {
  return (
    <View className=" self-start justify-center items-center ">
      <HText className="text-lg font-bold " style={{ color: colors.textCharcoal }}>
        {value}
      </HText>
      <HText className="font-light text-md">{label}</HText>
    </View>
  );
}
