import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {RectButton} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {storeJWT as storeJWTRedux} from '../../redux/actions/authActions';
import {setUserData as storeUserRedux} from '../../redux/actions/userActions';

import {LoginUserApp} from '../../api/user';

import {maskPhone} from '../../utils/maskPhone';

import PopUpMessage from '../../components/PopUpMessage';

import ImageLogo from '../../assets/avatar01.png';

const RegisterUser = (props: any) => {
  const {storeJWT, storeUser} = props;
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState('');

  const [messageErro, setMessageErro] = useState('');
  const [erro, setErro] = useState(false);
  const [typeMessage, setTypeMessage] = useState('');

  const navigation = useNavigation();

  function handleNavigateToRegister() {
    navigation.navigate('Register');
  }
  async function handleNavigateToHome() {
    if (phone.length < 11 || password.length < 5) {
      setMessageErro('Preencha todos os campos corretamente');
      setTypeMessage('erro');
      setErro(true);
      return;
    }

    var phoneFormated = phone.replace(/[^0-9]/g, '');

    try {
      const result = await LoginUserApp(phoneFormated, password);

      if (result.status === 200) {
        storeJWT(result.data?.body.token);

        storeUser({
          id: result.data?.body?.user?.id,
          phone: phone,
          profile: result.data?.body?.user?.profile,
          name: result.data?.body?.user?.name,
          email: result.data?.body?.user?.email,
          latitude: result.data?.body?.user?.latitude,
          longitude: result.data?.body?.user?.longitude,
          created_at: result.data?.body?.user?.created_at,
        });
        navigation.navigate('Home');
      } else {
        setMessageErro('Senha ou e-mail estão incorretos');
        setTypeMessage('erro');
        setErro(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          style={{
            flex: 1,
            marginTop: 80,
          }}>
          <View style={styles.main}>
            <View style={styles.viewLogo}>
              <Text style={styles.textLogo}>
                Doe 
              </Text>
              <Text style={styles.subtextLogo}>
                + 
              </Text>
            </View>
             
            <View>
              <Text style={styles.title}>Bora fazer o bem ao próximo?</Text>
              <Text style={styles.description}>
                Use seu telefone e senha para fazer o login, ou efetue um novo
                cadastro
              </Text>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.titleInput}>Telefone</Text>
            <TextInput
              style={styles.input}
              placeholder="Telefone"
              value={phone}
              maxLength={16}
              autoCapitalize="characters"
              autoCorrect={false}
              onChangeText={(el: string) => {
                try {
                  let valuePhone = maskPhone(el);
                  setPhone(valuePhone);
                } catch (error) {
                  console.log(error);
                }
              }}
              keyboardType={Platform.OS === 'ios' ? "number-pad" : "numeric" }
            />

            <Text style={styles.titleInput}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              value={password}
              autoCorrect={false}
              onChangeText={setPassword}
            />
            <Text
              style={{
                marginTop: 5,
                color: '#322153',
                marginBottom: 10,
                fontSize: 15,
                fontWeight: '700',
                textAlign: 'center',
                textDecorationLine: 'underline',
              }}
              onPress={handleNavigateToRegister}>
              Não tenho cadastro
            </Text>
            <RectButton style={styles.button} onPress={handleNavigateToHome}>
              <View style={styles.buttonIcon}>
                <Text>
                  <MaterialCommunityIcons
                    name="arrow-right"
                    color="#ffffff"
                    size={24}
                  />
                </Text>
              </View>
              <Text style={styles.buttonText}>Entrar</Text>
            </RectButton>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <PopUpMessage
        title={messageErro}
        visible={erro}
        setModalVisible={setErro}
        type={typeMessage}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  viewLogo: {
    flexDirection: 'row'
  },
  textLogo: {
    color: '#ed3b3b',
    fontSize: 40,
    fontWeight: 'bold'
  },
  subtextLogo: {
    color: '#2f2828',
    fontSize: 40,
    marginLeft: 10,
    marginTop: 1,
    fontWeight: 'bold'
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {
    bottom: 0,
    marginBottom: 0,
    marginTop: 20,
  },

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    color: 'black',
  },

  button: {
    backgroundColor: '#ed3b3b',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    flex: 0.8,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
  },
  titleInput: {
    color: '#322153',
    margin: 8,
    fontSize: 16,
  },
});

const mapStateToProps = () => {
  return {};
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch: any) => {
  // Action
  return {
    storeJWT: (value: any) => dispatch(storeJWTRedux(value)),
    storeUser: (value: any) => dispatch(storeUserRedux(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
