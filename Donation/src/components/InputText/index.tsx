import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

interface TypeInputText {
  placeholder?: string;
  placeholderTextColor?: string;
  value: string;
  onChangeText?: (text: string) => void;
  autoCorrect?: boolean;
}
const InputText: React.FC<TypeInputText> = ({
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  autoCorrect,
}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor || '#898989'}
        value={value}
        autoCorrect={autoCorrect}
        onChangeText={onChangeText}
      />
    </View>
  );
};
export default InputText;
