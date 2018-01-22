import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image
} from 'react-native';
import Dimension from '../constant/dimensions';
import Main from '../Home';

export default class Splash extends Component {
  constructor() {

  }

  componentDidMount() {
    //倒计时2s进入首页
    setTimeout(() => {
      this.props.navigation.replace({
        name: "main",
        component: Main
      });
    }, 2000);

   render() {
       return(
         <View style={{flex:1}}>
            <StatusBar hidden={true} />
            <Image source={require('../images/ic_splash_1.jpg')}></Image>
         </View>
       )
   }
 }

}
