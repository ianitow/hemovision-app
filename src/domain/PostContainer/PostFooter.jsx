import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { colors } from 'src/theme/colors';

export function PostFooter() {
  return (
    <View className="flex-row mt-2 justify-between">
      <View className="flex flex-row">
        <View className="flex flex-row items-center gap-x-1">
          <Ionicons name="eye-outline" size={24} color="black" />
          <Text style={{ fontSize: 12 }}>245</Text>
        </View>
        <View className="pl-4 flex flex-row items-center gap-x-1">
          <Ionicons name="md-chatbox-outline" size={24} color="black" />
          <Text style={{ fontSize: 12 }}>245</Text>
        </View>
      </View>
      <View className="flex-row ">
        <Avatar
          containerStyle={{ marginRight: -15 }}
          size="small"
          rounded
          source={{
            uri: 'https://randomuser.me/api/portraits/men/76.jpg',
          }}
        />
        <Avatar
          size="small"
          rounded
          containerStyle={{ marginRight: -15 }}
          source={{
            uri: 'https://randomuser.me/api/portraits/men/76.jpg',
          }}
        />
        <Avatar
          size="small"
          rounded
          containerStyle={{ marginRight: -15 }}
          source={{
            uri: 'https://randomuser.me/api/portraits/men/76.jpg',
          }}
        />
        <Avatar
          size="small"
          rounded
          containerStyle={{ marginRight: -15 }}
          source={{
            uri: 'https://randomuser.me/api/portraits/men/76.jpg',
          }}
        />
        <Avatar
          size="small"
          rounded
          titleStyle={{ fontSize: 8, fontWeight: 'bold' }}
          containerStyle={{
            fontSize: 2,
            backgroundColor: colors.primary,
          }}
          title="+15"
        />
      </View>
    </View>
  );
}
