import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { colors } from 'src/theme/colors';

export function PostFooter({ viewedBy, totalVisits = 0, totalComments = 0 }) {
  return (
    <View className="flex-row mt-2 justify-between mb-2">
      <View className="flex flex-row">
        <View className="flex flex-row items-center gap-x-1">
          <Ionicons name="eye-outline" size={24} color="black" />
          <Text style={{ fontSize: 12 }}>{totalVisits}</Text>
        </View>
        <View className="pl-4 flex flex-row items-center gap-x-1">
          <Ionicons name="md-chatbox-outline" size={24} color="black" />
          <Text style={{ fontSize: 12 }}>{totalComments}</Text>
        </View>
      </View>
      <View className="flex-row ">
        {viewedBy &&
          viewedBy.slice(0, 4).map((item) => (
            <Avatar
              key={item.id}
              size="small"
              rounded
              containerStyle={{
                marginRight: -15,
                backgroundColor: colors.secondBackground,
              }}
              source={{
                uri: item.avatar_url,
              }}
            />
          ))}
        {viewedBy && viewedBy.length > 4 && (
          <Avatar
            size="small"
            rounded
            titleStyle={{ fontSize: 8, fontWeight: 'bold' }}
            containerStyle={{
              fontSize: 2,
              backgroundColor: colors.primary,
            }}
            title={`+${viewedBy.length - 4}`}
          />
        )}
      </View>
    </View>
  );
}
