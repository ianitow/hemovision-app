import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Title } from 'src/components/title/Title';
import { MaterialIcons } from '@expo/vector-icons';
import { HText } from 'src/components/h-text/Text';
import { Picker } from '@react-native-picker/picker';
import { colors } from 'src/theme/colors';
import { Button } from 'src/components/button/Button';
export function FormStepOne({ onPressNext, onClickClearStep }) {
  return (
    <View className="flex-1">
      <View
        className="items-center justify-center h-72  rounded border"
        style={{ borderColor: 'rgba(0,0,0,.10)', backgroundColor: colors.boxBackground }}
      >
        <MaterialIcons name="add-photo-alternate" size={72} color={colors.text} />
        <HText className="text-center mt-2">Selecione uma imagem da sua galeria</HText>
      </View>

      <View className="flex-1  justify-end mb-2">
        <Button className="mb-2" onPress={onPressNext}>
          AVANÇAR
        </Button>
        <Button outlined onClick={onClickClearStep}>
          Limpar
        </Button>
      </View>
    </View>
  );
}
