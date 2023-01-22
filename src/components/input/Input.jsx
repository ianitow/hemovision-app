import { View, TextInput } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from 'src/theme/colors';

export const Input = ({
  placeholder,
  iconColor = colors.primary,
  iconName,
  secureTextEntry,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(null);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setValue();
  }

  return (
    <View
      className="flex-row pl-2 w-full border h-14 items-center rounded my-2"
      style={{
        borderColor: isFocused ? colors.primary : colors.borderCard,
      }}
    >
      <MaterialIcons name={iconName} color={iconColor} size={20}></MaterialIcons>
      <TextInput
        value={value}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        className="ml-2  h-full flex-1"
        secureTextEntry={secureTextEntry}
        {...rest}
      ></TextInput>
    </View>
  );
};
