import React, {
  Component,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
} from 'react-native';

import Animatable from 'react-native-animatable';

var COLORS = [
   '#65b237', // green
   '#346ca5', // blue
   '#a0a0a0', // light grey
   '#ffc508', // yellow
   '#217983', // cobolt
   '#435056', // grey
   '#b23751', // red
   '#333333', // dark
   '#ff6821', // orange
];

export default class Anm11 extends Component{
  constructor() {
    super();

    this.state = {
      duration: 1200,
      toggledOn: false
    };
  }

  render(){

    return (
      <View style={styles.container}>
          <Text style={styles.text}>To Do</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 30,
    paddingLeft: 30,
    flex: 1,
    justifyContent:'center',
  },
  text: {
    fontSize: 25,
    color: '#333',
    textAlign: 'center'
  },
  animatableName: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  animatable: {
    padding: 17.5,
    margin: 10,
  }
});
