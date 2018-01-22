import React, {Component} from 'react';
import {
   StackNavigator,
   addNavigationHelpers
} from 'react-navigation';
import { View } from 'react-native';

// import Home from './Home';
// import Detail from './Detail';
// import {connect} from 'react-redux';
import Routers from './routers/routers';


export default class App extends Component {

  render() {
    return(
      <View style={{flex:1}}>
        <Routers screenProps={{themeColor:'#eaad2a'}} />
      </View>
    );
  }
}





// const AppWithNavigationState = ({dispatch,nav}) => (
//   <MyApp navigation={addNavigationHelpers({dispatch, state: nav})} />
// ));
//
// const mapStateToProps = state => ({
//     nav: state.nav,
// });
//
// export default connect(mapStateToProps)(AppWithNavigationState);
