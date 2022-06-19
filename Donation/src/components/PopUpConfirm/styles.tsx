import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    minWidth: '80%',
    minHeight: '20%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    marginTop: -20,
    marginRight: -20,
    marginBottom: 15,
    alignItems: 'flex-end',
  },
  statusBarView: {
    width: '100%',
    marginTop: 40
  },
  statusBar: {
    backgroundColor: '#47d154',
    height: 5,
  },
});
export default styles;
