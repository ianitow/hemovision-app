import { View } from 'react-native';
import React, { useState } from 'react';
import { colors } from 'src/theme/colors';
import { HText } from '../h-text/Text';

export function ProgressBar({
  borderColor = colors.borderCard,
  backgroundColor = colors.boxBackground,
  progressBarColor = colors.second,
  text,
  containerClass,
  width,
  textClass,
  showPercentage = false,
}) {
  const [widthContainer, setWidthContainer] = useState(0);
  const [heightContainer, setHeightContainer] = useState(0);
  const processBoundsContainer = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setWidthContainer(width);
    setHeightContainer(height);
  };

  return (
    <View
      className={`flex-row relative px-3 items-center w-full border h-9 rounded ${containerClass}`}
      style={{ borderColor, backgroundColor }}
      onLayout={processBoundsContainer}
    >
      <View
        className=" justify-center h-full  rounded absolute"
        style={{ backgroundColor: progressBarColor, width: (widthContainer / 100) * width }}
      ></View>
      {showPercentage && <HText className={`${textClass} font-bold`}>{width}% </HText>}
      <HText className={` ${textClass}`}>{text}</HText>
    </View>
  );
}
