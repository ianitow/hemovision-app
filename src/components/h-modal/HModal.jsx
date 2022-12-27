import { View, Modal } from 'react-native';
import React, { useState } from 'react';

export function HModal({ children }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
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
