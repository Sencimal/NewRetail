import React, {Component} from 'react';
import {
      View,
      Text,
      FlatList,
} from 'react-native';
import {mineStyle} from '../../style/mineStyle';
import SelectItem from '../../widget/selectItem';
import MineHeader from './mineHeader';


export default class Mine extends Component {

   constructor(props) {
     super(props);
      this.state = {　
        data:[
          {titleIcon:require('../../resources/images/mine/mine_balancewithdraw.png'),title:'余额提现'},
          {titleIcon:require('../../resources/images/mine/mine_goods.png'),title:'店铺商品'},
          {titleIcon:require('../../resources/images/mine/mine_marketcount.png'),title:'营销统计'},
          {titleIcon:require('../../resources/images/mine/mine_bank.png'),title:'我的银行卡'},
          {titleIcon:require('../../resources/images/mine/mine_buypassword.png'),title:'交易密码'},
          {titleIcon:require('../../resources/images/mine/mine_address.png'),title:'收货地址'},
          {titleIcon:require('../../resources/images/mine/mine_shopapply.png'),title:'店铺申请'},
        ]
      }
   }

  _renderSeparator = () => {
    return (
      <View style={mineStyle.separatorLine} />
    );
  };

  _renderHeader = () => {
   return(
      <View style={mineStyle.headerContainer} >
        <MineHeader headerUserIcon={require('../../resources/images/mine/mine_shopapply.png')}  balance='¥500.00' />
      </View>
   );
 };

   render() {
       return(
         <View style={{flex:1, width: 375, height: 667}}>
           <FlatList
              data={this.state.data}
              renderItem = {({ item }) => (
                   <SelectItem
                      titleIcon={item.titleIcon}
                      title={item.title}
                      style={mineStyle.selectItem}
                      arrowIcon={require('../../resources/images/mine/mine_rightarrow.png')}
                   />
              )}
              ItemSeparatorComponent={this._renderSeparator}
              ListHeaderComponent={this._renderHeader}//头部组件
              keyExtractor={item => item.title}
           />
         </View>
      );
}




}
