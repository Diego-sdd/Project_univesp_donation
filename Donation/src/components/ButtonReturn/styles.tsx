import {StyleSheet} from 'react-native';
import * as colorsJson from '../../utils/color.json';
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: -80,
    width: '100%',
  },
  button:{
    backgroundColor: colorsJson.primary,
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: 'center',
  }
});
export default styles;
