import { View } from 'react-native';
import React from 'react';
import { HText } from 'src/components/h-text/Text';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from 'src/theme/colors';
export function ProfileAchievement({ label, count, style = [] }) {
  const p = {
    '+500': <MaterialCommunityIcons name="comment-check" size={36} color={colors.second} />,
    '+1000': <Ionicons name="heart-sharp" size={36} color={colors.second} />,
    '+100': <Ionicons name="medal" size={36} color={colors.second} />,
  };

  return (
    <View
      className="border self-start items-center justify-center px-2 w-28 h-28 rounded-xl  "
      style={[
        { borderColor: colors.borderCard, backgroundColor: colors.secondBackground },
        ...style,
      ]}
    >
      {p[count]}

      <HText className=" text-sm text-center mt-1" style={{ color: colors.text }}>
        {count}
      </HText>
      <HText
        className="font-light text-xs text-center mt-1 "
        style={{ color: colors.text, lineHeight: 12 }}
      >
        {label}
      </HText>
    </View>
  );
}
