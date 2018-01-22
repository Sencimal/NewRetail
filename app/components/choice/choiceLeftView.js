import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import ChoiceLeftViewItem from './choiceLeftViewItem';
import {choiceLeftViewStyle} from '../../style/choiceLeftViewStyle';

const leftViewEatItemNormalIcon =  require('../../resources/images/choice/choice_eat_normal.png');
const leftViewEatItemSelectIcon =  require('../../resources/images/choice/choice_eat_select.png');
const leftViewDrinkItemNormalIcon = require('../../resources/images/choice/choice_drink_normal.png');
const leftViewDrinkItemSelectIcon = require('../../resources/images/choice/choice_drink_select.png');
const leftViewHurryItemNormalIcon = require('../../resources/images/choice/choice_hurry_normal.png');
const leftViewHurryItemSelectIcon = require('../../resources/images/choice/choice_hurry_select.png');
const leftViewForetasteItemNormalIcon = require('../../resources/images/choice/choice_foretaste_normal.png');
const leftViewForetasteItemSelectIcon = require('../../resources/images/choice/choice_foretaste_select.png');

export default class ChoiceLeftView extends Component {
  constructor(props) {
      super(props);
      this.state = {
           isEatSelect: true,
           isDrinkSelect: false,
           isHurrySelect: false,
           isForetasteSelect: false,
      }
  }

  render() {
    return(
      <View style={choiceLeftViewStyle.container}>
         <ChoiceLeftViewItem isSelectItem={this.state.isEatSelect}  pressAction={this._pressEatItemAction} itemIcon={this.state.isEatSelect ? leftViewEatItemSelectIcon : leftViewEatItemNormalIcon} />
         <ChoiceLeftViewItem isSelectItem={this.state.isDrinkSelect} pressAction={this._pressDrinkItemAction} itemIcon={this.state.isDrinkSelect ? leftViewDrinkItemSelectIcon : leftViewDrinkItemNormalIcon} />
         <ChoiceLeftViewItem isSelectItem={this.state.isHurrySelect} pressAction={this._pressHurryItemAction} itemIcon={this.state.isHurrySelect ? leftViewHurryItemSelectIcon : leftViewHurryItemNormalIcon} />
         <ChoiceLeftViewItem isSelectItem={this.state.isForetasteSelect} pressAction={this._pressTryToEatItemAction} itemIcon={this.state.isForetasteSelect ? leftViewForetasteItemSelectIcon : leftViewForetasteItemNormalIcon} />
      </View>
    )
  }

  _pressEatItemAction = () => {
     alert('点击了吃');
     this.setState({
       isEatSelect: true,
       isDrinkSelect: false,
       isHurrySelect: false,
       isForetasteSelect: false,
     })
  }

  _pressDrinkItemAction = () => {
    alert('点击了喝');
    this.setState({
      isEatSelect: false,
      isDrinkSelect: true,
      isHurrySelect: false,
      isForetasteSelect: false,
    })
  }

  _pressHurryItemAction = () => {
    alert('点击了急');
    this.setState({
      isEatSelect: false,
      isDrinkSelect: false,
      isHurrySelect: true,
      isForetasteSelect: false,
    })
  }

  _pressTryToEatItemAction = () => {
    alert('点击了一份试吃');
    this.setState({
      isEatSelect: false,
      isDrinkSelect: false,
      isHurrySelect: false,
      isForetasteSelect: true,
    })
  }

}
