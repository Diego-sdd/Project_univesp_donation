import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import DefaultImageUser from '../../assets/RegisterUser/defaultprofileimage.png';
import {reset as ResetJWTRedux} from '../../redux/actions/authActions';
import {reset as ResetUserRedux} from '../../redux/actions/userActions';

import styles from './styles';

const Profile = (props: any) => {
  const {userReducer, ResetJWTRedux, ResetUserRedux} = props;
  const navigation = useNavigation();

  const [typeUser, setTypeUser] = useState('');
  const [updateInfo, setUpdateInfo] = useState(false);

  useEffect(() => {
    let profile = userReducer?.data?.profile;
    switch (profile) {
      case 'needHelp':
        setTypeUser('Preciso de ajuda');
        break;
      case 'donor':
        setTypeUser('Doador');
        break;
      case 'institution':
        setTypeUser('Instituição');
        break;
      default:
        setTypeUser('');
        break;
    }
  }, [userReducer?.data]);
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.container}>
        <View style={styles.header}>
          {userReducer?.data !== undefined && (
            <Image
              style={styles.imageUser}
              source={
                JSON.parse(userReducer?.data?.profileImage)?.uri !== undefined
                  ? {uri: `${JSON.parse(userReducer?.data?.profileImage)?.uri}`}
                  : DefaultImageUser
              }
            />
          )}

          <Text style={styles.titleName}>{userReducer?.data?.name}</Text>
          <Text style={styles.titleAge}>{typeUser}</Text>
          <Text style={styles.titlePhone}>{userReducer?.data?.phone}</Text>
        </View>

        <View style={styles.ItemOptions}>
          <TouchableOpacity>
            <Text
              style={styles.ItensOptions}
              onPress={() => {
                if (!updateInfo) {
                  setUpdateInfo(true);
                } else {
                  setUpdateInfo(false);
                }
              }}>
              Editar Perfil
            </Text>
          </TouchableOpacity>
          {updateInfo && (
            <View style={{marginBottom: 10}}>
              <TouchableOpacity>
                <Text
                  style={styles.ItensOptionsSubTitle}
                  onPress={() => {
                    navigation.navigate('PersonalInformation');
                  }}>
                  Dados Pessoais
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.ItensOptionsSubTitle}>Endereço</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity>
            <Text style={styles.ItensOptions}>Excluir conta</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.ItensOptions}>Evento beneficente</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.ItensOptions}>Privacidade</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              ResetUserRedux();
              ResetJWTRedux();
              navigation.navigate('Login');
            }}>
            <Text style={styles.ItensOptions}>Sair</Text>
          </TouchableOpacity>

          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              alignSelf: 'center',
            }}>
            Version 1.0.0
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const mapStateToProps = (state: any) => {
  return {
    userReducer: state.userReducer,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch: any) => {
  // Action
  return {
    ResetJWTRedux: () => dispatch(ResetJWTRedux()),
    ResetUserRedux: () => dispatch(ResetUserRedux()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
