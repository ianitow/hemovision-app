import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { RegisterForm } from 'src/domain';
import { colors } from 'src/theme/colors';

export const Register = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: colors.secondBackground }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex h-full items-center justify-center  ">
          <View className="w-full flex    ">
            <View className="justify-center">
              <RegisterForm navigation={navigation} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <StatusBar style="dark" />
    </View>
  );
};
