import { View, ScrollView } from 'react-native';
import React from 'react';
import { colors } from 'src/theme/colors';

export function Layout({
  contentContainerStyle,
  style = [],
  children,
  resetStyle = false,
  refreshControl,
}) {
  const classes = resetStyle ? '' : 'flex flex-1 mx-4 my-4 mb-2';
  return (
    <View style={[{ backgroundColor: '#f3f3f3', color: colors.text }, ...style]}>
      <ScrollView
        contentContainerStyle={contentContainerStyle}
        showsVerticalScrollIndicator={false}
        refreshControl={refreshControl}
      >
        <View className={classes}>{children}</View>
      </ScrollView>
    </View>
  );
}
