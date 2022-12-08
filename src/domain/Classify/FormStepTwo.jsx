import { View, Text, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { HText } from 'src/components/h-text/Text';
import { Picker } from '@react-native-picker/picker';
import { colors } from 'src/theme/colors';
import { HSelect } from 'src/components/h-select/HSelect';
import { Button } from 'src/components/button/Button';

export function FormStepTwo({ onPressNext, onPressClear }) {
  const [text, setText] = useState('');
  return (
    <View className=" border h-full flex-1">
      <HSelect label="Tipo de célula">
        <Picker.Item
          label="Basófilos"
          value="basophilic"
          style={{ color: colors.text, fontWeight: 'bold' }}
        />
        <Picker.Item label="Eosinófilos" value="eosinophil" style={{ color: colors.text }} />
        <Picker.Item label="Linfócitos" value="lymphocyte" style={{ color: colors.text }} />
        <Picker.Item label="Neutrófilos" value="neutrophil" style={{ color: colors.text }} />
        <Picker.Item label="Monócitos" value="monocyte" style={{ color: colors.text }} />
        <Picker.Item label="Não sei" value="i_dont_know" style={{ color: colors.text }} />
      </HSelect>
      <View className="mt-2 flex-1">
        <HText className="font-bold mb-1">Descrição (opcional)</HText>
        <View
          className="border rounded flex-1 border-gray-300  mb-4 p-2 "
          style={{ backgroundColor: colors.boxBackground }}
        >
          <TextInput
            value={text}
            multiline
            onChange={(e) => setText(e)}
            editable
            className=" border align-top"
          />
        </View>
      </View>

      <View className=" justify-end mb-2">
        <Button className="mb-2" onPress={onPressNext}>
          AVANÇAR
        </Button>
        <Button outlined onPress={onPressClear}>
          Limpar
        </Button>
      </View>
    </View>
  );
}
