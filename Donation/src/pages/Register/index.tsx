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
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {setRegisterUser as setRegisterUserRedux} from '../../redux/actions/registerUserAction';
import Card from '../../components/CardRegister';
import styles from './styles';

const Register = (props: any) => {
  const {setRegisterUser} = props;

  const navigation = useNavigation();

  const [profile, setProfile] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusUser, setStatusUser] = useState(0);

  const handleNavigateAddress = () => {
    const dataUser = {
      profile,
      name,
      phone,
      email,
      password,
    };
    setRegisterUser(dataUser);
    navigation.navigate('RegisterAddress');
  };

  useEffect(() => {
    switch (statusUser) {
      case 0:
        setProfile('donor');
        break;
      case 1:
        setProfile('needHelp');
        break;
      case 2:
        setProfile('institution');
        break;
      default:
        break;
    }
  }, [statusUser]);
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.container}>
        <ScrollView
          style={{
            flex: 1,
          }}>
          <Text style={styles.title}>
            Para continuar é preciso cadastrar alguns dados:
          </Text>
          <Text style={styles.description}>
            Solicitamos os dados para poder enter qual o seu tipo de perfil
          </Text>

          <View
            style={{
              marginBottom: statusUser === 0 ? '10%' : '0%',
            }}
          />

          <Card setStatusUser={setStatusUser} />

          {statusUser > 0 && (
            <>
              <Text style={styles.titleInput}>Nome*</Text>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                value={name}
                autoCorrect={false}
                onChangeText={setName}
              />

              <Text style={styles.titleInput}>Telefone*</Text>
              <TextInput
                style={styles.input}
                placeholder="Telefone"
                value={phone}
                autoCorrect={false}
                onChangeText={setPhone}
              />

              <Text style={styles.titleInput}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                autoCorrect={false}
                onChangeText={setEmail}
              />
              {statusUser === 3 && (
                <>
                  <Text style={styles.titleInput}>CNPJ</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="CNPJ"
                    // value={city}
                    autoCorrect={false}
                    // onChangeText={setCity}
                  />
                </>
              )}
              {(statusUser === 2 || statusUser === 3) && (
                <>
                  <View style={styles.line} />
                  <Text style={styles.titleInput}>
                    Estou {statusUser === 2 ? 'precisando de' : 'recebendo'}:
                  </Text>
                  <BouncyCheckbox
                    size={25}
                    fillColor="#ed3b3b"
                    unfillColor="#FFFFFF"
                    text="Roupas"
                    style={{
                      marginLeft: 3,
                      marginTop: 10,
                    }}
                    iconStyle={{borderColor: '#ed3b3b'}}
                    textStyle={{fontFamily: 'JosefinSans-Regular'}}
                    onPress={(isChecked: boolean) => {}}
                  />
                  <BouncyCheckbox
                    size={25}
                    fillColor="#ed3b3b"
                    unfillColor="#FFFFFF"
                    text="Alimentos"
                    style={{
                      marginLeft: 3,
                      marginTop: 10,
                    }}
                    iconStyle={{borderColor: '#ed3b3b'}}
                    textStyle={{fontFamily: 'JosefinSans-Regular'}}
                    onPress={(isChecked: boolean) => {}}
                  />
                </>
              )}

              <View style={styles.line} />

              <Text style={styles.titleInput}>Digite sua senha *</Text>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                secureTextEntry={true}
                autoCorrect={false}
                onChangeText={setPassword}
              />

              <Text style={styles.titleInput}>Confirme sua senha *</Text>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
                value={password}
                autoCorrect={false}
                onChangeText={setPassword}
              />

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
                <Text style={styles.buttonText}>Próximo</Text>
              </RectButton>
            </>
          )}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = () => {
  return {};
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch: any) => {
  // Action
  return {
    setRegisterUser: (value: any) => dispatch(setRegisterUserRedux(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
