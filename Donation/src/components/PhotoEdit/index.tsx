import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import * as colorsJson from '../../utils/color.json'; 
import PhotoTakerPicker from '../PhotoTakerPicker'
import DefaultImageUser from '../../assets/RegisterUser/defaultprofileimage.png'
export default function PhotoEdit(props: any) {
  const {
    photo,
    setPhoto,
  } = props

  const [visible, setVisible] = useState(false);

  const onPhotoEdit = () => {
    setVisible(true);
  }

  return (
    <View style={{
      alignSelf: 'center',
      alignItems: 'center',
      marginBottom: 30,
    }}>

      <Image
        style={{
          backgroundColor: '#fff',
          maxWidth: 120,
          maxHeight: 120,
          minWidth: 120,
          minHeight: 120,
          borderRadius: 60,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={photo === '' ? DefaultImageUser : photo}
      />

      <TouchableOpacity
        style={{
          backgroundColor: colorsJson.primary,
          height: 32,
          width: 210,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 10,
        }}
        onPress={onPhotoEdit}
      >
        <Text style={{
          color: '#F7F7F7',
          fontSize: 14
        }}>
          ADICIONAR FOTO DE PERFIL
        </Text>
      </TouchableOpacity>

      <PhotoTakerPicker
        visible={visible}
        setVisible={setVisible}
        setPhoto={setPhoto}
      />

		</View>
  )
}
