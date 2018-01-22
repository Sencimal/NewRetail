import React, {Component} from 'react';
import {
      Image,
      Text,
      View,
      TouchableOpacity,
      DeviceEventEmitter,
} from 'react-native';

import {
  StackNavigator,
  TabNavigator,
  addNavigationHelpers
} from 'react-navigation';

import Home from '../home/home';
import Choice from '../choice/choice';
import ShoppingCart from '../shoppingCart/shoppingCart';
import Mine from '../mine/mine';

/**
 * 标签栏图片资源
 */
let tabBarIcon = {
     homeIcon_normal: require('../../resources/images/tabBar/tabbar_home_normal.png'),
     homeIcon_select: require('../../resources/images/tabBar/tabbar_home_select.png'),
     choice_normal: require('../../resources/images/tabBar/tabbar_choosetobuy_normal.png'),
     choice_select: require('../../resources/images/tabBar/tabbar_choosetobuy_select.png'),
     shoppingCart_normal: require('../../resources/images/tabBar/tabbar_shoppingcart_normal.png'),
     shoppingCart_select: require('../../resources/images/tabBar/tabbar_shoppingcart_select.png'),
     mine_normal: require('../../resources/images/tabBar/tabbar_mine_normal.png'),
     mine_select: require('../../resources/images/tabBar/tabbar_mine_select.png')
}

const AppTab = TabNavigator({
    Home: {
      screen: Home,
      navigationOptions:({navigation,screenProps}) => ({
          headerTitle:'首页',
          // headerStyle:{
          //   backgroundColor:'#4ECBFC'
          // },
          headerTitleStyle:{
            fontSize:16,
            color:'white'
          },
          headerStyle:{
              backgroundColor:screenProps.themeColor
          }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
          /**
           * 是否支持滑动手势，iOS默认支持，安卓默认关闭
           */
          gesturesEnabled:true,
          /**
           * 是否隐藏标签栏，默认是关闭的
           */
          tabBarVisible:true,
          tabBarIcon: (({focused})=> {
             return(
               <Image
                 source={!focused ? tabBarIcon.homeIcon_normal : tabBarIcon.homeIcon_select}
                 style={{height:20,width:20}}
               />
             )
          }),
          tabBarLabel:'首页',
      })
  },
   Choice: {
      screen: Choice,
      navigationOptions: ({navigation,screenProps}) => TabOptions('选购','',tabBarIcon.choice_normal,tabBarIcon.choice_select,'选购',screenProps),
   },
   ShoppingCart: {
     screen: ShoppingCart,
     navigationOptions: ({navigation,screenProps}) => TabOptions(' 购物车','清空',tabBarIcon.shoppingCart_normal,tabBarIcon.shoppingCart_select,'购物车',screenProps)
   },
   Mine: {
      screen: Mine,
      navigationOptions:({navigation,screenProps}) => TabOptions('我的','',tabBarIcon.mine_normal,tabBarIcon.mine_select,'我的',screenProps)

   },
}, {
    /**
     * 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。(属性值：'top','bottom')
     */
     tabBarPosition:'bottom',
     swipeEnable:false, //是否允许在标签之间进行滑动
     animationEnable:true,//是否在更改标签时显示动画
     /**
      * 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签全部加载，默认为false
        推荐改成true。
      */
     lazy:true,
     initialRouteName:'', //设置默认的页面组件
     backBehavior: 'none',//按back键 是否跳转到第一个Tab(首页)，none为不跳转
     tabBarOptions:{
         //iOS属性
         //因为第二个tabbar是在页面中创建的，所以前景色的设置对其无效，当然也可以通过设置tintColor使其生效
          activeTintColor:'#eaad2a',//label和icon的前景色，活跃状态下（选中）
          //inactiveTintColor:'orange',//label和icon的前景色 不活跃状态下(未选中)
          //activeBackgroundColor:'blue',//label和icon的背景色 活跃状态下（选中）
          //inactiveBackgroundColor:"green",//label和icon的背景色 不活跃状态下 （未选中）
          showLabel:true, //是否显示label，默认开启

         //安卓
         //activeTintColor:'', //label和icon的前景色 活跃状态下（选中）
         //inavtivetintColor:'', //label和icon的前景色 不活跃状态下 （未选中）
          showIcon:true, //是否显示图标，默认关闭
         //showLabel:true, //是否显示label，默认是开启的
         upperCaselabel:false,//是否使用便签大写，默认为true
         //pressColor:'' // material涟漪效果的颜色(安卓版本需要大于5.0)
         //pressOpacity:''// 按压标签的透明度变化 （安卓版本需要小于5.0）
         //scrollEnabled:false,//是否启用可滚动选项卡。
         /**
          * 标签指示器的样式对象（选项卡底部的行），安卓底部会多出一条线，可以将height设置为0
            来暂时解决这个问题
          */
         //indicatorStyle:{},//
     }

});

//初始化StackNavigator
export default AppNavigator = StackNavigator({
   //将TabNavigator包裹在StackNavigator里面可以保证跳转页面的时候隐藏tabBar
   AppTab:{
     screen:AppTab,
   },
  //将需要跳转的页面注册在这里，全局才可以跳转
  Choice:{
    screen:Choice,
  },
  ShoppingCart:{
    screen:ShoppingCart,
  },
  Mine:{
    screen:Mine,
  },
})


const TabOptions = (tabBarTitle,headerRightTitle,normalImage,selectedImage,navTitle,screenProps) => {
     const tabBarLabel = tabBarTitle;
     const tabBarIcon = (({focused}) => {
       return(
          <Image
              source={!focused ? normalImage : selectedImage}
              style={{height:20,width:20}}
              resizeMode={'contain'}
            />
        )
     });
     const headerTitle = navTitle;
     const headerStyle = {backgroundColor: screenProps.themeColor};
     const headerTitleStyle = {fontSize:16,color:'white',alignSelf:'center'};
     const tabBarVisible = true;
     const headerRight = (
       <View style={{flex: 1, flexDirection:'row', alignItems:'center'}}>
         <TouchableOpacity onPress={() => DeviceEventEmitter.emit('rightBarClick','')} disabled={headerRightTitle===''?true:false} >
         <Text style={{marginRight: 20}}>{headerRightTitle}</Text>
       </TouchableOpacity>
       </View>
     )
     return {tabBarLabel, tabBarIcon, headerRight, headerTitle, headerStyle, headerTitleStyle,tabBarVisible}
}
