import { View, Dimensions } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { HText } from 'src/components/h-text/Text';
import { colors } from 'src/theme/colors';
import { Button } from 'src/components/button/Button';
const { width } = Dimensions.get('window');

export function FormStepOne({ onPressNext, onClickClearStep }) {
  return (
    <View style={{ width: width - 32 }}>
      <View
        className="items-center justify-center h-72  rounded border"
        style={{ borderColor: 'rgba(0,0,0,.10)', backgroundColor: colors.boxBackground }}
      >
        <MaterialIcons name="add-photo-alternate" size={72} color={colors.text} />
        <HText className="text-center mt-2">Selecione uma imagem da sua galeria</HText>
      </View>

      <View className="flex-1  justify-end mb-2">
        <Button className="mb-2 h-14" onPress={onPressNext}>
          AVANÇAR
        </Button>
        <Button className="h-14" outlined onClick={onClickClearStep}>
          Limpar
        </Button>
      </View>
    </View>
  );
}
