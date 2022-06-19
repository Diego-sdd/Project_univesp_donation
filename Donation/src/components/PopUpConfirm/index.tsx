import React, {useEffect, useState} from 'react';
import {Modal, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

interface TypePopUpConfirm {
  modalVisible: boolean | undefined;
  setModalVisible: (text: boolean) => void;
  children: any;
}

const PopUpConfirm: React.FC<TypePopUpConfirm> = ({
  modalVisible,
  setModalVisible,
  children,
}) => {
  let countdownTimeout: NodeJS.Timeout;

  const [time, setTime] = useState(1);

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setTime(1);
  }

  useEffect(() => {
    if (modalVisible && time < 43) {
      countdownTimeout = setTimeout(() => {
        setTime(time + 0.5);
      }, 20);
    } else if (modalVisible && time === 43) {
      resetCountdown();
      setModalVisible(false);
    }
  }, [modalVisible, time]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          resetCountdown();
        }}>
        <View
          style={{
            ...styles.centeredView,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}>
          <View style={styles.modalView}>
            <View style={styles.buttonClose}>
              <MaterialCommunityIcons
                name="close"
                color="#707070"
                size={27}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  resetCountdown();
                }}
              />
            </View>

            {children}

            <View style={styles.statusBarView}>
              <View
                style={{
                  ...styles.statusBar,
                  paddingHorizontal: `${time}%`,
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default PopUpConfirm;
