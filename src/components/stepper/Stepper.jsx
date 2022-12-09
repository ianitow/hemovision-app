import React, { useState } from 'react';
import { ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from 'src/theme/colors';
import { HText } from '../h-text/Text';

const getTextColor = (key, active) => (Number(key) === Number(active) ? '#FFFFFF' : colors.text);
const getTextActiveColor = (key, active) =>
  Number(key) === Number(active) ? colors.primary : colors.text;

export function Stepper({
  content = [],
  backgroundColorActive = colors.primary,
  backgroundColorInactive = 'transparent',
  active,
  onClickStepItem,
  children,
  options,
}) {
  const getBackgroundColor = (key, active) => {
    return Number(key) === Number(active) ? backgroundColorActive : backgroundColorInactive;
  };
  const isDone = (key) => {
    return key + 1 <= active;
  };

  return (
    <>
      <View className="h-20 ">
        <View className="flex-row justify-between ">
          <View className=" flex flex-row flex-1 justify-between relative">
            {options.map(({ label, key }, index) => {
              return (
                <View className="h-12 w-24  flex-shrink " key={`${key} - ${label}`}>
                  <View className="self-center flex-row relative  ">
                    <TouchableWithoutFeedback onPress={() => onClickStepItem(key)}>
                      <View
                        key={`${key}-StepIttem`}
                        className="items-center justify-center w-10 h-10 rounded-full  border "
                        style={{
                          backgroundColor: isDone(key)
                            ? colors.primary
                            : getBackgroundColor(key, active),
                          borderColor: isDone(key)
                            ? colors.primary
                            : getTextActiveColor(key, active),
                        }}
                      >
                        {isDone(key) ? (
                          <MaterialIcons name="done" size={24} color="#FFFFFF" />
                        ) : (
                          <HText
                            className={`font-bold `}
                            style={{ color: getTextColor(key, active) }}
                          >
                            {index + 1}
                          </HText>
                        )}

                        {index + 1 < options.length && (
                          <View
                            className="absolute  h-0.5 -right-20 w-14  "
                            style={{
                              backgroundColor: isDone(key) ? colors.primary : colors.boxBackground,
                            }}
                          ></View>
                        )}
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                  <HText
                    className="text-center text-xs  h-full"
                    style={{ color: getTextActiveColor(key, active) }}
                  >
                    {label}
                  </HText>
                </View>
              );
            })}
          </View>
        </View>
      </View>
      <>{children}</>
    </>
  );
}
