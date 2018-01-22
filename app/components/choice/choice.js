import React, {Component} from 'react';
import {
      View,
      Text,
      Image,
      ScrollView,
} from 'react-native';
import Carousel from 'teaset/components/Carousel/Carousel';
import {choiceStyle} from '../../style/choiceStyle';
import ChoiceLeftView from './choiceLeftView';
import ChoiceRightView from './choiceRightView';

export default class Choice extends Component {

   render() {
       return(
         <View style={choiceStyle.container} >
           <ScrollView>
            <View style={choiceStyle.topViewContainer}>
               <Carousel style={choiceStyle.topViewContainer} control={true}>
                  <Image style={choiceStyle.topViewContainer} source={require('../../resources/images/choice/choice_banner.png')} resizeMode='cover' />
                  <Image style={choiceStyle.topViewContainer} source={require('../../resources/images/choice/choice_banner.png')} resizeMode='cover' />
                  <Image style={choiceStyle.topViewContainer} source={require('../../resources/images/choice/choice_banner.png')} resizeMode='cover' />
               </Carousel>
            </View>
            <View style={choiceStyle.mainViewContainer}>
                <ChoiceLeftView style={choiceStyle.leftViewContainer} />
                <ChoiceRightView style={choiceStyle.rightViewContainer} />
            </View>
          </ScrollView>
         </View>
      );
}









}
