import {
  StyleSheet
} from 'react-native';
import Dimen from '../constant/dimensions';

export let choiceStyle = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    topViewContainer: {
      height: 150,
      width: Dimen.window.width,
    },
    mainViewContainer: {
      flexDirection: 'row',
    },

    leftViewContainer: {
      flexDirection: 'column',
      backgroundColor: 'yellow',
      width: 120,
      height: Dimen.window.height - 150,
    },
    leftViewItemBg: {
      flex: 1,
    },
    rightViewContainer: {
      flex: 1,
      backgroundColor: 'orange',
    },






})
