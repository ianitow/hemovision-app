import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Logo from 'src/assets/logo.svg';
import FacebookIcon from 'src/assets/facebook_icon.svg';
import GoogleIcon from 'src/assets/google_icon.svg';
import AppleIcon from 'src/assets/apple_icon.svg';
import { Input } from 'src/components/input';
import { HemovisionLogo } from 'src/components/hemovision-logo';
import { colors } from 'src/theme/colors';
import { LoginForm } from 'src/domain/';

export const Login = ({ navigation }) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const gap = 12;

  return (
    <View style={{ backgroundColor: colors.secondBackground }}>
      <View className="flex h-full items-center justify-center  ">
        <View className="w-full flex px-12   ">
          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="justify-center">
              <View className="absolute top-16  self-center">
                <HemovisionLogo isMinimal={false} />
              </View>
              <LoginForm navigation={navigation} />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
