import {
  View,
  TextInput,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { HText } from 'src/components/h-text/Text';
import { Picker } from '@react-native-picker/picker';
import { colors } from 'src/theme/colors';
import { HSelect } from 'src/components/h-select/HSelect';
import { Button } from 'src/components/button/Button';
import { KeyboardAvoidingViewWrapper } from 'src/components/general/KeyboardAvoidingViewWrapper';
import { HTextArea } from 'src/components/textarea/HTextArea';
const { width } = Dimensions.get('window');
export function FormStepTwo({ onPressNext, onPressClear }) {
  const [text, setText] = useState('');

  return (
    <KeyboardAvoidingViewWrapper
      showsVerticalScrollIndicator={false}
      style={[{ width: width - 32 }]}
    >
      <View className="flex-1">
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

        <View className="mt-2 flex-1  h-full flex-grow  ">
          <HText className="font-bold mb-1 ">Descrição (opcional)</HText>
          <HTextArea />
        </View>

        <View className=" justify-end ">
          <Button className="mb-2" onPress={onPressNext}>
            AVANÇAR
          </Button>
          <Button outlined onPress={onPressClear}>
            Voltar
          </Button>
        </View>
      </View>
    </KeyboardAvoidingViewWrapper>
  );
}
