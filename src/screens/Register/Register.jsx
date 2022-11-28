import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import { Input } from 'src/components/input';
import { HemovisionLogo } from 'src/components/hemovision-logo';
import Checkbox from 'expo-checkbox';
import { colors } from 'src/theme/colors';
import { RegisterForm } from 'src/domain';

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
