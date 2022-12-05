import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-elements';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from 'src/theme/colors';
export function PostHeader({ user, post }) {
  return (
    <View className="flex flex-row px-4 mt-4">
      <Avatar
        size="medium"
        containerStyle={{ borderWidth: 1, borderColor: colors.borderCard }}
        rounded
        source={{
          uri: user.avatar_url,
        }}
      />
      <View className="ml-2 flex-1">
        <View className="flex-row justify-between ">
          <View className="w-40">
            <Text className="font-bold " style={{ lineHeight: 16 }}>
              {user.firstname} {user.lastname}
            </Text>
            <Text
              className="font-light "
              style={{
                marginTop: -2,
                fontSize: 10,
                lineHeight: 12,
                color: colors.text,
              }}
            >
              {user.job}
            </Text>
            <View className="flex-row gap-x-1 items-center mt-0.5">
              <Ionicons name="ios-time-outline" size={12} />
              <Text
                className="font-light"
                style={{
                  color: colors.text,
                  marginTop: -2,
                  fontSize: 10,
                  lineHeight: 14,
                }}
              >
                {post.created_at}
              </Text>
            </View>
          </View>
          <View className="self-center  ">
            <TouchableOpacity
              className="justify-center items-center rounded-md  bg-transparent  px-4  text-sm  shadow-sm   w-full h-8 font-bold"
              style={{
                borderWidth: 1,
                borderColor: colors.primary,
                backgroundColor: user.following ? 'transparent' : colors.primary,
              }}
            >
              <Text
                className=" text-xs uppercase"
                style={{ color: user.following ? colors.primary : 'white' }}
              >
                {user.following ? 'Desseguir' : 'Seguir'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
