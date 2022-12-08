import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import { colors } from 'src/theme/colors';
import { HText } from '../h-text/Text';

const drawLine = (index, total) =>
  index + 1 != total ? <View style={{ height: 1, backgroundColor: 'red' }} /> : null;

export function Stepper({
  content = [],
  backgroundColorActive = colors.primary,
  backgroundColorInactive = 'transparent',
  active,
  onClickStepItem,
}) {
  const getBackgroundColor = (key) => {
    return Number(key) === Number(active) ? backgroundColorActive : backgroundColorInactive;
  };

  const getTextColor = (key) => (Number(key) === Number(active) ? '#FFFFFF' : colors.text);
  const getTextActiveColor = (key) =>
    Number(key) === Number(active) ? colors.primary : colors.text;

  return (
    <>
      <View className="h-20 ">
        <View className="flex-row justify-between ">
          <View className=" flex flex-row flex-1 justify-between relative">
            {content.map(({ props, key }, index) => {
              const { title, label } = props;
              return (
                <View className="h-12 w-24  flex-shrink " key={`${key} - ${title} - ${label}`}>
                  <View className="self-center flex-row relative  ">
                    <TouchableWithoutFeedback onPress={() => onClickStepItem(key)}>
                      <View
                        key={`${title}-${key}-StepIttem`}
                        className="items-center justify-center w-10 h-10 rounded-full  border "
                        style={{
                          backgroundColor: getBackgroundColor(key),
                          borderColor: getTextActiveColor(key),
                        }}
                      >
                        <HText className={`font-bold `} style={{ color: getTextColor(key) }}>
                          {index + 1}
                        </HText>
                        {index + 1 < content.length && (
                          <View
                            className="absolute  h-0.5 -right-20 w-14 top-1/2 "
                            style={{ backgroundColor: colors.boxBackground }}
                          ></View>
                        )}
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                  <HText
                    className="text-center text-xs  h-full"
                    style={{ color: getTextActiveColor(key) }}
                  >
                    {label}
                  </HText>
                </View>
              );
            })}
          </View>
        </View>
      </View>
      <View className="mt-2 flex-1">{content[active]}</View>
    </>
  );
}
