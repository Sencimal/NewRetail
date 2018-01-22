import React, {Component} from 'react';
import {
   View,
   Text,
   Image,
   TouchableOpacity,
   TextInput,
   ImageBackground
} from 'react-native';

import {loginStyle} from '../../style/loginStyle';

const loginIcons = {
    topIcon: require('../../resources/images/login/login_appicon.png'),
    phoneIcon: require('../../resources/images/login/login_phone.png'),
    passwordIcon: require('../../resources/images/login/login_password.png'),
    agreeProtocolIcon: require('../../resources/images/login/login_agreeproto.png'),
    disagreeProtocolIcon: require('../../resources/images/login/login_disagreeproto.png'),
    loginBgIcon: require('../../resources/images/login/login_bg.png')
}

export default class Home extends Component {

  constructor(props) {
      super(props);
       this.state = {
           isAgreeUserProtocol: true,
      }
   }

   render() {
     return (
        <View style={loginStyle.container}>
          <Image style={loginStyle.topIcon} source={loginIcons.topIcon} resizeMode={'cover'} />
          <View style={loginStyle.phoneContainer}>
             <Image style={loginStyle.icon} source={loginIcons.phoneIcon} resizeMode={'cover'} />
             <TextInput style={loginStyle.input} placeholder='填写手机号'/>
             <TouchableOpacity style={loginStyle.getCodeBtn} onPress={this._getCode.bind(this)} >
               <Text style={loginStyle.getCodeBtnTitle}>获取验证码</Text>
             </TouchableOpacity>
          </View>
          <View style={loginStyle.separatorLine} />

          <View style={loginStyle.passwordContainer}>
             <Image style={loginStyle.icon} source={loginIcons.passwordIcon} resizeMode={'stretch'} />
             <TextInput style={loginStyle.input} placeholder='6位验证码' />
          </View>
          <View style={loginStyle.separatorLine} />

          <TouchableOpacity style={loginStyle.agreeProtoContainer} onPress={this._agreeUserProtocol.bind(this)}>
             <Image style={loginStyle.agreeProtoIcon} source={this.state.isAgreeUserProtocol ? loginIcons.agreeProtocolIcon : loginIcons.disagreeProtocolIcon} resizeMode={'cover'} />
             <Text style={loginStyle.agreeProtoTitle}>已阅读并同意用户的协议</Text>
          </TouchableOpacity>

          <TouchableOpacity style={loginStyle.loginBtnContainer} onPress={this._login.bind(this)}>
              <ImageBackground style={loginStyle.loginBtnBgIcon} source={loginIcons.loginBgIcon} resizeMode={'contain'} >
              <Text>登录</Text>
             </ImageBackground>
          </TouchableOpacity>

        </View>
     );
   }


    //获取手机的验证码
    _getCode() {
      alert('获取手机的验证码');
    };

   //同意用户协议
   _agreeUserProtocol() {
     let isAgreeUserProtocol = this.state.isAgreeUserProtocol;
     this.setState({
       isAgreeUserProtocol: !isAgreeUserProtocol,
     });
     alert('同意用户协议')
   };

   //登录
   _login() {
     alert('开始登录')
   };





}
