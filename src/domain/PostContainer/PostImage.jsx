import { View, Text } from 'react-native'
import React from 'react'
import { colors } from 'src/theme/colors'
import { Image } from 'react-native'

export function PostImage  ()  {
  return (
    <View className="flex  bg-red-200 h-80 border rounded" style={{borderColor:colors.boxBackground}}>
      <Image className="h-full w-full" source={{uri:"https://o.quizlet.com/pJTq0KYYdDMC20Bsu9Qrgg_b.jpg"}}></Image>
    </View>
  )
}
