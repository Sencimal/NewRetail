import {
  StyleSheet
} from 'react-native';
import Dimen from '../constant/dimensions';

export let choiceRightViewItemStyle = StyleSheet.create({
     container: {
       flex: 1,
       flexDirection: 'row',
       alignItems: 'center',
       width: Dimen.window.width - 100,
       height: 100,
       backgroundColor: 'white',
     },
     goodsIcon: {
       width: 60,
       height: 60,
     },
     goodsDetailContainer: {
       height: 80,
       width:  80,
       flexDirection: 'column',
       marginLeft: 20,
     },
     goodsName: {
       height: 20,
       width: 80,
     },
     goodsTipAndContentContainer: {
       flexDirection: 'row',
       width: 60,
       height: 20,
     },
     goodsPriceTip: {
       height: 20
     },
     goodsPriceContent: {
       marginLeft: 5,
       height: 20,
       color: 'red',
     },
     goodsAddOrMinusContainer: {
       width: 150,
       height: 50,
       flexDirection: 'column',
     },
     goodsAddBtn : {
       width: 30,
       height: 30,
       borderRadius: 15,
     },
})
