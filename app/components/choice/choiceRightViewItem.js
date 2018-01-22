import React, { Component } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {choiceRightViewItemStyle} from '../../style/choiceRightViewItemStyle';

export default class ChoiceRightViewItem extends Component {
  constructor(props) {
     super(props);

  }

  render() {
    return(
      <View style={choiceRightViewItemStyle.container}>
           <Image style={choiceRightViewItemStyle.goodsIcon} source={this.props.goodsIcon} resizeMode={'contain'} />
           <View style={choiceRightViewItemStyle.goodsDetailContainer}>
              <Text style={choiceRightViewItemStyle.goodsName}>{this.props.goodsName}</Text>
              <View style={choiceRightViewItemStyle.goodsTipAndContentContainer}>
                 <Text style={choiceRightViewItemStyle.goodsPriceTip}>进货价</Text>
                 <Text style={choiceRightViewItemStyle.goodsPriceContent}>{this.props.purchaseCost}</Text>
              </View>
              <View style={choiceRightViewItemStyle.goodsTipAndContentContainer}>
                 <Text style={choiceRightViewItemStyle.goodsPriceTip}>销售价</Text>
                 <Text style={choiceRightViewItemStyle.goodsPriceContent}>{this.props.sellPrice}</Text>
              </View>
              <View style={choiceRightViewItemStyle.goodsTipAndContentContainer}>
                 <Text style={choiceRightViewItemStyle.goodsPriceTip}>利 润</Text>
                 <Text style={choiceRightViewItemStyle.goodsPriceContent}>{this.props.profit}</Text>
              </View>
           </View>
      </View>
    )
  }
}
