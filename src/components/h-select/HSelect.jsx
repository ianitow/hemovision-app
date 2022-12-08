import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { HText } from '../h-text/Text';
import { Picker } from '@react-native-picker/picker';
import { colors } from 'src/theme/colors';

export function HSelect({ label, style = [], children }) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={[...style]}>
      <HText className="font-bold mb-1">{label}</HText>
      <View className="border rounded  border-gray-300" style={{}}>
        <Picker
          style={{ backgroundColor: colors.boxBackground }}
          mode="dropdown"
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        >
          {children}
        </Picker>
      </View>
    </View>
  );
}
