import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import ChoiceRightViewItem from './choiceRightViewItem';
import {choiceRightViewStyle} from '../../style/choiceRightViewStyle';
const goodsIcon = require('../../resources/images/choice/choice_rightview_goodsicon.png')
export default class ChoiceRightView extends Component {

  constructor(props) {
    super(props);
    this.state = {
       data: [
         {goodsIcon:goodsIcon, goodsName:'一次性雨衣',goodsPurchase:'¥5',price:'¥10.0',profit:'¥5.0'},
         {goodsIcon:goodsIcon, goodsName:'超轻时尚雨衣',goodsPurchase:'¥5',price:'¥10.0',profit:'¥6.0'},
         {goodsIcon:goodsIcon, goodsName:'一次性雨衣',goodsPurchase:'¥5',price:'¥10.0',profit:'¥7.0'},
         {goodsIcon:goodsIcon, goodsName:'小松鼠',goodsPurchase:'¥5',price:'¥10.0',profit:'¥8.0'},
         ]
    }
  }

  _renderSeparator = () => {
    return(
        <View style={ChoiceRightView.separatorLine} />
    )
  }

 render() {
   return(
        <View style={choiceRightViewStyle.conatiner}>
        <FlatList
         data = {this.state.data}
         renderItem = {({ item }) => (
           <ChoiceRightViewItem
             goodsIcon={item.goodsIcon}
             goodsName={item.goodsName}
             purchaseCost={item.goodsPurchase}
             sellPrice={item.price}
             profit={item.profit}
            />
         )}
         ItemSeparatorComponent = {this._renderSeparator}
         keyExtractor = {(item) => item.profit}
        />
       </View>
   );
 }
}
