import {
  StyleSheet
} from 'react-native';
import Dimen from '../constant/dimensions';

export let verticalSelectItemStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 20,
  },
  label: {
    marginTop: 5,
    width: 80,
    height: 20,
    textAlign: 'center',
  },
})
