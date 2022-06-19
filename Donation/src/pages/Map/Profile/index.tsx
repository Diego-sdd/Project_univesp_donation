import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageIcon from '../../../assets/icon.png';
import ImageIcon2 from '../../../assets/guarda-roupa.png';
import Avatar01 from '../../../assets/avatar01.png';
import styles from './styles';
const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.imageUser}
          source={Avatar01}
        />
        <Text style={styles.titleName}>Diego Dias</Text>
        <Text style={styles.titleAge}>25 anos</Text>
        <Text style={styles.titlePhone}>13 996462026</Text>
        <View style={styles.contact}>
          <Icon name="whatsapp" color="green" size={50} />
          <Icon name="phone" color="green" size={50} />
        </View>

        <Text style={styles.titleItensHelp}>Estou precisando de:</Text>

        <View style={styles.itensHelp}>
          <View>
            <Image
              style={styles.imageItensHelp}
              source={ImageIcon2}
            />
            <Text style={styles.textItensHelp}>Roupas</Text>
          </View>
          <View>
            <Image style={styles.imageItensHelp} source={ImageIcon} />
            <Text style={styles.textItensHelp}>Alimentos</Text>
          </View>
        </View>

        <Text style={styles.titleItensHelp}>Descrição:</Text>
        <Text style={styles.descriptionItensHelp}>
          Olá, sou Diego e tenho 25 anos, tenho 2 filhos e no momento estou precisando de ajuda, alimentos ou roupas.
        </Text>
      </View>
    </View>
  );
};
export default Profile;
