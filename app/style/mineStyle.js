import {
  StyleSheet
} from 'react-native';
import Dimen from '../constant/dimensions';


export let mineStyle = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        width: Dimen.window.width,
      },
      headerContainer: {
        width: Dimen.window.width,
        height: 300,
        flexDirection: 'column',
      },
      space: {
        height: 10,
        backgroundColor: '#E6E6E6'
      },
      separatorLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE'
      },
     selectItem: {
       height: 60,
       height: Dimen.window.width,
     }

 }
)
