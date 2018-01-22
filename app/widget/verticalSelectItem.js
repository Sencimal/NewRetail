import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {verticalSelectItemStyle} from '../style/verticalSelectItemStyle';

export default class VerticalSelectItem extends Component{
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <View style={verticalSelectItemStyle.container}>
       <TouchableOpacity onPress={() => this.props.pressAction()}>
          <Image style={verticalSelectItemStyle.icon} source={this.props.icon} />
          <Text style={verticalSelectItemStyle.label}>{this.props.title}</Text>
       </TouchableOpacity>
       </View>
    );
  }

}
