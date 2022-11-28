import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from 'src/theme/colors';

export function PostFooterBlock() {
  return (
    <View className="border-t py-2" style={{ borderColor: colors.borderCard }}>
      <Text className="text-xs font-light text-center">
        Classifique para ter acesso completo a publicação.
      </Text>
      <View className="self-center w-auto mt-2  ">
        <TouchableOpacity
          className="justify-center items-center rounded-md  bg-transparent  px-4  text-sm  shadow-sm   w-full h-8 font-bold"
          style={{ backgroundColor: colors.primary }}
        >
          <Text className=" text-white text-xs uppercase font-medium">Classificar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
