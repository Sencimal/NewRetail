import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {choiceLeftViewItemStyle} from '../../style/choiceLeftViewItemStyle';

const itemBgIcon = require('../../resources/images/choice/choice_leftview_selectbg.png');
export default class ChoiceLeftViewItem extends Component {
   constructor(props) {
      super(props);

   }

   componentWillReceiveProps() {

   }

   render(){
     return(
       <View style={choiceLeftViewItemStyle.container}>
         <ImageBackground style={choiceLeftViewItemStyle.container} source={this.props.isSelectItem ? itemBgIcon : itemBgIcon} resizeMode={'contain'}>
         <TouchableOpacity onPress={() => this.props.pressAction()}>
            <Image style={choiceLeftViewItemStyle.leftViewItemBg} source={this.props.itemIcon}  />
         </TouchableOpacity>
        </ImageBackground>
       </View>
     )
   }
}
