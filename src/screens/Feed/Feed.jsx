import { View, Text } from 'react-native';
import React from 'react';
import { Layout } from 'src/components/layout/Layout';
import { PostContainer } from 'src/domain/PostContainer/PostContainer';
import mock from './mock';
export function Feed() {
  return (
    <Layout>
      {mock.map((item) => (
        <PostContainer key={item.id} post={item} />
      ))}
    </Layout>
  );
}
