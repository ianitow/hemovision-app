import { Text } from 'react-native';
import React from 'react';
import { colors } from 'src/theme/colors';
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from '@expo-google-fonts/open-sans';

const getCorrectFontWeight = (fontWeight = '400') => {
  switch (fontWeight) {
    case '300':
      return 'OpenSans_300Light';
    case '500':
    case '600':
      return 'OpenSans_600SemiBold';
    case '700':
      return 'OpenSans_700Bold';
    case '800':
      return 'OpenSans_800Bold';
    default:
      return 'OpenSans_400Regular';
  }
};
export function HText({ children, style = [], ...rest }) {
  const fontFamily = getCorrectFontWeight(style.find(({ fontWeight }) => fontWeight)?.fontWeight);
  const newStyles = [{ fontFamily, color: colors.text }, ...style];

  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular_Italic,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Text style={newStyles} {...rest}>
      {children}
    </Text>
  );
}
