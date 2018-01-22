import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class ChoiceRightViewItem extends Component {
  constructor() {

  }
  render() {
    return(
      <View>
         <TouchableOpacity onPress={}>
           <Text>默认排行</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={}>
           <Text>销量</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={}>
           <Text>价格</Text>
         </TouchableOpacity>
      </View>
    )
  }
}
