import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { HText } from 'src/components/h-text/Text';
import { colors } from 'src/theme/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export const CommentItem = (id) => {
  return (
    <View
      className="border mb-2 m-2 rounded p-2 py-3"
      style={{ backgroundColor: colors.secondBackground, borderColor: colors.borderCard }}
    >
      <View className=" flex flex-row">
        <View className="items-center">
          <Avatar
            size={32}
            containerStyle={{ borderWidth: 1, borderColor: colors.newBorderColor }}
            rounded
            source={{
              uri: `https://picsum.photos/300?${Math.random()}`,
            }}
          />
        </View>
        <View className="ml-2 w-full flex-shrink">
          <View className="flex flex-row justify-between items-center">
            <View>
              <HText className="text-xs font-medium">Iaan Mesquita </HText>
              <HText
                className="font-light "
                style={{
                  marginTop: -2,
                  fontSize: 10,
                  lineHeight: 12,
                  color: colors.text,
                }}
              >
                Biomédico na UFG
              </HText>
            </View>
            <View className="flex-row gap-x-1 items-center mt-0.5">
              <Ionicons name="ios-time-outline" size={10} />
              <HText
                className="font-light"
                style={{
                  color: colors.text,
                  marginTop: -2,
                  fontSize: 10,
                  lineHeight: 14,
                }}
              >
                3 horas atrás
              </HText>
            </View>
          </View>

          <HText className="flex flex-wrap mt-1 mb-1 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse accusantium officiis
            consequuntur iusto tenetur veritatis deleniti, officia eaque itaque quibusdam!
          </HText>

          <View className="flex flex-row">
            <View className="flex flex-row items-center gap-x-1">
              <Ionicons name="heart-outline" size={16} color={colors.text} />
              <HText className="text-xs">10</HText>
            </View>
            <View className="pl-4 flex flex-row items-center gap-x-1">
              <Ionicons name="chatbox-outline" size={16} color={colors.text} />
              <HText className="text-xs">Ver comentários (20)</HText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
