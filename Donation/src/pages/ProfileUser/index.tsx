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

import {reset as ResetJWTRedux} from '../../redux/actions/authActions';
import {reset as ResetUserRedux} from '../../redux/actions/userActions';

import styles from './styles';

const Profile = (props: any) => {
  const {userReducer, ResetJWTRedux, ResetUserRedux} = props;
  const navigation = useNavigation();

  const [typeUser, setTypeUser] = useState('');
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
          <Image
            style={styles.imageUser}
            source={{
              uri: 'https://st4.depositphotos.com/1000975/24254/i/450/depositphotos_242548520-stock-photo-concept-of-charity-with-donated.jpg',
            }}
          />
          <Text style={styles.titleName}>{userReducer?.data?.name}</Text>
          <Text style={styles.titleAge}>{typeUser}</Text>
          <Text style={styles.titleAge}>25 anos</Text>
          <Text style={styles.titlePhone}>{userReducer?.data?.phone}</Text>
        </View>

        <View style={styles.ItemOptions}>
          <TouchableOpacity>
            <Text style={styles.ItensOptions}>Editar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.ItensOptions}>Excluir conta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              ResetUserRedux();
              ResetJWTRedux();
              navigation.navigate('Login');
            }}>
            <Text style={styles.ItensOptions}>Sair</Text>
          </TouchableOpacity>
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
