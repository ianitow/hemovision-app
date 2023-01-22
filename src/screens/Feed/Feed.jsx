import React from 'react';
import { RefreshControl, View } from 'react-native';
import { HText } from 'src/components/h-text/Text';
import { Layout } from 'src/components/layout/Layout';
import { PostContainer } from 'src/domain/PostContainer/PostContainer';
import { Ionicons } from '@expo/vector-icons';
import mock from './small_mock';
import { colors } from 'src/theme/colors';
import { HModal } from 'src/components/h-modal/HModal';
import { ClassifyModal } from 'src/domain/ClassifyModal/ClassifyModal';
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export function Feed() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <>
      <HModal visible={isVisible} onRequestClose={() => setIsVisible(false)}>
        <ClassifyModal onClickClassify={() => setIsVisible(false)} />
      </HModal>

      <Layout refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {mock.map((item) => (
          <PostContainer key={item.id} post={item} onClickOpenModal={() => setIsVisible(true)} />
        ))}
        <View className=" items-center justify-center">
          <Ionicons name="ios-checkmark-done" size={48} color={colors.text} />
          <HText className=" text-center p-4 items-center justify-center" style={{ lineHeight: 1 }}>
            Isso é tudo pessoal!
          </HText>
        </View>
      </Layout>
    </>
  );
}
