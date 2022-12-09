import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';

export function KeyboardAvoidingViewWrapper({
  contentContainerStyle = [],
  style = [],
  children,
  showsVerticalScrollIndicator = false,
}) {
  return (
    <KeyboardAvoidingView style={[{ flex: 1 }, ...style]}>
      <ScrollView
        contentContainerStyle={[...contentContainerStyle]}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
