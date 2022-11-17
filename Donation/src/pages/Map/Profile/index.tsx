import React, {useEffect, useState} from 'react';
import {View, Text, Image, Linking, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import ImageIcon from '../../../assets/icon.png';
import ImageIcon2 from '../../../assets/guarda-roupa.png';
import DefaultImageUser from '../../../assets/RegisterUser/defaultprofileimage.png';
import styles from './styles';

import ButtonReturn from '../../../components/ButtonReturn';
import {LoginUserApp} from '../../../api/user_interaction';
const Profile = (props: any) => {
  const navigation = useNavigation();
  const [user, setUset] = useState<any>({});
  const [typeUser, setTypeUser] = useState('');

  const getUser = async () => {
    try {
      const resultUser = await LoginUserApp(props.route.params.point_id);

      if (resultUser.status === 200) {
        setUset(resultUser.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (props.route.params.point_id !== undefined) {
      getUser();
    }
  }, []);
  useEffect(() => {
    let profile = user?.profile;
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
  }, [user]);

  if (user?.profile === undefined) {
    return <ActivityIndicator size="large" style={{marginTop: 50}} />;
  }

  return (
    <View style={styles.container}>
      <ButtonReturn
        _onPressButton={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.header}>
        <Image
          style={styles.imageUser}
          source={
            JSON.parse(user?.profileImage)?.uri === undefined
              ? DefaultImageUser
              : {uri: `${JSON.parse(user?.profileImage)?.uri}`}
          }
        />

        <Text style={styles.titleProfile}>{typeUser}</Text>

        <Text style={styles.titleName}>{user?.name}</Text>

        <View style={styles.gridcontact}>
          <View>
            <Text style={{fontWeight: '900', fontSize: 16, marginTop: 15}}>
              Contato:
            </Text>
          </View>
          <View style={styles.contact}>
            <Icon
              name="whatsapp"
              color="green"
              size={50}
              onPress={() =>
                Linking.openURL(`whatsapp://send?phone=${user?.phone}`)
              }
            />
            <Icon
              name="phone"
              color="green"
              size={50}
              onPress={() => Linking.openURL(`tel:${user?.phone}`)}
            />
          </View>
        </View>

        {user?.profile === 'institution' && (
          <Text style={styles.titleItensHelp}>
            Estamos recebendo doações de:
          </Text>
        )}
        {user?.profile === 'needHelp' && (
          <Text style={styles.titleItensHelp}>
            Estamos recebendo doações de:
          </Text>
        )}

        <View style={styles.itensHelp}>
          {JSON.parse(user?.receiving).map(
            (e: string, key: number) =>
              e === 'Roupa' && (
                <View key={key}>
                  <Image style={styles.imageItensHelp} source={ImageIcon2} />
                  <Text style={styles.textItensHelp}>Roupas</Text>
                </View>
              ),
          )}
          {JSON.parse(user?.receiving).map(
            (e: string, key: number) =>
              e === 'Alimento' && (
                <View>
                  <Image style={styles.imageItensHelp} source={ImageIcon} />
                  <Text style={styles.textItensHelp}>Alimentos</Text>
                </View>
              ),
          )}
        </View>

        <Text style={styles.titleItensHelp}>Descrição:</Text>
        <Text style={styles.descriptionItensHelp}>
          <Text>{user?.description}</Text>
        </Text>
      </View>
    </View>
  );
};
export default Profile;
