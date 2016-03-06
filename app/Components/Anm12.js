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

export default class Anm12 extends Component{
  constructor() {
    super();
  }

  render(){

    return (
      <View style={styles.container}>
          {/*flipInX*/}
          <TouchableWithoutFeedback onPress={() => this.refs.view1.flipInX(800)}>
            <Animatable.View ref="view1" style={[{ backgroundColor: COLORS[0] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>FlipInX</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>

          {/*flipInY*/}
          <TouchableWithoutFeedback onPress={() => this.refs.view2.flipInY(800)}>
            <Animatable.View ref="view2" style={[{ backgroundColor: COLORS[1] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>FlipInY</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>

          {/*flipOutX*/}
          <TouchableWithoutFeedback  onPress={() => this.refs.view3.flipOutX(800)}>
            <Animatable.View ref="view3" style={[{ backgroundColor: COLORS[2] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>FlipOutX</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>

          {/*flipOutY*/}
          <TouchableWithoutFeedback  onPress={() => this.refs.view4.flipOutY(800)}>
            <Animatable.View ref="view4" style={[{ backgroundColor: COLORS[3] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>flipOutY</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>

          {/*lightSpeedIn*/}
          <TouchableWithoutFeedback  onPress={() => this.refs.view5.lightSpeedIn(800)}>
            <Animatable.View ref="view5" style={[{ backgroundColor: COLORS[4] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>lightSpeedIn</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>

          {/*slideInDown*/}
          <TouchableWithoutFeedback  onPress={() => this.refs.view6.slideInDown(800)}>
            <Animatable.View ref="view6" style={[{ backgroundColor: COLORS[5] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>slideInDown</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>

          {/*ZoomIn*/}
          <TouchableWithoutFeedback onPress={() => this.refs.view7.zoomIn(800)}>
            <Animatable.View ref="view7" style={[{ backgroundColor: COLORS[6] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>Zoom In</Animatable.Text>
            </Animatable.View>
          </TouchableWithoutFeedback>

          {/*zoomOut*/}
          <TouchableWithoutFeedback onPress={() => this.refs.view8.zoomOut(800)}>
            <Animatable.View ref="view8" style={[{ backgroundColor: COLORS[7] }, styles.animatable]}>
              <Animatable.Text style={styles.animatableName}>Zoom Out</Animatable.Text>
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
