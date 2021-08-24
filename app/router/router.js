import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../pages/Home/Home.js';
import MineScreen from '../pages/Mine/Mine.js';
import ContactScreen from '../pages/Contact/Contact.js';
import CircleScreen from '../pages/Circle/Circle.js';
import SettingScreen from '../pages/Setting/Setting.js';
import ProductScreen from '../pages/Product/Product.js';

import Text1 from '../pages/Test/Test1.js';

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Contact: ContactScreen,
    Circle: CircleScreen,
    Setting: SettingScreen,
    Mine: MineScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName
        switch (routeName) {
          case 'Home':
            iconName = `home`
            break
          case 'Contact':
            iconName = `volume-control-phone`
            break
          case 'Circle':
            iconName = `gg-circle`
            break
          case 'Setting':
            iconName = `gear`
            break
          case 'Mine':
            iconName = `user-circle`
            break
        }
        return <Icon name={iconName} size={26} color={tintColor} />
      }
    })
  }
);

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

