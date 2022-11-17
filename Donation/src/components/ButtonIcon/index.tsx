import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import {
  View,
} from 'react-native';
import { Container, Title } from './styles';

type ButtonProps = {
  title: any;
  children?: any;
  icon: any;
  onPress: any;
  style: any;
};

const ButtonIcon: React.FC<ButtonProps> = ({title, children, icon, onPress, ...rest }) => {
  return (
    <Container {...rest} onPress={onPress}>
      {title && <Title>{title}</Title>}
      <Icon name={icon} size={20} color={'#F7F7F7'} style={{ marginLeft: 10 }} />
    </Container>
  );
};

ButtonIcon.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  onPress: PropTypes.func,
};

ButtonIcon.defaultProps = {
  title: undefined,
  children: undefined,
  onPress: () => { },
};

export default ButtonIcon;
