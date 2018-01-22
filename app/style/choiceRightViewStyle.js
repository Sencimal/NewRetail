import {
  StyleSheet
} from 'react-native';
import Dimen from '../constant/dimensions';

export let choiceRightViewStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
    },
   separatorLine: {
     height: 20,
     backgroundColor: 'gray',
     width: Dimen.window.width - 100,
   }
})
