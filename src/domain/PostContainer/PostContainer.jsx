import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { colors } from 'src/theme/colors';
import { PostFooter } from './PostFooter';
import { PostFooterBlock } from './PostFooterBlock';
import { PostContent } from './PostContent';
import { PostHeader } from './PostHeader';

export function PostContainer({ post }) {
  const { user } = post;
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <>
      <View
        className=" rounded   mb-4"
        style={{
          backgroundColor: colors.primaryBackground,
          borderColor: colors.borderCard,
          borderWidth: 1,
        }}
      >
        <PostHeader user={user} post={post} />
        <View className="mt-2 ">
          <View className="px-4">
            <Text className="text-xs font-light mb-2">{post.description}</Text>

            <PostContent post={post} showOverlay={true} />
            <PostFooter
              viewedBy={post.viewed_by}
              totalVisits={post.total_visits}
              totalComments={post.total_comments}
            />
          </View>

          <PostFooterBlock className="pt-2" />
        </View>
      </View>
    </>
  );
}
