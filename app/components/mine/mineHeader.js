import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {mineHeaderStyle} from '../../style/mineHeaderStyle';
import VerticalSelectItem from '../../widget/verticalSelectItem';

export default class MineHeader extends Component{
  constructor(props) {
      super(props);
  }

  render(){
    return(
    <View style={mineHeaderStyle.container}>
       <View style={mineHeaderStyle.headerContainer}>
          <ImageBackground style={mineHeaderStyle.bgIcon} source={require('../../resources/images/mine/mine_headerbg.png')} resizeMode={'cover'}>
          <Image style={mineHeaderStyle.headerUserIcon} source={this.props.headerUserIcon} resizeMode={'cover'}/>
          <Text style={mineHeaderStyle.balanceTip}>我的余额</Text>
          <Text style={mineHeaderStyle.balance}>{this.props.balance}</Text>
         </ImageBackground>
       </View>
       <View style={mineHeaderStyle.allOrderConatiner}>
          <Text style={mineHeaderStyle.orderLabel}>所有订单</Text>
          <Image style={mineHeaderStyle.arrowIcon} source={require('../../resources/images/mine/mine_rightarrow.png')} />
       </View>
         <View style={mineHeaderStyle.separatorLine} /> 
        <View style={mineHeaderStyle.orderStatusContainer}>
           <VerticalSelectItem style={mineHeaderStyle.orderStatusLeftItem} icon={require('../../resources/images/mine/mine_needtopay.png')} title='待付款' pressAction={this._goToNeedToPayPage.bind(this)} />
           <VerticalSelectItem style={mineHeaderStyle.orderStatusMiddleItem} icon={require('../../resources/images/mine/mine_needtopostgoods.png')} title='待发货' pressAction={this._goToNeedToPostGoodsPage.bind(this)} />
           <VerticalSelectItem style={mineHeaderStyle.orderStatusRightItem} icon={require('../../resources/images/mine/mine_needtoreceivegoods.png')} title='待收货' pressAction={this._goToNeedToReceiveGoodspage.bind(this)}/>
        </View>
        <View style={mineHeaderStyle.space} />
    </View>
    );
  }

   //跳转到待付款页面
  _goToNeedToPayPage() {
    alert('待付款界面')
  }
  //跳转到待发货页面
  _goToNeedToPostGoodsPage() {
    alert('待发货页面')
  }
  //跳转到待收货界面
  _goToNeedToReceiveGoodspage() {
     alert('待收货界面')
  }






}
