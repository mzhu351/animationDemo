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

var ANIMATION_TYPES = {
  'Attention Seekers': [
    'bounce',
    'flash',
    'jello',
    'pulse',
    'rubberBand',
    'shake',
    'swing',
    'tada',
    'wobble',
  ]
};

export default class Anm6 extends Component{

  constructor() {
    super();

  }

  render(){
  //  var { duration, toggledOn } = this.state;
    return (
      <View style={styles.container}>
          {/*Shake*/}
          <TouchableWithoutFeedback onPress={() => this.refs.view1.shake(800)}>
            <Animatable.View ref="view1" style={[{ backgroundColor: COLORS[0] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>Shake</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>
          {/*Flash*/}
          <TouchableWithoutFeedback  onPress={() => this.refs.view2.flash(800)}>
            <Animatable.View ref="view2" style={[{ backgroundColor: COLORS[1] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>Flash</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>

          {/*Bounce*/}
          <TouchableWithoutFeedback  onPress={() => this.refs.view3.bounce(800)}>
            <Animatable.View ref="view3" style={[{ backgroundColor: COLORS[2] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>Bounce</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>

          {/*Jello*/}
          <TouchableWithoutFeedback  onPress={() => this.refs.view4.jello(800)}>
            <Animatable.View ref="view4" style={[{ backgroundColor: COLORS[3] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>Jello</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>

          {/*Pulse*/}
          <TouchableWithoutFeedback  onPress={() => this.refs.view5.pulse(800)}>
            <Animatable.View ref="view5" style={[{ backgroundColor: COLORS[4] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>Pulse</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>

          {/*Tada*/}
          <TouchableWithoutFeedback  onPress={() => this.refs.view6.tada(800)}>
            <Animatable.View ref="view6" style={[{ backgroundColor: COLORS[5] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>Tada</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>

          {/*Wobble*/}
          <TouchableWithoutFeedback onPress={() => this.refs.view7.wobble(800)}>
            <Animatable.View ref="view7" style={[{ backgroundColor: COLORS[6] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>Wobble</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>

          {/*Swing*/}
          <TouchableWithoutFeedback onPress={() => this.refs.view8.swing(800)}>
            <Animatable.View ref="view8" style={[{ backgroundColor: COLORS[7] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>Swing</Animatable.Text>
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
