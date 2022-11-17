import styled from 'styled-components/native';
import * as colorsJson from '../../utils/color.json'; 

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.75,
})`
  background-color: ${colorsJson.primary}

  padding: 15px 30px;
  align-self: center;
  border-radius: 30px;
  width: auto;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #fff;
`;
