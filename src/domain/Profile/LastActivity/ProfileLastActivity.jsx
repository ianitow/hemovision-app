import { View, Text } from 'react-native';
import React from 'react';
import { colors } from 'src/theme/colors';
import { HText } from 'src/components/h-text/Text';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const postMakeComment = ({ name }) => {
  return (
    <HText className="flex-wrap">
      Fez um <HText className="font-bold">comentário</HText> na publicação de
      <HText className="font-bold"> {name}</HText>.
    </HText>
  );
};

const startFollowing = ({ name }) => {
  return (
    <HText className="flex-wrap">
      Começou a seguir <HText className="font-bold">{name}</HText>.
    </HText>
  );
};
const postReactLove = ({ name, comment }) => {
  return (
    <HText className="flex-wrap">
      <HText className="font-bold">Reagiu</HText> a um comentário de{' '}
      <HText className="font-bold"> {name}</HText>
      <HText className="font-bold"> &quot;{comment}&quot;</HText>.
    </HText>
  );
};

const postRated = ({ name, bloodType }) => {
  return (
    <HText className="flex-wrap">
      <HText className="font-bold">Avaliou</HText> uma publicação de
      <HText className="font-bold"> {name}</HText> como sendo
      <HText className="font-bold"> {bloodType}</HText>.
    </HText>
  );
};

const ProfileLastActivity = ({ name = 'Desconhecido', typeNotification = 'default' }) => {
  const properties = {
    comment: {
      icon: <MaterialIcons name="chat-bubble" size={24} color="white" />,
      size: 24,
      backgroundColor: colors.success,
      renderComponent: postMakeComment({ name }),
    },
    love: {
      icon: <AntDesign name="heart" size={24} color="white" />,
      size: 24,
      backgroundColor: colors.primary,
      renderComponent: postReactLove({ name, comment: 'lorem ipsum dolem' }),
    },
    rate: {
      icon: <MaterialIcons name="poll" size={24} color="white" />,
      backgroundColor: colors.second,
      renderComponent: postRated({ name, bloodType: 'Neutrófilo' }),
    },
    following: {
      icon: <MaterialIcons name="person-add" size={24} color="white" />,
      backgroundColor: colors.info,
      renderComponent: startFollowing({ name }),
    },

    default: {
      icon: <MaterialIcons name="person-add" size={24} color="white" />,
      backgroundColor: colors.info,
      renderComponent: startFollowing({ name }),
    },
  };
  return (
    <View
      className="border-b border-r h-24 border-l-8 justify-center flex-row mb-1"
      style={{
        backgroundColor: colors.secondBackground,
        borderLeftColor: properties[typeNotification].backgroundColor,
        borderBottomColor: colors.newBorderColor,
        borderRightColor: colors.newBorderColor,
      }}
    >
      <View
        className="self-center ml-2 w-12 h-12 rounded-full  items-center justify-center"
        style={{
          backgroundColor: properties[typeNotification].backgroundColor,
        }}
      >
        {properties[typeNotification].icon}
      </View>
      <View className=" flex-1 justify-center ml-2">
        {properties[typeNotification].renderComponent}
        <View className="flex-row items-center justify-center self-start">
          <Ionicons name="ios-time-outline" size={14} color={colors.text} />
          <HText className="text-xs">há 2 minutos</HText>
        </View>
      </View>
    </View>
  );
};

export default ProfileLastActivity;
