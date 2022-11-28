import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from 'src/theme/colors';
import { Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { PostImage } from './PostImage';
import { PostFooter } from './PostFooter';
import { PostFooterBlock } from './PostFooterBlock';
export function PostContainer() {
  var oi = 'oi';
  return (
    <View
      className="mx-4 my-4 mb-2  rounded   "
      style={{
        backgroundColor: colors.primaryBackground,
        borderColor: colors.borderCard,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 1,
      }}
    >
      <View className="flex flex-row px-4 mt-4">
        <Avatar
          size="medium"
          rounded
          source={{
            uri: 'https://randomuser.me/api/portraits/men/76.jpg',
          }}
        />
        <View className="ml-2 flex-1">
          <View className="flex-row justify-between ">
            <View>
              <Text className="font-bold " style={{ lineHeight: 16 }}>
                Érica Silva
              </Text>
              <Text
                className="font-light"
                style={{
                  marginTop: -2,
                  fontSize: 10,
                  lineHeight: 14,
                }}
              >
                Biomédico na UFG
              </Text>
              <View className="flex-row gap-x-1">
                <Ionicons name="ios-time-outline" size={12} />
                <Text
                  className="font-light"
                  style={{
                    marginTop: -2,
                    fontSize: 10,
                    lineHeight: 14,
                  }}
                >
                  há 2 minutos
                </Text>
              </View>
            </View>
            <View className="self-center w-28 ">
              <TouchableOpacity
                className="justify-center items-center rounded-md  bg-transparent  px-4  text-sm  shadow-sm   w-full h-8 font-bold"
                style={{
                  borderWidth: 1,
                  borderColor: colors.primary,
                }}
              >
                <Text className=" text-xs uppercase" style={{ color: colors.primary }}>
                  Seguir
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-2">
        <View className=" px-4">
          <Text className="text-xs font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Text>
          <PostImage />
          <PostFooter />
        </View>
        <View className="mt-2">
          <PostFooterBlock />
        </View>
      </View>
    </View>
  );
}
