import React from 'react';
import { Text, View } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, ThemeProvider, Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Icon
  name='rowing' />

<Icon
  name='g-translate'
  color='#00aced' />

<Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
/>

<Icon
  reverse
  name='ios-american-football'
  type='ionicon'
  color='#517fa4'
/>

<Icon
  raised
  name='heartbeat'
  type='font-awesome'
  color='#f50'
  onPress={() => this.props.navigation.navigate('Product')} />
        <Text>Home首页222</Text>
        <ThemeProvider>
          <Button 
            icon={
              <Icon
                name="arrow-right"
                size={15}
                color="white"
              />
            }
            title="Hey!" 
          />
        </ThemeProvider>
         <Button 
            icon={
              <Icon
                name="rowing"
                size={15}
                color="white"
              />
            }
            title="Hey!" 
          />
      </View>
    );
  }
}