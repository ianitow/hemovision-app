import { View } from 'react-native';
import React from 'react';
import { colors } from 'src/theme/colors';
import { HText } from 'src/components/h-text/Text';

export function CardCollectionItem({ name, description, style, avatarComponent }) {
  console.log(style);
  return (
    <View
      className="items-center flex-row h-32 mb-2  rounded px-4"
      style={{
        backgroundColor: colors.secondBackground,
        borderColor: colors.borderCard,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
      }}
    >
      <View className="items-center justify-center h-full">{avatarComponent}</View>
      <View className="ml-3 flex justify-center h-full w-full flex-shrink">
        <HText className="font-bold  text-base">{name}</HText>

        <HText className="font-light text-justify">{description}</HText>
      </View>
    </View>
  );
}
