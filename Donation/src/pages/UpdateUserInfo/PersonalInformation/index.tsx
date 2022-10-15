import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {RectButton} from 'react-native-gesture-handler';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {maskPhone} from '../../../utils/maskPhone';
import styles from './styles';

const PersonalInformation = (props: any) => {
  const {setRegisterUser, userReducer} = props;
  const navigation = useNavigation();

  const [profile, setProfile] = useState('');
  const [name, setName] = useState(userReducer.name || '');
  const [phone, setPhone] = useState(userReducer.name || '');
  const [email, setEmail] = useState(userReducer.name || '');
  const [statusUser, setStatusUser] = useState(userReducer.profile || '');

  const [nameErro, setNameErro] = useState('');
  const [phoneErro, setPhoneErro] = useState('');
  const [passwordErro, setPasswordErro] = useState('');

  const handleNavigateAddress = () => {
    const dataUser = {
      profile,
      name,
      phone,
      email,
    };

    let checkInput = 0;
    if (name.length < 5) {
      setNameErro('Digite seu nome e sobrenome');
      checkInput = +1;
    } else {
      setNameErro('');
    }

    if (phone.length < 11) {
      setPhoneErro('Digite o telefone corretamente');
      checkInput = +1;
    } else {
      setPhoneErro('');
    }

    if (checkInput === 0) {
      setRegisterUser(dataUser);
      navigation.navigate('RegisterAddress');
    }
  };
  console.log(userReducer);
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.container}>
        <>
          <Text style={styles.titleInput}>Nome*</Text>
          <TextInput
            style={{
              ...styles.input,
              borderWidth: nameErro !== '' ? 1 : 0,
              borderColor: nameErro !== '' ? '#ea4646' : '',
            }}
            placeholder="Nome"
            value={name}
            autoCorrect={false}
            onChangeText={setName}
          />
          <Text style={styles.ErroInput}>{nameErro}</Text>

          <Text style={styles.titleInput}>Telefone*</Text>
          <TextInput
            style={{
              ...styles.input,
              borderWidth: phoneErro !== '' ? 1 : 0,
              borderColor: phoneErro !== '' ? '#ea4646' : '',
            }}
            placeholder="Telefone"
            value={phone}
            autoCorrect={false}
            maxLength={16}
            autoCapitalize="characters"
            onChangeText={(el: string) => {
              try {
                let valuePhone = maskPhone(el);
                setPhone(valuePhone);
              } catch (error) {
                console.log(error);
              }
            }}
            keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
          />
          <Text style={styles.ErroInput}>{phoneErro}</Text>

          <Text style={styles.titleInput}>Email</Text>
          <TextInput
            style={{
              ...styles.input,
            }}
            placeholder="Email"
            value={email}
            autoCorrect={false}
            onChangeText={setEmail}
          />
          {statusUser === 'needHelp' && (
            <>
              <Text style={styles.titleInput}>CNPJ</Text>
              <TextInput
                style={{
                  ...styles.input,
                }}
                placeholder="CNPJ"
                // value={city}
                autoCorrect={false}
                keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
                // onChangeText={setCity}
              />
            </>
          )}

          <RectButton style={styles.button} onPress={handleNavigateAddress}>
            <View style={styles.buttonIcon}>
              <Text>
                <MaterialCommunityIcons
                  name="arrow-right"
                  color="#fff"
                  size={24}
                />
              </Text>
            </View>
            <Text style={styles.buttonText}>Salvar</Text>
          </RectButton>
        </>
      </View>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userReducer: state.userReducer?.data,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = () => {
  // Action
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonalInformation);
