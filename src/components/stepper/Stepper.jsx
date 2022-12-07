import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import { colors } from 'src/theme/colors';
import { HText } from '../h-text/Text';

const drawLine = (index, total) =>
  index + 1 != total ? (
    <View className="mx-4  self-center flex-1" style={{ height: 1, backgroundColor: '#C4C4C4' }} />
  ) : null;

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

  return (
    <>
      <View className="mb-5">
        <View className="flex-row justify-between ">
          <View className=" flex flex-row flex-1 justify-between relative">
            {content.map(({ title, key }, index) => {
              return (
                <>
                  <View className="h-12">
                    <View className="flex-row ">
                      <TouchableWithoutFeedback onPress={() => onClickStepItem(key)}>
                        <View
                          key={`${title}-${key}-StepIttem`}
                          className="items-center justify-center w-12 h-12 rounded-full border"
                          style={{
                            backgroundColor: getBackgroundColor(key),
                            borderColor: colors.text,
                          }}
                        >
                          <HText className={`font-bold}`} style={{ color: getTextColor(key) }}>
                            {index + 1}
                          </HText>
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                    <View>
                      <HText className="text-center ">Imagem da célula</HText>
                    </View>
                  </View>
                  {drawLine(index, content.length)}
                </>
              );
            })}
          </View>
        </View>
      </View>
      <View className="mt-2">{content[active]}</View>
    </>
  );
}
