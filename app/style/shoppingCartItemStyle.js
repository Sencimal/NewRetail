import {
  StyleSheet,
} from 'react-native';
import Dimen from '../constant/dimensions';

export let shoppingCartItemStyle = StyleSheet.create({
     container: {
       flexDirection: 'row',
       flex: 1,
       backgroundColor: 'white',
       width: Dimen.window.width,
       alignItems: 'center',
       height: 80,
     },
     isSelectBtn: {
       width: 20,
       height: 20,
       marginLeft: 20,
     },
     goodsIcon: {
       width: 20,
       height: 40,
       marginLeft: 10,
     },

     goodsDtailContainer: {
       flexDirection: 'column',
     },
     goodsName: {
       width: 100,
       height: 20,
       marginLeft: 20,
     },
     goodsWeight: {
       width: 100,
       height: 20,
       marginLeft: 20,
     },
     goodsPrice: {
       width: 100,
       height: 20,
       marginLeft: 20,
       color: 'red',
     },

     goodsActionContainer: {
       flexDirection: 'column',
       alignItems: 'flex-end',
       height: 80,
       width: 100,
       flex: 1,
     },

     deleteGoodsContainer: {
       flexDirection: 'row',
       justifyContent: 'flex-end',
       marginTop: 10,
       marginRight: 20,
     },
     deleteGoodsIcon: {
       width: 15,
       height: 20,
     },
     deleteGoodsTitle: {
       width: 35,
       height: 20,
       marginTop: 3,
       textAlign: 'center',
     },

     addOrMinusGoodsContainer: {
       flexDirection: 'row',
       height: 20,
       width: 100,
       marginTop: 10,
       marginRight:20,
     },

     addGoodsBtn: {
       width: 20,
       height: 20,
       marginRight: 2,
     },
     minusGoodsBtn: {
       width: 20,
       height: 20,
       marginLeft: 15,
       flex: 1,
     },

})
