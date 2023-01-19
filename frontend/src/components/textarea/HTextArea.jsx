import { View, TouchableWithoutFeedback, TextInput, Keyboard } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { colors } from 'src/theme/colors';

export function HTextArea() {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  function handleFocus() {
    setIsFocused(true);
  }
  function handleBlur() {
    setIsFocused(false);
  }
  const descriptionRef = useRef();

  const keyboardDidHideCallback = () => {
    descriptionRef.current.blur?.();
  };
  useEffect(() => {
    const keyboardDidHideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHideCallback
    );

    return () => {
      keyboardDidHideSubscription?.remove();
    };
  }, []);
  return (
    <TouchableWithoutFeedback onPress={() => descriptionRef.current.focus()}>
      <View
        className=" rounded flex-1 border  mb-4 p-2  h-44 "
        style={{
          backgroundColor: colors.boxBackground,
          borderColor: isFocused ? colors.primary : colors.newBorderColor,
        }}
      >
        <TextInput
          value={text}
          ref={(ref) => {
            descriptionRef && (descriptionRef.current = ref);
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          multiline
          scrollEnabled={false}
          onChange={(e) => setText(e)}
          style={{
            color: colors.text,
          }}
          editable
          className="  align-top "
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
