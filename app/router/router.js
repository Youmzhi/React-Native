import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../pages/Home/Home.js';
import MineScreen from '../pages/Mine/Mine.js';
import ProductScreen from '../pages/Product/Product.js';

import Text1 from '../pages/Test/Test1.js';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Mine: MineScreen,
});

const AppNavigator = createStackNavigator({
  Tabs: TabNavigator,
  // Home: {
  //   screen: HomeScreen,
  // },
  // Mine: {
  //   screen: MineScreen, 
  // },
  Product: {
    screen: ProductScreen, 
  },
  // Test: {
  //   screen: Text1, 
  // }
},{
  headerMode: 'none',
});



export default createAppContainer(AppNavigator);

