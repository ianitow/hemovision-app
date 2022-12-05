import React, { Component } from 'react';
import { View, Image, StatusBar, Dimensions, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { Layout } from 'src/components/layout/Layout';
import { Title } from 'src/components/title/Title';
import { CardCollectionList } from 'src/domain/CardCollection/CardCollectionList';
const { width, height } = Dimensions.get('window');

export function Collections() {
  return (
    <Layout contentClass="mx-4 my-4 mb-2  rounded">
      <Title>Coleções de imagens</Title>
      <CardCollectionList />
    </Layout>
  );
}
