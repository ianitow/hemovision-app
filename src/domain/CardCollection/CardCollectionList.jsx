import { View, Text } from 'react-native';
import React from 'react';
import { CardCollectionItem } from './CardCollectionItem';
import Neutrophil from 'src/assets/bloods/neutrophil.svg';

import Eosinophil from 'src/assets/bloods/eosinophil.svg';

import Lymphocyte from 'src/assets/bloods/lymphocyte.svg';

import Monocyte from 'src/assets/bloods/monocyte.svg';

import Basophilic from 'src/assets/bloods/basophilic.svg';

const bloodCell = [
  {
    name: 'Neutrófilos',
    description:
      'Os neutrófilos possuem formato arredondado com diâmetro variável entre 10 e 14μm.',
    avatarComponent: <Neutrophil className="w-20 h-20" />,
  },

  {
    name: 'Basófilos',
    description:
      'Os basófilos apresentam núcleo grande e de formato irregular que lembra a letra “S”.',
    avatarComponent: <Basophilic className="w-20 h-20" />,
  },

  {
    name: 'Eosinófilos',
    description:
      'Têm formato polimórfico, núcleo bilobulado, com grande mobilidade e inúmeras vesículas cito-plasmáticas',

    avatarComponent: <Eosinophil className="w-20 h-20" />,
  },

  {
    name: 'Monócitos',
    description:
      'Os monócitos têm a característica bem presente de núcleo ovoide em formato de rim.',

    avatarComponent: <Monocyte className="w-20 h-20" />,
  },

  {
    name: 'Linfócitos',
    description: 'Os linfócitos apresentam um núcleo grande e esférico',
    avatarComponent: <Lymphocyte className="w-20 h-20" />,
  },
];

export function CardCollectionList() {
  return (
    <View className="rounded">
      {bloodCell.map(({ name, description, avatarComponent }, index) => (
        <CardCollectionItem
          key={`item-${index}`}
          avatarComponent={avatarComponent}
          className="mb-2"
          name={name}
          description={description}
        />
      ))}
    </View>
  );
}
