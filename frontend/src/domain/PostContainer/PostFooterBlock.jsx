import { View } from 'react-native';
import React from 'react';
import { colors } from 'src/theme/colors';
import { HText } from 'src/components/h-text/Text';
import { Button } from 'src/components/button/Button';

export function PostFooterBlock({ onClickOpenModal, style }) {
  return (
    <>
      <View className={`border-t py-2`} style={{ borderColor: colors.borderCard, ...style }}>
        <HText className="text-xs font-light text-center">
          Classifique para ter acesso completo a publicação.
        </HText>
        <View className="w-36 justify-center items-center self-center mt-1 ">
          <Button className="my-1 h-10" onPress={() => onClickOpenModal()}>
            Classsificar
          </Button>
        </View>
      </View>
    </>
  );
}
