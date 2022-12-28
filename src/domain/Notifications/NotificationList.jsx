import { View } from 'react-native';
import React from 'react';
import NotificationItem from './NotificationItem';
import { HText } from 'src/components/h-text/Text';
import { Ionicons } from '@expo/vector-icons';
import { colors } from 'react-native-elements';
const NotificationList = ({ data }) => {
  return (
    <View className="mb-4">
      {data ? (
        data.map((notification) => <NotificationItem key={notification.id} {...notification} />)
      ) : (
        <View className=" flex-row items-center justify-center ">
          <Ionicons name="notifications" size={16} color={colors.text} />
          <HText className="  text-center  items-center justify-center">Nenhuma notificação.</HText>
        </View>
      )}
    </View>
  );
};

export default NotificationList;
