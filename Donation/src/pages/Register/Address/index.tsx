import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  Platform,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {storeJWT as storeJWTRedux} from '../../../redux/actions/authActions';
import {setUserData as storeUserRedux} from '../../../redux/actions/userActions';
import {RegisterUserApp} from '../../../api/user';

import styles from './styles';

import PopUpConfirm from '../../../components/PopUpConfirm';
import InputAddressSearch from '../../../components/InputAddressSearch';

const RegisterAddress = (props: any) => {
  const {registerUserReducer, storeJWT, storeUser} = props;

  const navigation = useNavigation();

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');

  const [confirmVisible, setConfirmVisible] = useState(false);
  const [navigationSuccess, setNavigationSuccess] = useState(false);

  useEffect(() => {
    if (confirmVisible === false && navigationSuccess) {
      navigation.navigate('Home');
    }
  }, [confirmVisible]);

  const handlerRegister = async () => {
    
    const data = {
      phone: registerUserReducer?.phone.replace(/\D/gim, ''),
      password: registerUserReducer?.password,
      profile: registerUserReducer?.profile,
      name: registerUserReducer?.name,
      email: registerUserReducer?.email,
      city,
      state,
      street,
      district,
      country,
      numberAddress: streetNumber,
      latitude,
      longitude,
      profileImage: registerUserReducer?.profileImage,
      receiving: registerUserReducer?.receiving,
      description: registerUserReducer?.description,
      cnpj: registerUserReducer?.cnpj,
    };
    try {
      const result = await RegisterUserApp(data);
      console.log(result);
      if (result.status === 200) {
        storeJWT(result.data?.body.token);
        storeUser({
          id: result.data?.body?.user?.id,
          phone: result.data?.body?.user?.phone,
          profile: result.data?.body?.user?.profile,
          name: result.data?.body?.user?.name,
          email: result.data?.body?.user?.email,
          latitude: result.data?.body?.user?.latitude,
          longitude: result.data?.body?.user?.longitude,
          created_at: result.data?.body?.user?.created_at,
          profileImage: result.data?.body?.user?.profileImage,
          receiving: result.data?.body?.user?.receiving,
          description: result.data?.body?.user?.description,
          cnpj: result.data?.body?.user?.cnpj,
        });
        navigation.navigate('Home');

        
      } else {
        console.log('erro');
      }
    } catch (error) {
      console.log('erro');
      console.log(error);
    }

    return
    // setConfirmVisible(true);
    // setNavigationSuccess(true);
  };

  const handleOnPress = (data: any, details: any) => {
    console.log(data?.terms);
    setLatitude(details?.geometry?.location?.lat);
    setLongitude(details?.geometry?.location?.lng);

    if (data?.terms.length === 6) {
      setStreet(data?.terms[0].value);
      setStreetNumber(data?.terms[1].value);
      setDistrict(data?.terms[2].value);
      setCity(data?.terms[3].value);
      setState(data?.terms[4].value);
      setCountry(data?.terms[5].value);
    }
    if (data?.terms.length === 5) {
      setStreet(data?.terms[0].value);
      setDistrict(data?.terms[1].value);
      setCity(data?.terms[2].value);
      setState(data?.terms[3].value);
      setCountry(data?.terms[4].value);
    }
    if (data?.terms.length === 4) {
      setDistrict(data?.terms[0].value);
      setCity(data?.terms[1].value);
      setState(data?.terms[2].value);
      setCountry(data?.terms[3].value);
    }
    if (data?.terms.length === 3) {
      setCity(data?.terms[0].value);
      setState(data?.terms[1].value);
      setCountry(data?.terms[2].value);
    }

    // console.log(details);
    // navigation.goBack();
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Text style={styles.title}>Agora preencha o campo de endereço</Text>
      <Text style={styles.description}>
        Digite seu endereço completo, com rua, bairro, cidade e número.
      </Text>

      {district !== '' ? (
        <>
          <View style={styles.dataAddress}>
            <Text style={styles.fontAddress}>Rua: {street}</Text>
            <Text>{street}</Text>
            <Text style={styles.fontAddress}>Número:</Text>
            <Text>{streetNumber || "--"}</Text>
            <Text style={styles.fontAddress}>Bairro:</Text>
            <Text>{district}</Text>
            <Text style={styles.fontAddress}>Cidade:</Text>
            <Text>{city}</Text>
          </View>

          <TouchableHighlight
            underlayColor="#343434"
            style={styles.containerAlterAddress}
            onPress={() => {
              setStreet('');
              setStreetNumber('');
              setDistrict('');
              setCity('');
              setState('');
              setCountry('');
            }}>
            <Text style={styles.textAlterAddress}>Alterar endereço</Text>
          </TouchableHighlight>
          {!confirmVisible && (
            <RectButton
              style={styles.button}
              onPress={() => {
                handlerRegister();
              }}>
              <View style={styles.buttonIcon}>
                <Text>
                  <MaterialCommunityIcons
                    name="arrow-right"
                    color="#fff"
                    size={24}
                  />
                </Text>
              </View>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </RectButton>
          )}
        </>
      ) : (
        <>
          <Text style={styles.titleInput}>Digite seu endereço*</Text>
          <InputAddressSearch onPress={handleOnPress} />
        </>
      )}

      {confirmVisible && (
        <PopUpConfirm
          modalVisible={confirmVisible}
          setModalVisible={setConfirmVisible}>
          <Text style={styles.textSucess}>
            Seu cadastro foi efetuado com sucesso
          </Text>
        </PopUpConfirm>
      )}
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = (state: any) => {
  return {
    registerUserReducer: state.registerUserReducer?.data,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch: any) => {
  // Action
  return {
    storeJWT: (value: any) => dispatch(storeJWTRedux(value)),
    storeUser: (value: any) => dispatch(storeUserRedux(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterAddress);
