import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-elements';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from 'src/theme/colors';
import { HText } from 'src/components/h-text/Text';
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
            <HText
              className="font-medium text-left flex-wrap "
              style={{ color: colors.textCharcoal }}
            >
              {user.firstname} {user.lastname}
            </HText>

            <HText
              className="font-light "
              style={{
                marginTop: -2,
                fontSize: 10,
                lineHeight: 12,
                color: colors.text,
              }}
            >
              {user.job}
            </HText>
            <View className="flex-row gap-x-1 items-center mt-0.5">
              <Ionicons name="ios-time-outline" size={12} />
              <HText
                className="font-light"
                style={{
                  color: colors.text,
                  marginTop: -2,
                  fontSize: 10,
                  lineHeight: 14,
                }}
              >
                {post.created_at}
              </HText>
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
