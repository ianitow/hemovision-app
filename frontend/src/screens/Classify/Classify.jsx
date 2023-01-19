import React, { useRef, useState } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { Layout } from 'src/components/layout/Layout';
import { Stepper } from 'src/components/stepper/Stepper';
import { Title } from 'src/components/title/Title';
import { FormStepOne } from 'src/domain/Classify/FormStepOne';
import { FormStepThree } from 'src/domain/Classify/FormStepThree';
import { FormStepTwo } from 'src/domain/Classify/FormStepTwo';
const { width } = Dimensions.get('window');
export function Classify() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  const onPressNext = () => {
    setActive((state) => {
      scrollRef.current.scrollTo({ x: (state + 1) * (width - 32) });
      return state + 1;
    });
  };
  const onClickStepItem = (key) => {
    setActive(key);
    scrollRef.current.scrollTo({ x: key * (width - 32) });
  };
  const content = [
    <FormStepOne key={0} title="Component 1" label="Imagem da célula" onPressNext={onPressNext} />,
    <FormStepTwo
      key={1}
      title="Component 2"
      label="Informações adicionais"
      onPressNext={() => onPressNext()}
    />,
    <FormStepThree
      key={2}
      title="Component 3"
      label="Visibilidade"
      onPressNext={() => onPressNext()}
    />,
  ];

  return (
    <Layout className="rounded">
      <Title>Classificar</Title>

      <Stepper
        options={[
          { label: 'Imagem da célula', key: 0 },
          { label: 'Informações da célula', key: 1 },
          { label: 'Visibilidade', key: 2 },
        ]}
        active={active}
        onClickStepItem={(key) => onClickStepItem(key)}
      >
        <View className="mt-2 flex-1 w-full ">
          <ScrollView
            horizontal
            pagingEnabled
            ref={scrollRef}
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
          >
            {content.map((item) => {
              return item;
            })}
          </ScrollView>
        </View>
      </Stepper>
    </Layout>
  );
}
