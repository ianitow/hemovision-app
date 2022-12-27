import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import { colors } from 'src/theme/colors';
import { Image } from 'react-native';
import SwipeLeft from 'src/assets/swipe_left.svg';
import { HText } from 'src/components/h-text/Text';

export function PostImage({ overlay = false }) {
  return (
    <View className="flex  h-80 border relative" style={{ borderColor: colors.boxBackground }}>
      {overlay && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.35)',
            zIndex: 2,
          }}
          className="flex items-center justify-center rounded"
        >
          <View className=" ">
            <SwipeLeft className="self-center text-white w-32 h-32 " fill="white" />
          </View>
          <HText className="text-center text-white text-xl">Arraste para a esquerda</HText>
          <HText className="text-center text-white font-light mt-2">
            Para acessar as classificações de outros usuários
          </HText>
        </View>
      )}
      <Image
        className="h-full w-full rounded"
        source={{ uri: 'https://o.quizlet.com/pJTq0KYYdDMC20Bsu9Qrgg_b.jpg' }}
        PlaceholderContent={<ActivityIndicator />}
      ></Image>
    </View>
  );
}
