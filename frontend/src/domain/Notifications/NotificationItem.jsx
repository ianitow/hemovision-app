import { View } from 'react-native';
import React from 'react';
import { colors } from 'src/theme/colors';
import { HText } from 'src/components/h-text/Text';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);

const NOTIFICATIONS_TYPE = {
  LOVE_POST: 'LOVE_POST',
  START_FOLLOWING_YOU: 'START_FOLLOWING_YOU',
  COMMENT_POST: 'COMMENT_POST',
  IA_CLASSIFY_POST: 'IA_CLASSIFY_POST',
  SYSTEM: 'SYSTEM_NOTIFICATION',
  NEW_CONQUEST: 'NEW_CONQUEST',
  METION_YOU: 'METION_YOU',
  ANALYTICS_POST: 'ANALYTICS_POST',
};

const makeComment = ({ user }) => {
  console.log(user);
  return (
    <HText className="flex-wrap ">
      <HText className="font-bold">
        {firstName}
        {lastName}
      </HText>
      Fez um <HText className="font-bold">comentário</HText> na publicação de
    </HText>
  );
};

const startFollowing = (user) => {
  return (
    <HText className="flex-wrap  ">
      <HText className="font-bold">
        {user.firstName} {user.lastName}
      </HText>
      Começou a seguir você.
    </HText>
  );
};
const reactedLove = ({ name, comment }) => {
  return (
    <HText className="flex-wrap">
      <HText className="font-bold">Reagiu</HText> a um comentário de{' '}
      <HText className="font-bold"> {name}</HText>
      <HText className="font-bold"> &quot;{comment}&quot;</HText>.
    </HText>
  );
};
const iaClassified = ({ name, bloodType }) => {
  return (
    <HText className="flex-wrap">
      <HText className="font-bold">Avaliou</HText> uma publicação de
      <HText className="font-bold"> {name}</HText> como sendo
      <HText className="font-bold"> {bloodType}</HText>.
    </HText>
  );
};
const systemNotification = ({ name, bloodType }) => {
  return (
    <HText className="flex-wrap">
      <HText className="font-bold">Avaliou</HText> uma publicação de
      <HText className="font-bold"> {name}</HText> como sendo
      <HText className="font-bold"> {bloodType}</HText>.
    </HText>
  );
};
const newConquest = ({ name, bloodType }) => {
  return (
    <HText className="flex-wrap">
      <HText className="font-bold">Avaliou</HText> uma publicação de
      <HText className="font-bold"> {name}</HText> como sendo
      <HText className="font-bold"> {bloodType}</HText>.
    </HText>
  );
};
const mentionYou = ({ name, bloodType }) => {
  return (
    <HText className="flex-wrap">
      <HText className="font-bold">Avaliou</HText> uma publicação de
      <HText className="font-bold"> {name}</HText> como sendo
      <HText className="font-bold"> {bloodType}</HText>.
    </HText>
  );
};
const analyticsPost = ({ name, bloodType }) => {
  return (
    <HText className="flex-wrap">
      <HText className="font-bold">Avaliou</HText> uma publicação de
      <HText className="font-bold"> {name}</HText> como sendo
      <HText className="font-bold"> {bloodType}</HText>.
    </HText>
  );
};
const NotificationItem = ({ type = NOTIFICATIONS_TYPE.SYSTEM, ...rest }) => {
  const timeAgo = new TimeAgo('en');

  const { date } = rest;
  const properties = {
    [NOTIFICATIONS_TYPE.COMMENT_POST]: {
      icon: <MaterialIcons name="chat-bubble" size={24} color="white" />,
      color: colors.success,
      renderComponent: makeComment(rest),
    },
    [NOTIFICATIONS_TYPE.START_FOLLOWING_YOU]: {
      icon: <MaterialIcons name="chat-bubble" size={24} color="white" />,
      color: colors.success,
      renderComponent: startFollowing(rest),
    },
    [NOTIFICATIONS_TYPE.LOVE_POST]: {
      icon: <AntDesign name="heart" size={24} color="white" />,
      color: colors.primary,
      renderComponent: reactedLove(rest),
    },

    [NOTIFICATIONS_TYPE.IA_CLASSIFY_POST]: {
      icon: <MaterialIcons name="person-add" size={24} color="white" />,
      color: colors.info,
      renderComponent: iaClassified(rest),
    },
    [NOTIFICATIONS_TYPE.SYSTEM]: {
      icon: <MaterialIcons name="chat-bubble" size={24} color="white" />,
      color: colors.success,
      renderComponent: systemNotification(rest),
    },
    [NOTIFICATIONS_TYPE.NEW_CONQUEST]: {
      icon: <AntDesign name="heart" size={24} color="white" />,
      color: colors.primary,
      renderComponent: newConquest(rest),
    },

    [NOTIFICATIONS_TYPE.METION_YOU]: {
      icon: <MaterialIcons name="person-add" size={24} color="white" />,
      color: colors.info,
      renderComponent: mentionYou(rest),
    },
    [NOTIFICATIONS_TYPE.ANALYTICS_POST]: {
      icon: <MaterialIcons name="chat-bubble" size={24} color="white" />,
      color: colors.success,
      renderComponent: analyticsPost(rest),
    },
  };
  console.log(properties[type].color);
  return (
    <View
      className="border-b border-r  border-l-4 justify-center flex-row mb-1 flex-grow flex-1 py-4 px-2"
      style={{
        backgroundColor: colors.secondBackground,
        borderLeftColor: properties[type].color,
        borderBottomColor: colors.newBorderColor,
        borderRightColor: colors.newBorderColor,
      }}
    >
      <View
        className="self-center  h-12 rounded-full  items-center justify-center"
        style={{
          backgroundColor: properties[type].color,
        }}
      >
        <Avatar
          size={64}
          containerStyle={{ borderWidth: 1, borderColor: colors.newBorderColor }}
          rounded
          source={{
            uri: rest.user?.avatar?.uri || 'https://ui-avatars.com/api/?name=Inteligência+Art',
          }}
        />
      </View>
      <View className="flex-1 justify-center  px-2">
        <View className="flex-row">
          <View className="flex-shrink flex-1">
            {properties[type].renderComponent}
            <View className="flex-row items-center justify-center self-start">
              <Ionicons name="ios-time-outline" size={14} color={colors.text} />
              <HText className="text-xs ">{timeAgo.format(new Date(date))}</HText>
            </View>
          </View>
          <View
            className="self-center ml-2 w-12 h-12 rounded-full  items-center justify-center"
            style={{
              backgroundColor: properties[type].color,
            }}
          >
            {properties[type].icon}
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationItem;
