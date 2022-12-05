import React, { Component } from 'react';
import { View, Image, StatusBar, Dimensions, Text } from 'react-native';
import Swiper from 'react-native-swiper';
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

export function Collections() {
  return (
    <View className="border bg-red-200" style={styles.container}>
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
        <View style={styles.slide}>
          <Text>Slide 01</Text>
        </View>
        <View style={styles.slide}>
          <Text>Slide 02</Text>
        </View>
        <View style={styles.slide}>
          <Text>Slide 03</Text>
        </View>
      </Swiper>
    </View>
  );
}
