import {
  StyleSheet
} from 'react-native';

import Dimen from '../constant/dimensions';

export let shoppingCartStyle = StyleSheet.create({
    conatiner: {
      flexDirection: 'column',
      backgroundColor: 'white',
      flex: 1,
      width: Dimen.window.width,
      height: Dimen.window.height,
    },
    goodsPayContainer: {
       width: 150,
       height: 100,
       justifyContent: 'center',
       alignItems: 'center',
    },
    goodsPayTitle: {
      color: 'white',
    },
    separatorLine: {
      height: 0.5,
      width: Dimen.window.width,
      backgroundColor: '#CED0CE'
    },

})
