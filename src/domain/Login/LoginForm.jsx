import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FacebookIcon from 'src/assets/facebook_icon.svg';
import GoogleIcon from 'src/assets/google_icon.svg';
import AppleIcon from 'src/assets/apple_icon.svg';
import { Input } from 'src/components/input';

export const LoginForm = ({ navigation }) => {
  const [text, onChangeText] = React.useState('Useless Text');

  return (
    <>
      <View className="mt-56">
        <Input
          textContentType="emailAddress"
          borderColor="#EF4444"
          iconColor="#EF4444"
          placeholder="Email"
          iconName="email-outline"
          returnKeyType="next"
        ></Input>
        <Input placeholder="Senha" iconName="lock-outline" secureTextEntry={true}></Input>

        <Text className="ml-auto text-right w-full font-medium pb-6" style={{ color: '#EF4444' }}>
          Esqueceu a senha?
        </Text>
        <View className="flex  ">
          <TouchableOpacity
            className="justify-center items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm  text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-offset-2 w-full h-14 font-bold"
            style={{ backgroundColor: '#EF4444' }}
          >
            <Text className="text-white uppercase">LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View className="pt-4">
          <View className="flex items-center   " style={{ color: '#6B6B6B' }}>
            <Text className=" ">
              Não possui uma conta?{' '}
              <Text
                className="font-medium"
                style={{ color: '#EA5A44' }}
                onPress={() => navigation.navigate('Register')}
              >
                Criar conta
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <View className="mb-4  bottom-0 w-full">
        <View className="flex-row items-center py-4 w-full">
          <View
            className="flex-1 "
            style={{
              flex: 1,
              height: 1,
              backgroundColor: '#C4C4C4',
            }}
          />
          <View>
            <Text
              className="block"
              style={{
                width: 50,
                textAlign: 'center',
                color: '#C4C4C4',
              }}
            >
              OU
            </Text>
          </View>
          <View className="flex-1" style={{ height: 1, backgroundColor: '#C4C4C4' }} />
        </View>
        <View className=" pt-4 flex-row items-center justify-between">
          <GoogleIcon className="h-full w-full" />
          <AppleIcon className="h-full w-full" />
          <FacebookIcon className="h-full w-full" />
        </View>
      </View>
    </>
  );
};
