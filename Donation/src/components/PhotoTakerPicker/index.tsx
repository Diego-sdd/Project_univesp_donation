import React from 'react';
import {
  Text,
  View,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ModalGeneric from '../ModalGeneric';
import ButtonIcon from '../ButtonIcon';

const optionsDefault = {
  includeBase64: true,
  maxWidth: 200,
  maxHeight: 200,
};

const styleButton = {
  width: 250,
  margin: 10,
}

export default function PhotoTakerPicker(props: any) {
  const {
    visible,
    setVisible,
    setPhoto,
    options = optionsDefault,
  } = props

  const takeImage = () => {
    const imgRequest = () => {
      launchCamera(options, (response: any) => {
        console.log('Response Invoice = ', response);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.errorMessage) {
          console.log('ErrorMessage: ', response.customButton);
        } else if (response.errorCode === 'camera_unavailable') {
          console.log('camera_unavailable');
        } else if (response.errorCode){
          console.log(response.errorCode);
        } else {
          const source = {
            uri: `data:image/jpeg;base64,${response.assets[0].base64}`,
          };
          setPhoto(source);
          setVisible(false);
        }
      });
    };
    const requestCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Permissão para uso da camera',
            message: 'Precisamos da sua permissão para usar a camera',
            buttonNeutral: 'Perguntar mais tarde',
            buttonNegative: 'Cancelar',
            buttonPositive: 'Aceitar',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          imgRequest();
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };
    try {
      if (Platform.OS === 'ios') {
        imgRequest();
      } else {
        setVisible(false);
        requestCameraPermission();
      }
    } catch (e) {
      console.log(e);
    }
  }

  const selectImageGalery = () => {

    launchImageLibrary(options, (response: any) => {
      console.log('Response Invoice = ', response);
      if (response.didCancel) {
        // Alert.alert('', 'Você cancelou ☹️');
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {
          uri: `data:image/jpeg;base64,${response.assets[0].base64}`,
        };
        setVisible(false);
        setPhoto(source);
      }
    });
  }

  return (
    <ModalGeneric
      visible={visible}
      height={270}
      onClose={() => setVisible(false)}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginBottom: 15
          }}
        >
          Selecione uma das opções
        </Text>
        <ButtonIcon
          title="Tirar uma foto"
          style={styleButton}
          onPress={takeImage}
          icon="camera"
        />
        <ButtonIcon
          title="Escolher da galeria de fotos"
          style={styleButton}
          onPress={selectImageGalery}
          icon="image"
        />
      </View>
    </ModalGeneric>
  )
}
