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

export default class Anm7 extends Component{
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
          {/*flipInX*/}
          <TouchableWithoutFeedback  onPress={() => this.setState({toggledOn: !this.state.toggledOn})}>
            <Animatable.View animation="bounceIn" style={[{ backgroundColor: COLORS[0] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>bounceIn</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>

          {/*flipInY*/}
          <TouchableWithoutFeedback  onPress={() => this.setState({toggledOn: !this.state.toggledOn})}>
            <Animatable.View animation="bounceInDown" style={[{ backgroundColor: COLORS[1] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>bounceInDown</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>

          {/*flipOutX*/}
          <TouchableWithoutFeedback  onPress={() => this.setState({toggledOn: !this.state.toggledOn})}>
            <Animatable.View animation="bounceInUp" style={[{ backgroundColor: COLORS[2] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>bounceInUp</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>

          {/*Tada*/}
          <TouchableWithoutFeedback  onPress={() => this.setState({toggledOn: !this.state.toggledOn})}>
            <Animatable.View animation="bounceInRight" style={[{ backgroundColor: COLORS[5] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>bounceInRight</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>

          {/*Wobble*/}
          <TouchableWithoutFeedback  onPress={() => this.setState({toggledOn: !this.state.toggledOn})}>
            <Animatable.View animation="bounceInLeft" style={[{ backgroundColor: COLORS[6] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>bounceInLeft</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>

      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    paddingRight: 30,
    paddingLeft: 30,
    flex: 1
  },
  text: {
    fontSize: 25,
    color: '#333',
    alignSelf: 'center'
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
