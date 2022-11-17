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
  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    color: 'black'
  },

  button: {
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
    flex: 0.9,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  },
  line: {
    borderWidth: 1,
    borderColor: '#ed3b3b',
    width: '20%',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  ErroInput: {
    color: 'red',
    marginBottom: 5,
    marginLeft: 5
  }
});
export default styles;
