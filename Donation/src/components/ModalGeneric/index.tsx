/* eslint-disable import/prefer-default-export */
import React from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import * as colorsJson from '../../utils/color.json'; 
type Props = {
  visible: any;
  onClose: any;
  children?: any;
  height?: any;
  padding?: any;
  isCloseVisibility?: boolean;
};

const ModalGeneric: React.FC<Props> = ({
  visible,
  onClose,
  children,
  height,
  padding,
  isCloseVisibility = true,
}) => {
  return (
    <Modal transparent visible={visible}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,.5)',
        }}>
        <View>
          {isCloseVisibility && (
            <TouchableOpacity
              style={{
                backgroundColor: colorsJson.primary,
                height: 56,
                width: 56,
                borderRadius: 28,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 265,
                marginBottom: -30,
                zIndex: 4,
              }}
              onPress={onClose}>
              <Ionicon name="md-close" size={18} color="#fff" />
            </TouchableOpacity>
          )}

          <View
            style={{
              backgroundColor: '#F7F7F7',
              borderRadius: 20,
              width: 300,
              height: height || 256,
              padding: 20,
            }}>
            {children}
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default ModalGeneric;
