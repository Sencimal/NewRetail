import {
  StyleSheet
} from 'react-native';
import Dimen from '../constant/dimensions';

export let mineHeaderStyle = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },

    headerContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      width: Dimen.window.width,
      height: 150,
    },
    bgIcon: {
      height: 150,
      width: Dimen.window.width,
      alignItems: 'center',
    },
    headerUserIcon: {
      marginTop: 20,
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    balanceTip: {
      width: 120,
      height: 20,
      marginTop: 5,
      textAlign:'center',
      color: 'white',
    },
    balance: {
      width: 120,
      height: 20,
      textAlign: 'center',
      fontSize: 18,
      color: 'white',
    },

    allOrderConatiner: {
      flexDirection: 'row',
      alignItems : 'center',
      height: 40,
      width: Dimen.window.width
    },
    orderLabel: {
      marginLeft: 20,
      width: 80,
      height: 15,
      flex: 1,
    },
    arrowIcon: {
      width: 15,
      height: 20,
      marginRight: 20,
    },

    orderStatusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 90,
      justifyContent: 'space-around',
      width: Dimen.window.width,
      backgroundColor: 'white',
    },
    // orderStatusLeftItem: {
    //   backgroundColor: 'blue',
    // },
    // orderStatusMiddleItem: {
    //   width:80,
    //   height: 0,
    // },
    // orderStatusRightItem: {
    //   width:80,
    //   height: 100,
    // },
    separatorLine: {
      height: 1,
      width: Dimen.window.width,
      backgroundColor: '#CED0CE',
    },
    space: {
      height: 10,
      width: Dimen.window.width,
      backgroundColor: '#CED0CE',
    },
})
