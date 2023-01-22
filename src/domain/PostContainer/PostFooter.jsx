import { TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { colors } from 'src/theme/colors';
import { HText } from 'src/components/h-text/Text';
import { useNavigation } from '@react-navigation/native';

export function PostFooter({ viewedBy, totalVisits = 0, totalComments = 0 }) {
  const navigation = useNavigation();
  return (
    <View className="flex-row mt-2 justify-between mb-2">
      <View className="flex flex-row">
        <View className="flex flex-row items-center gap-x-1">
          <Ionicons name="eye-outline" size={24} color={colors.textCharcoal} />
          <HText className="" style={{ color: colors.textCharcoal }}>
            {totalVisits}
          </HText>
        </View>
        <TouchableWithoutFeedback
          className="pl-4 "
          onPress={() => navigation.navigate({ name: 'CommentModal' })}
        >
          <View className="flex flex-row items-center">
            <Ionicons name="md-chatbox-outline" size={20} color={colors.textCharcoal} />
            <HText className="" style={{ color: colors.textCharcoal }}>
              {totalComments}
            </HText>
          </View>
        </TouchableWithoutFeedback>
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
