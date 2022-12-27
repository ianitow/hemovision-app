import { View } from 'react-native';
import React, { useState } from 'react';
import { colors } from 'src/theme/colors';
import { PostFooter } from './PostFooter';
import { PostFooterBlock } from './PostFooterBlock';
import { PostContent } from './PostContent';
import { PostHeader } from './PostHeader';
import { HText } from 'src/components/h-text/Text';

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
        <PostHeader user={user} post={post} />
        <View className="mt-2 ">
          <View className="px-4">
            <HText className="text-xs font-light mb-2" style={{ color: colors.textCharcoal }}>
              {post.description}
            </HText>

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
