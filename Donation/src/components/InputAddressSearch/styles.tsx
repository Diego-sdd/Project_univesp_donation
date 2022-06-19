import styled from 'styled-components/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export const Label = styled.Text`
  color: #3d3d3d;
  font-size: 14px;
  margin-top: 10px;
`;

export const AddressSearch = styled(GooglePlacesAutocomplete).attrs({
  styles: {
    textInputContainer: {
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0)',
      borderTopWidth: 0,
      borderBottomWidth: 0,
    },
    textInput: {
      marginTop: 5,
      backgroundColor: '#fefefe',
      borderWidth: 0.5,
      borderColor: '#ddd',
      borderRadius: 10,
      fontSize: 17,
      paddingHorizontal: 10,
      height: 48,
    },
    description: {
      fontWeight: 'bold',
    },
    predefinedPlacesDescription: {
      color: '#1faadb',
    },
  },
})``;
