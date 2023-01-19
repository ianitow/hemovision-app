import { View } from 'react-native';
import React from 'react';
import { HText } from 'src/components/h-text/Text';
import { PostImage } from '../PostContainer/PostImage';
import { HSelect } from 'src/components/h-select/HSelect';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'src/components/button/Button';
import { colors } from 'src/theme/colors';
export function ClassifyModal({ onClickClassify }) {
  return (
    <View
      className="w-11/12  bg-blue-200 border rounded px-4 pb-5"
      style={{
        backgroundColor: colors.secondBackground,
        borderColor: colors.borderCard,
      }}
    >
      <View>
        <HText className=" my-2 text-center p-2">Classifique a célula abaixo</HText>
        <PostImage></PostImage>
        <HSelect className="mt-4">
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
        <Button className="mt-4" onPress={onClickClassify}>
          Classificar
        </Button>
      </View>
    </View>
  );
}
