import { View, Modal } from 'react-native';
import React from 'react';

export function HModal({ visible, children, ...rest }) {
  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={visible} {...rest}>
        <View
          className="flex flex-1 justify-center items-center "
          style={{
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        >
          {children}
        </View>
      </Modal>
    </View>
  );
}
