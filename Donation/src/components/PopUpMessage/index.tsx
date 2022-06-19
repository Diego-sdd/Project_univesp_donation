import React, {useEffect, useState} from 'react';
import {Modal, Text, View, TouchableHighlight} from 'react-native';
import styles from './styles';
interface TypeInputText {
  title: string;
  type: string;
  visible: boolean;
  setModalVisible: any;
}
const PopUpMessage: React.FC<TypeInputText> = ({
  title,
  type,
  visible,
  setModalVisible,
}) => {
  let countdownTimeout: NodeJS.Timeout;

  const [colorsCard, setColorsCard] = useState('#f7f7f7');
  const [colorsText, setColorsText] = useState('#161616');

  const [time, setTime] = useState(0.1 * 60);

  useEffect(() => {
    switch (type) {
      case 'success':
        setColorsCard('#27a745');
        setColorsText('#f2f2f2');
        break;
      case 'erro':
        setColorsCard('#ff6666');
        setColorsText('#f2f2f2');
        break;
      default:
        setColorsText('#161616');
        setColorsCard('#f7f7f7');
        break;
    }
  }, [type]);

  const handlerTempPopUp = () => {
    if (time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      resetCountdown();
    }
  };

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setTime(0.1 * 60);
    setModalVisible(false);
  };

  useEffect(() => {
    if (visible) {
      handlerTempPopUp();
    }
  }, [visible, time]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        resetCountdown();
      }}>
      <TouchableHighlight
        underlayColor={colorsCard}
        style={{
          ...styles.modalView,
          backgroundColor: colorsCard,
        }}
        onPress={() => {
          resetCountdown();
        }}>
        <Text style={{color: colorsText}}>{title}</Text>
      </TouchableHighlight>
    </Modal>
  );
};

export default PopUpMessage;
