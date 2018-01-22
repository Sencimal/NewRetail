import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import {selectItemStyle} from '../style/selectItemStyle';

export default class SelectItem  extends Component{
  constructor(props) {
     super(props);

  }

  render() {
    return(
      <View style={selectItemStyle.container}>
         <Image style={selectItemStyle.titleIcon} source={this.props.titleIcon} resizeMode={'contain'} />
         <Text style={selectItemStyle.title}>{this.props.title}</Text>
         <Image style={selectItemStyle.arrowIcon} source={this.props.arrowIcon} resizeMode={'contain'} />
      </View>
    )
  }



}
