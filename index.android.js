'use strict';

import React, { Component } from 'react';
import {
  Alert,
  TouchableHighlight,
  Navigator,
  Text,
  AppRegistry,
  View
} from 'react-native';

// import { global } from './styles'; 

class FirstProject extends Component {
  render() {
    const routes = [
      {title: 'First Scene', index:0},
      {title: 'Second Scene', index: 1},
    ]
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          <MediaListView />
          // <TouchableHighlight onPress={()=>{
          //   if (route.index === 0) {
          //     navigator.push(routes[1]);
          //   } else {
          //     navigator.pop();
          //   }
          // }}>
          // <Text>Hello {route.title}!</Text>
          // </TouchableHighlight>
        }
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
                { return null },
              RightButton: (route, navigator, index, navState) => {
                return(
                  <TouchableHighlight style={{marginTop:10}} onPress={()=> 
                  Alert.alert('Search', 'You pressed the search button.')}> 
                  <Text>Search</Text>               
                </TouchableHighlight>
                )              
              },
              Title: (route, navigator, index, navState) =>
                { return (<Text style={{marginTop:23, marginLeft:40}}>iTunesBrowser</Text>); },
            }}
            style={{
              position:'absolute',
              top:0,
              left:0,
              right:0,
              backgroundColor:'gray', 
              // borderColor:'#f50000',
              // borderWidth:1,         
              flexDirection:'column',
              justifyContent:'space-between',
              alignItems:'center', 
              height:44
            }}
          />
        }
        style={{
          paddingTop:55,          
        }}
      />
    );
  }
}
class MediaListView extends Component {
  render() {
    return (
      <View>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec velit non sapien lacinia aliquam. Nullam viverra diam vel odio dictum, nec maximus dui tincidunt. Nullam vulputate condimentum turpis at dapibus. Quisque dignissim sem a augue ullamcorper vulputate. Praesent eget orci rhoncus, fringilla risus ut, dictum eros. Mauris turpis eros, condimentum eu posuere et, vestibulum sit amet turpis. Sed vehicula facilisis lectus in dignissim. Curabitur ullamcorper lectus mauris. Etiam elit lacus, sollicitudin in urna vel, sollicitudin dignissim erat.</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('FirstProject', () => FirstProject);
