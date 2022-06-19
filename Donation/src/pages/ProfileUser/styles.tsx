import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    width: '100%',
  },
  imageUser: {
    width: 120,
    height: 120,
    borderRadius: 120,
    resizeMode: 'cover',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 50,
    color: 'black', 
    alignItems: 'center',
  },
  titleName: {
    color: 'black',
    fontWeight: '700',
    fontSize: 22,
    marginTop: 20,
  },
  titleAge: {
    color: 'black',
    fontSize: 20,
  },
  titlePhone: {
    color: 'black',
    fontSize: 20,
  },
  ItensOptions: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    paddingBottom: 10
  },
  ItemOptions: {
    marginTop: 50,
    width: '100%',
    padding: 40,
    flexGrow: 1, 
    paddingHorizontal: 32,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  }
});
export default styles;
