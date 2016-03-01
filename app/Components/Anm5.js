import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Animatable from 'react-native-animatable';

export default class Anm5 extends Component{

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Animatable.Text animation="zoomInUp" style={styles.zoomText}>Fly in Text!</Animatable.Text>
        </View>
        <View style={styles.row}>
          <Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate" style={styles.floatText}>Yo-yo floating</Animatable.Text>
        </View>
        <View style={styles.row}>
          <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.heartText}>❤️</Animatable.Text>
        </View>
      </View>
    )
  }
};



const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1
  },
  text: {
    fontSize: 25,
    color: '#333',
    alignItems: 'center'
  },
  heartText: {
    textAlign: 'center',
    fontSize: 60
  },
  floatText: {
    fontSize: 36
  },
  zoomText: {
    fontSize: 36
  },
  row: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  }
});
