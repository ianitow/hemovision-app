import React, { Component } from 'react';
import { View, Image, StatusBar, Dimensions, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { PostImage } from './PostImage';
import { PostSurvey } from './PostSurvey';
const { width, height } = Dimensions.get('window');

const styles = {
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute',
  },

  image: {
    width,
    height,
  },
};

export function PostContent({ post, showOverlay }) {
  return (
    <View className="h-80  rounded  " style={styles.container}>
      <Swiper
        style={styles.wrapper}
        dot={
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,.3)',
              width: 13,
              height: 13,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: '#fff',
              width: 13,
              height: 13,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7,
            }}
          />
        }
        loop={false}
      >
        <PostImage overlay={showOverlay} />
        <PostSurvey></PostSurvey>
      </Swiper>
    </View>
  );
}
