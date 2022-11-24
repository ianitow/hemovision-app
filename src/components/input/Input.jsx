import { View, Text, TextInput } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { colors } from 'src/theme/colors'

export const  Input = ({placeholder,borderColor = colors.borderCard,iconColor=colors.primary,iconName,secureTextEntry})=> {
  return (
    <View className="flex-row pl-2 w-full border h-14 items-center rounded my-2"  style={{borderColor:borderColor}}>
      <MaterialIcons name={iconName} color={iconColor} size={20}></MaterialIcons>
      <TextInput placeholder={placeholder} className="ml-2  h-full flex-1" secureTextEntry={secureTextEntry}></TextInput>
    </View>
  )
}