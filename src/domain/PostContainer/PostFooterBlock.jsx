import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from 'src/theme/colors';
import { HText } from 'src/components/h-text/Text';

export function PostFooterBlock({ style }) {
  return (
    <View className={`border-t py-2`} style={{ borderColor: colors.borderCard, ...style }}>
      <HText className="text-xs font-light text-center">
        Classifique para ter acesso completo a publicação.
      </HText>
      <View className="self-center w-auto mt-2  ">
        <TouchableOpacity
          className="justify-center items-center rounded-md  bg-transparent  px-4  text-sm  shadow-sm   w-full h-9 font-bold"
          style={{ backgroundColor: colors.primary }}
        >
          <HText className=" text-white text-xs uppercase font-medium">Classificar</HText>
        </TouchableOpacity>
      </View>
    </View>
  );
}
