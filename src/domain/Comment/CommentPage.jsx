import React from 'react';
import { RefreshControl, View } from 'react-native';

import { HText } from 'src/components/h-text/Text';
import { Layout } from 'src/components/layout/Layout';
import { CommentItem } from './CommentItem';

export const CommentPage = () => {
  return (
    <>
      <View className="">
        <Layout
          resetStyle
          refreshControl={<RefreshControl refreshing={() => {}} onRefresh={() => {}} />}
        >
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <HText className="text-center my-4">Ver mais comentários</HText>
        </Layout>
      </View>
    </>
  );
};
