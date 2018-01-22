import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {shoppingCartItemStyle} from '../../style/shoppingCartItemStyle';

const shoppingCartIcons = {
     goodsSelect: require('../../resources/images/shoppingCart/shoppingcart_select.png'),
     goodsUnselect: require('../../resources/images/shoppingCart/shoppingcart_unselect.png'),
     goodsDelete: require('../../resources/images/shoppingCart/shoppingcart_delete.png'),
     goodsAddOrMinusBg: require('../../resources/images/shoppingCart/shoppingcart_addorminusbg.png')
};

export default class ShoppingCartItem extends Component {
  constructor(props) {
    super(props);

  }

  render() {
     return(
         <View style={shoppingCartItemStyle.container}>
            <TouchableOpacity style={shoppingCartItemStyle.isSelectBtn}>
              <Image source={shoppingCartIcons.goodsSelect} />
            </TouchableOpacity>
            <Image style={shoppingCartItemStyle.goodsIcon} source={shoppingCartIcons.goodsDelete} />
            <Image style={shoppingCartItemStyle.goodsIcon} source={shoppingCartIcons.goodsDelete} />
            <View>
              <Text style={shoppingCartItemStyle.goodsName}>{this.props.goodsName}</Text>
              <Text style={shoppingCartItemStyle.goodsWeight}>{this.props.goodsWeight}</Text>
              <Text style={shoppingCartItemStyle.goodsPrice}>{this.props.goodsPrice}</Text>
            </View>

            <View style={shoppingCartItemStyle.goodsActionContainer}>
            <TouchableOpacity style={shoppingCartItemStyle.deleteGoodsContainer}>
              <Image style={shoppingCartItemStyle.deleteGoodsIcon} source={shoppingCartIcons.goodsDelete} resizeMode={'contain'}/>
              <Text style={shoppingCartItemStyle.deleteGoodsTitle}>删除</Text>
            </TouchableOpacity>

            <ImageBackground style={shoppingCartItemStyle.addOrMinusGoodsContainer} source={shoppingCartIcons.goodsAddOrMinusBg} resizeMode={'contain'}>
               <TouchableOpacity style={shoppingCartItemStyle.minusGoodsBtn}>
                  <Text>-</Text>
               </TouchableOpacity>
               <TouchableOpacity style={shoppingCartItemStyle.addGoodsBtn}>
                 <Text>+</Text>
               </TouchableOpacity>
            </ImageBackground>
          </View>

         </View>
     )
  }

//选中商品
 _goodsSelect() {

 };

 _goodsDelete() {

 };

 _goodsAdd() {

 };

 _goodsMinus() {

 };

}
