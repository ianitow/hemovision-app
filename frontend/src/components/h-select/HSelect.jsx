import { View } from 'react-native';
import React, { useState } from 'react';
import { HText } from '../h-text/Text';
import { Picker } from '@react-native-picker/picker';
import { colors } from 'src/theme/colors';

export function HSelect({ label, style = [], children }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isFocused, setIsFocused] = useState();
  function handleFocus() {
    setIsFocused(true);
  }
  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <View style={[...style]}>
      {label && <HText className="font-bold mb-1">{label}</HText>}
      <View
        className="border rounded p-0.5 "
        style={{
          backgroundColor: colors.boxBackground,
          borderColor: isFocused ? colors.primary : colors.newBorderColor,
        }}
      >
        <Picker
          style={{
            backgroundColor: colors.boxBackground,
          }}
          placeholder="Select language"
          mode="dropdown"
          onFocus={handleFocus}
          onBlur={handleBlur}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        >
          {children}
        </Picker>
      </View>
    </View>
  );
}
