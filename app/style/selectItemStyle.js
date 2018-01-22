import {
  StyleSheet
} from 'react-native';
import Dimen from '../constant/dimensions';

export let selectItemStyle = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      width: Dimen.window.width
    },
    titleIcon: {
      width: 18,
      height: 18,
      marginLeft: 20,
    },
    title: {
      marginLeft: 20,
      width: 100,
      height: 30,
      marginTop: 15,
      flex: 1,
    },
    arrowIcon: {
      marginRight: 20,
      width: 15,
      height: 20,
    },
})
