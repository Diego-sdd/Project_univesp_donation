import * as React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import styles from './styles';

const MyComponent = () => {
  const [array, setArray] = React.useState<any>([]);
  const PushList = () => {
    setArray([
      {
        id: 0,
        name: 'Doações de cesta básica',
        description:
          'A ingreja Nossa Sr. do socorro está cadastrando pessoas que precisam de doações de alimentos e roupas',
        address: 'Endereço: rua eduardo cardoso, 630',
        image:
          'https://www.pensamentoverde.com.br/wp-content/uploads/2020/04/alimentos-685x385.jpg',
      },
      {
        id: 1,
        name: 'Alimento é vida',
        description: 'Dia 4 de novembro vamos realizar doações de marmitas.',
        address: 'Endereço: rua eduardo cardoso, 630',
        image:
          'https://file-cdn.mercyforanimals.org/mercy4animals.wpengine.com/sites/451/2020/05/kid-hero-01.png',
      },
    ]);
  };

  React.useEffect(() => {
    setTimeout(PushList, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {array.map((e: any, k: any) => (
          <Card key={k} style={{marginTop: 10, marginBottom: 20}}>
            <Card.Content>
              <Title>{e?.name}</Title>
              <Paragraph>{e?.description}</Paragraph>
              <Paragraph>{e?.address}</Paragraph>
            </Card.Content>
            <Card.Cover
              source={{uri: e?.image}}
              style={{
                width: '100%',
                height: 100,
              }}
            />
          </Card>
        ))}

        {array.length === 0 && <ActivityIndicator size="large" />}
        {/* {array.length === 0 && (
          <Text
            style={{
              textAlign: 'center',
              marginTop: 50,
            }}>
            No momento não temos evento na sua região
          </Text>
        )} */}
      </ScrollView>
    </View>
  );
};

export default MyComponent;
