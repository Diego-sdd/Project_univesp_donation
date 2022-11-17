import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
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
    marginTop: 50,
    color: 'black',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  titleName: {
    color: 'black',
    fontWeight: '700',
    fontSize: 22,
    marginTop: 10,
  },
  titleProfile: {
    color: 'black',
    fontSize: 20,
    marginTop: 20,
  },
  titlePhone: {
    color: 'black',
    fontSize: 20,
  },
  contact: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  gridcontact: {
    flexDirection: 'row', 
    marginTop: 35,
    marginBottom: 20,
    marginLeft: 25
  },
  itensHelp: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    width: '100%',
  },
  imageItensHelp: {
    width: 65,
    height: 65,
    borderRadius: 65,
    resizeMode: 'cover',
  },
  textItensHelp: {
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '600',
    fontSize: 18,
  },
  titleItensHelp: {
    color: 'black',
    fontWeight: '800',
    width: '100%',
    fontSize: 16,
    marginTop: 30,
  },
  descriptionItensHelp: {
    color: 'black',
    width: '100%',
    marginTop: 10,
  },
});
export default styles;
