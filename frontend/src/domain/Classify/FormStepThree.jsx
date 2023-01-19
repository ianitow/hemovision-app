import { View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { HSelect } from 'src/components/h-select/HSelect';
import { HText } from 'src/components/h-text/Text';
import { Button } from 'src/components/button/Button';
import Checkbox from 'expo-checkbox';
import { colors } from 'src/theme/colors';
import { Picker } from '@react-native-picker/picker';
const { width } = Dimensions.get('window');
export function FormStepThree() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View className="flex-1" style={{ width: width - 32 }}>
      <View className="flex-1">
        <HSelect className="mb-2" label="Quem pode ver a publicação?">
          <Picker.Item label="Todos" value="all" style={{ color: colors.text }} />
          <Picker.Item
            label="Meus seguidores"
            value="my_followers"
            style={{ color: colors.text }}
          />
          <Picker.Item label="Ninguém" value="nobody" style={{ color: colors.text }} />
        </HSelect>
        <HSelect className="mb-2" label="Quem pode comentar a publicação?">
          <Picker.Item label="Todos" value="all" style={{ color: colors.text }} />
          <Picker.Item
            label="Meus seguidores"
            value="my_followers"
            style={{ color: colors.text }}
          />
          <Picker.Item label="Ninguém" value="nobody" style={{ color: colors.text }} />
        </HSelect>
        <HSelect className="mb-2" label="Quem pode fazer uma classificação?">
          <Picker.Item label="Todos" value="all" style={{ color: colors.text }} />
          <Picker.Item
            label="Meus seguidores"
            value="my_followers"
            style={{ color: colors.text }}
          />
          <Picker.Item label="Ninguém" value="nobody" style={{ color: colors.text }} />
        </HSelect>
        <View className="flex-row flex items-center  my-2 flex-shrink">
          <Checkbox value={isChecked} onValueChange={setIsChecked} color={colors.primary} />
          <HText className="ml-2 flex-shrink font-bold">
            Receber atualizações dessa publicação ?
          </HText>
        </View>
      </View>

      <View className=" justify-end mb-2">
        <Button className="">Publicar</Button>
      </View>
    </View>
  );
}
