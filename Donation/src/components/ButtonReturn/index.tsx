import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
 
type ButtonProps = {
  _onPressButton: any;
};

const ButtonReturn: React.FC<ButtonProps> = ({_onPressButton}) => {

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={_onPressButton}>
          <View style={styles.button}>
          <Icon
              name="keyboard-backspace"
              color="white"
              size={35}
            />
          </View>
        </TouchableOpacity>
    </View>
  );
};
export default ButtonReturn;
