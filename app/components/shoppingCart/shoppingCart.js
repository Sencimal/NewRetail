import React, {Component} from 'react';
import {
      View,
      Text,
      FlatList,
      ImageBackground,
      DeviceEventEmitter,
} from 'react-native';
import {shoppingCartStyle} from '../../style/shoppingCartStyle';
import ShoppingCartItem from './shoppingCartItem';


export default class ShoppingCart extends Component {

    constructor(props) {
        super(props);
         this.state = {
           data:[
              {id:'1',goodsName:'旺旺小小酥', goodsWeight:'71g', goodsPrice:'¥5.0'},
              {id:'2',goodsName:'小小酥', goodsWeight:'72g', goodsPrice:'¥5.0'},
              {id:'3',goodsName:'小小酥', goodsWeight:'73g', goodsPrice:'¥5.0'},
              {id:'4',goodsName:'小小酥', goodsWeight:'74g', goodsPrice:'¥5.0'},
             ]
         }
     };

    componentDidMount() {
       this.listener = DeviceEventEmitter.addListener('rightBarClick',(value)=>{
          this.setState({
            data:[]
          })
       })
    }

    componentWillUnmount() {
      this.listener.remove();
    }

    _renderSeparator = () => {
      return(
        <View style={shoppingCartStyle.separatorLine} />
      );
    };

   _selectGoodsAction() {

   };

   render() {

       return(
         <View style={shoppingCartStyle.container}>
              <FlatList
                data={this.state.data}
                renderItem = {({ item }) => (
                  <ShoppingCartItem
                    goodsName={item.goodsName}
                    goodsWeight={`规格: ${item.goodsWeight}`}
                    goodsPrice={item.goodsPrice}
                    // goodsNumber={}
                    // selectGoodsAction={}
                    // deleteGoodsAction={}
                    // addGoodsAction={}
                    // minusGoodsAction={}

                  />
                )}
                ItemSeparatorComponent  = {this._renderSeparator}
                keyExtractor = {item => item.id}
              />
         </View>
      );
}

}
