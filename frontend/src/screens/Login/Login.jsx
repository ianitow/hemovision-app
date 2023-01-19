import React from 'react';
import { View, ScrollView } from 'react-native';
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
