import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, Image, ActivityIndicator } from 'react-native';

export default class Product extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text>Text组件</Text>
        <View>
          <Text>文本必须使用Text包裹</Text>
        </View>
        <Text>TextInput组件</Text>
        <View style={{borderColor: "red",borderWidth: 1}}>
          <TextInput value=""></TextInput>
        </View>
        <Text>Image组件</Text>
        <View style={{borderColor: "red",borderWidth: 1}}>
          <Image source={require("../../assets/logo.png")}></Image>
        </View>
        <Text>ActivityIndicator组件</Text>
        <View style={{borderColor: "red",borderWidth: 1}}>
          <ActivityIndicator animating={true} color="red" size="large"></ActivityIndicator>
        </View>
        
      </View>
    );
  }
}

// 参数类型检查
Product.propTypes = {

}