import React from 'react';
import { ImageBackground, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { HText } from 'src/components/h-text/Text';
import { ProfileAchievement } from './Achievement/ProfileAchievement';
import { ProfileInfoCount } from './InfoCount/ProfileInfoCount';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfileLastActivity from './LastActivity/ProfileLastActivity';
import { colors } from 'src/theme/colors';
import { Button } from 'src/components/button/Button';

export function ProfilePage({ user }) {
  const isMe = true;
  const { firstName, lastName, jobDescription, avatar, coverImage, followers, following, resume } =
    user;
  return (
    <View className="flex flex-1 ">
      <View className="flex-row items-end h-48  ">
        <View className="absolute w-full h-40 top-0 ">
          <ImageBackground
            source={{
              uri: coverImage.uri,
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
              uri: avatar.uri,
            }}
          />
        </View>
      </View>
      <View className="">
        <View className="px-4 flex flex-row justify-between">
          <View className=" flex-1">
            <View className="flex-row justify-between  ">
              <View className=" ">
                <HText
                  className="font-medium text-xl text-left flex-wrap w-56 "
                  style={{ color: colors.textCharcoal, lineHeight: 24 }}
                >
                  {firstName} {lastName}
                </HText>
                <View className="flex flex-row items-center gap-x-1  ">
                  <MaterialIcons name="work-outline" size={16} color={colors.text} />
                  <HText className="font-light">{jobDescription}</HText>
                </View>
              </View>
              <View className="self-center ">
                {isMe ? (
                  <Button
                    outlined
                    textStyle={[{ color: colors.text }]}
                    style={{ borderColor: colors.text }}
                    className="h-10 self-end w-36"
                    icon={<MaterialIcons name="settings" size={20} color={colors.text} />}
                  >
                    Editar
                  </Button>
                ) : (
                  <Button
                    className="h-10 self-end w-28"
                    icon={<MaterialIcons name="person-add" size={20} color="white" />}
                  >
                    Seguir
                  </Button>
                )}
              </View>
            </View>
          </View>
        </View>
        <View className="px-4 mt-2  border-b " style={{ borderColor: colors.newBorderColor }}>
          <HText className="font-light text-justify">{resume}</HText>
        </View>
        <View
          className=" flex-wrap px-4 flex-row justify-between border-b py-4"
          style={{ borderColor: colors.newBorderColor }}
        >
          <ProfileInfoCount value={followers.length} label="Seguidores" />
          <ProfileInfoCount value={following.length} label="Seguindo" />
          <ProfileInfoCount value="12" label="Pontuação" />
          <ProfileInfoCount value="14" label="Conquistas" />
        </View>
      </View>
      <View className="px-4 mt-2">
        <HText className="text-lg mb-4">Conquistas</HText>
        <View className="flex-wrap flex-row  justify-center">
          <ProfileAchievement className="" label="Contribuições" count="+100" />
          <ProfileAchievement className="ml-auto" label="Comentários" count="+500" />
          <ProfileAchievement className="ml-auto" label="Reações" count="+1000" />
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
  );
}

export default ProfilePage;
