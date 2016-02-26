/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Text,
  View,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

import Main from './app/Main';

class aniDemo extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Anm demo',
          component: Main,
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
    alignSelf: 'center'
  }
});

AppRegistry.registerComponent('aniDemo', () => aniDemo);
