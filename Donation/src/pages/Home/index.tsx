import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import Map from '../Map';

const Points = () => {
  const user = useSelector((state: any) => state.userReducer?.data);
  console.log(user);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Bem vindo.</Text>

        {user?.profile === 'needHelp' && (
          <Text style={styles.description}>
            Encontre no mapa um local de apoio. Seu perfil também vai ficar
            vísivel para outras pessoas entrarem em contato com você.
          </Text>
        )}
        {user?.profile === 'donor' && (
          <Text style={styles.description}>
            Encontre no mapa um local que está recebendo doações ou entre em
            contato com alguém que está precisando da sua ajuda
          </Text>
        )}

        <Map />
      </View>
    </>
  );
};

export default Points;
