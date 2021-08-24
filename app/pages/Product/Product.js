import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, Image, ActivityIndicator, StyleSheet, Switch } from 'react-native';
import Carousel from 'react-native-snap-carousel'

const horizontalMargin = 20;
const sliderWidth = 280;
const itemWidth = sliderWidth + horizontalMargin * 2;
const itemHeight = 200;
export default class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        entries: [
            { title: "安徒生童话" },
            { title: "格林童话" },
            { title: "我的童话"}
        ],
        switchOne: false
    }
  }

  _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
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
        <Text>轮播组件</Text>
        <View style={{borderColor: "red",borderWidth: 1}}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
          />
        </View>
        <Text>Switch组件</Text>
        <View>
          <Switch value={this.state.switchOne} onValueChange={(e)=> {
            this.setState({
              switchOne: e
            })
          }}></Switch>
        </View>
        <Text>View组件</Text>
        <View>
          <Text>view可以支持布局，样式，触摸事件，不能包裹文本 必须使用text组件包裹</Text>
        </View>
      </View>
    );
  }
}

// 参数类型检查
Product.propTypes = {

}

const styles = StyleSheet.create({ 
    slide: {
      borderRadius: 10,
      backgroundColor: '#992211'
   }
})