/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import StackNavigatorPage from './app/router/router.js'

import SplashScreen from 'react-native-splash-screen'


// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
      // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide(); // =>引入文件，调用该方法关闭启动图
  }
 
  render() {
    // const isDarkMode = useColorScheme() === 'dark';

    // const backgroundStyle = {
    //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // };
    return (
      // 兼容ios刘海屏
      <SafeAreaView style={styles.appContainer}>
        {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
        <StackNavigatorPage />
      </SafeAreaView> 
      
      // <View>
      //   <Text>Home首页</Text>
      //   <Text>跳转个人中心 v</Text>
      // </View>
    );
  }
}

// React创建写法
class TestDemo extends React.Component {
  render() {
    return (
      // flex布局
      <View style={styles.container}>
        <Text style={styles.view_one}>视图1</Text>
        <Text style={styles.view_one}>视图2</Text>
        <Text style={styles.view_one}>视图3</Text>
      </View>
    );
  }
}

// React创建写法 省略写法（含义同上）
// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />

//           {/* 开发调试 */}
//           <TestDemo></TestDemo>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  view_one: {
    borderWidth: 1,
    borderColor: 'yellow',
    width: 200,
    height: 200,
    textAlign: 'center',
    fontSize: 28,
  },
});

export default App;
