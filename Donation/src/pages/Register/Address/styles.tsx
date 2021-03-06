import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20,
    width: '100%',
  },

  title: {
    fontSize: 20,
    marginTop: 54,
    color: '#6C6C80',
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 4,
    marginBottom: 50,
  },
  titleInput: {
    color: '#322153',
    margin: 8,
    fontSize: 16,
  },
  button: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    alignSelf: 'center',
    backgroundColor: '#ed3b3b',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 100,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    flex: 0.8,
    justifyContent: 'center',
    marginLeft: '24%',
    color: '#FFF',
    fontSize: 16,
  },
  textSucess: {
    color: '#36b143',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
  containerAlterAddress: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
  },
  textAlterAddress: {
    fontWeight: '700',
    fontSize: 20,
    color: 'red',
  },
  dataAddress: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
    marginTop: 50,
    marginBottom: 20
  },
  fontAddress: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default styles;
