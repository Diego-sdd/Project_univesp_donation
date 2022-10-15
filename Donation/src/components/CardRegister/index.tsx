import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const array = [
  {
    id: 1,
    title: 'Fazer uma doação',
    icon: (
      <MaterialCommunityIcons
        name="hand-heart"
        style={styles.cardIcon}
        color="white"
      />
    ),
    iconSelected: (
      <MaterialCommunityIcons
        name="hand-heart"
        style={styles.cardIcon}
        color="#333333"
      />
    ),
  },
  {
    id: 2,
    title: 'Receber ajuda',
    icon: (
      <MaterialCommunityIcons
        name="heart"
        style={styles.cardIcon}
        color="white"
      />
    ),
    iconSelected: (
      <MaterialCommunityIcons
        name="heart"
        style={styles.cardIcon}
        color="#333333"
      />
    ),
  },
  {
    id: 3,
    title: 'Cadastrar um ponto de doação',
    icon: (
      <MaterialCommunityIcons
        name="home"
        style={styles.cardIcon}
        color="white"
      />
    ),
    iconSelected: (
      <MaterialCommunityIcons
        name="home"
        style={styles.cardIcon}
        color="#333333"
      />
    ),
  },
];

type ButtonProps = {
  setStatusUser: any;
};

const Card: React.FC<ButtonProps> = ({setStatusUser}) => {
  const [status, setStatus] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione o seu tipo de perfil</Text>
      <View style={styles.viewCard}>
        {array.map((e, k) => (
          <TouchableOpacity
            key={k}
            style={{
              ...styles.card,
              backgroundColor: status === e.id ? '#cc3939' : '#F8F8F8',
              elevation: status === e.id ? 9 : 1,
            }}
            onPress={() => {
              setStatusUser(e.id);
              setStatus(e.id);
            }}>
            {status === e.id ? e.icon : e.iconSelected}
            <Text
              style={{
                ...styles.cardText,
                color: status === e.id ? '#ffffff' : '#333333',
              }}>
              {e.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default Card;
