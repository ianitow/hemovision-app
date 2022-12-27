import { View } from 'react-native';
import React from 'react';
import { HText } from 'src/components/h-text/Text';

import { MaterialIcons } from '@expo/vector-icons';
import { colors } from 'src/theme/colors';
export function ProfileAchievement({ icon, label, count, style = [] }) {
  return (
    <View
      className="border self-start items-center justify-center px-2 w-28 h-28 rounded-xl  "
      style={[{ borderColor: colors.newBorderColor }, ...style]}
    >
      <MaterialIcons name="wallet-giftcard" size={36} color={colors.text} />

      <HText className="font-light text-sm text-center mt-1">{count}</HText>
      <HText className="font-light text-xs text-center mt-1 " style={{ lineHeight: 12 }}>
        {label}
      </HText>
    </View>
  );
}
