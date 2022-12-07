import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { FormStepOne } from 'src/domain/Classify/FormStepOne';
import { Stepper } from 'src/components/stepper/Stepper';
import { colors } from 'src/theme/colors';
const MyComponent = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

const content = [
  <MyComponent key={0} title="Component 1" />,
  <MyComponent key={1} title="Component 2" />,
  <MyComponent key={2} title="Component 3" />,
];

export function Classify() {
  const [active, setActive] = useState(0);
  return (
    <View className="mx-4 my-4 mb-2  rounded   ">
      <Stepper
        active={active}
        content={content}
        onClickStepItem={(p) => setActive(p)}
        onBack={() => setActive((p) => p - 1)}
        onFinish={() => alert('Finish')}
        onNext={() => setActive((p) => p + 1)}
      ></Stepper>
    </View>
  );
}
