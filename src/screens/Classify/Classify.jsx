import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { FormStepOne } from 'src/domain/Classify/FormStepOne';
import { Stepper } from 'src/components/stepper/Stepper';
import { colors } from 'src/theme/colors';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'src/components/button/Button';
import { HText } from 'src/components/h-text/Text';
import { Layout } from 'src/components/layout/Layout';
import { HSelect } from 'src/components/h-select/HSelect';
import { Picker } from '@react-native-picker/picker';
import { Title } from 'src/components/title/Title';
import { FormStepThree } from 'src/domain/Classify/FormStepThree';
import { FormStepTwo } from 'src/domain/Classify/FormStepTwo';

export function Classify() {
  const [active, setActive] = useState(0);
  const parentHandleChange = (e) => {
    console.log(e.target.value);
  };
  const content = [
    <FormStepOne
      key={0}
      title="Component 1"
      label="Imagem da célula"
      onPressNext={() => setActive(1)}
    />,
    <FormStepTwo
      key={1}
      title="Component 2"
      label="Informações adicionais"
      onPressNext={() => setActive(2)}
    />,
    <FormStepThree
      key={2}
      title="Component 3"
      label="Visibilidade"
      onPressNext={() => setActive(3)}
    />,
  ];

  console.log(active);
  return (
    <Layout className="rounded" contentContainerStyle={{ flex: 1 }}>
      <Title>Classificar</Title>

      <Stepper
        content={content}
        active={active}
        onClickStepItem={(key) => setActive(key)}
      ></Stepper>
    </Layout>
  );
}
