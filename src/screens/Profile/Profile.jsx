import { View, ImageBackground } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-elements';
import { colors } from 'src/theme/colors';
import { HText } from 'src/components/h-text/Text';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'src/components/button/Button';
import { ProfileInfoCount } from 'src/domain/Profile/InfoCount/ProfileInfoCount';
import { Layout } from 'src/components/layout/Layout';
import { ProfileAchievement } from 'src/domain/Profile/Achievement/ProfileAchievement';
import ProfileLastActivity from 'src/domain/Profile/LastActivity/ProfileLastActivity';

export function Profile() {
  return (
    <Layout resetStyle={true}>
      <View className="flex flex-1 ">
        <View className="flex-row items-end h-48  ">
          <View className="absolute w-full h-40 top-0 ">
            <ImageBackground
              source={{
                uri: 'https://libg.s3.us-east-2.amazonaws.com/download/Modern-Medicine.png',
              }}
              style={{ flex: 1 }}
              resizeMode="cover"
            />
          </View>
          <View className="px-4">
            <Avatar
              size={88}
              containerStyle={{
                borderWidth: 1,
                borderColor: colors.newBorderColor,
              }}
              rounded
              source={{
                uri: 'https://img.freepik.com/fotos-gratis/bela-jovem-doutora-olhando-a-camera-no-escritorio_1301-7807.jpg?w=2000',
              }}
            />
          </View>
        </View>
        <View className="">
          <View className="px-4 flex flex-row justify-between">
            <View>
              <HText
                className="font-medium text-xl self-start"
                style={{ color: colors.textCharcoal }}
              >
                Érica Silva
              </HText>
              <View className="flex flex-row items-center gap-x-1  ">
                <MaterialIcons name="work-outline" size={16} color={colors.text} />
                <HText className="font-light">Biomédica na HC-UFG</HText>
              </View>
            </View>
            <View className="self-end ">
              <Button
                className="h-10 self-end w-28"
                icon={<MaterialIcons name="person-add" size={20} color="white" />}
              >
                Seguir
              </Button>
            </View>
          </View>
          <View className="px-4 mt-4  border-b " style={{ borderColor: colors.newBorderColor }}>
            <HText className="font-light text-justify mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commod
            </HText>
          </View>
          <View
            className=" flex-wrap px-4 flex-row justify-between border-b py-4"
            style={{ borderColor: colors.newBorderColor }}
          >
            <ProfileInfoCount value="15" label="Seguidores" />
            <ProfileInfoCount value="15" label="Seguidores" />
            <ProfileInfoCount value="15" label="Seguidores" />
          </View>
        </View>
        <View className="px-4 mt-2">
          <HText className="text-lg mb-4">Conquistas</HText>
          <View className="flex-wrap flex-row  justify-center">
            <ProfileAchievement className="" label="Contribuições" count="+500" />
            <ProfileAchievement className="ml-auto" label="Contribuições" count="+500" />
            <ProfileAchievement className="ml-auto" label="Contribuições" count="+500" />
            <HText className="w-full text-right mx-auto mt-1 underline">Ver mais</HText>
          </View>
        </View>
        <View className="px-4 mt-2 mb-4">
          <HText className="text-lg mb-4">Últimas atividades</HText>
          <ProfileLastActivity typeNotification={'love'} />
          <ProfileLastActivity typeNotification={'comment'} />
          <ProfileLastActivity name="Iaan Mesquita de Souza" typeNotification={'rate'} />
          <ProfileLastActivity typeNotification={'following'} />
          <HText className="w-full text-center mx-auto mt-1 underline">Ver mais</HText>
        </View>
      </View>
    </Layout>
  );
}
