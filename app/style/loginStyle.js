import {
  StyleSheet
} from 'react-native';

import Dimen from './../constant/dimensions';

export let loginStyle = StyleSheet.create({
   container: {
     flex: 1,
     paddingTop: 40,
     flexDirection: 'column',
     backgroundColor: 'white',
   },
   topIcon: {
     height: 100,
     width: 100,
     left: Dimen.window.width/2 - 50,
   },
   phoneContainer: {
     flexDirection: 'row',
     marginTop: 30,
     marginLeft: 50,
     width: Dimen.window.width - 100,
     height: 50,
   },
   passwordContainer: {
     flexDirection: 'row',
     marginTop: 10,
     marginLeft: 50,
     width: Dimen.window.width - 100,
     height: 50,
   },
   icon: {
     marginTop: 12.5,
     height: 25,
     width: 15,
   },
   input: {
     marginTop: 10,
     marginLeft: 10,
     width: Dimen.window.width - 225,
     fontSize: 16,
   },
   getCodeBtn: {
     marginTop: 10,
     height: 30,
     width: 100,
     justifyContent: 'center',
     alignItems: 'flex-end',
   },
   getCodeBtnTitle: {
     fontSize: 16,
     color: '#eaad2a',
   },
   separatorLine: {
     marginLeft: 50,
     marginRight: 50,
     height: 0.5,
     backgroundColor: '#CED0CE',
   },

   agreeProtoContainer: {
     flexDirection: 'row',
     marginTop: 15,
     marginLeft: 50,
     width: Dimen.window.width - 100,
   },
   agreeProtoIcon: {
     width: 12,
     height: 12,
   },
   agreeProtoTitle: {
     fontSize: 12,
     marginLeft: 5,
   },

   loginBtnContainer: {
      marginLeft: 30,
      width: Dimen.window.width - 60,
      marginTop: 40,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center'
   },
   loginBtnBgIcon: {
      width: Dimen.window.width - 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center'
   },


})
