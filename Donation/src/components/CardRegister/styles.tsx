import {StyleSheet} from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  viewCard: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 15,
    borderRadius: 10,
    width: '45%',
    padding: 10,
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#f7f7f7',
  },
  cardIcon: {
    fontSize: 25,
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '700',
    color: '#322153',
  },
});
export default styles;
