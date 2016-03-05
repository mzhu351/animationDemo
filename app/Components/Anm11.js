import React, {
  Component,
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated,
  Easing,
  Dimensions
} from 'react-native';

export default class Anm11 extends Component{

  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropZoneValues: null,
      pan: new Animated.ValueXY()
    };
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) => {
        if(this.isDropZone(gesture)){
          this.setState({
            showDraggable: false
          })
        } else {
          Animated.spring(
            this.state.pan,
            {toValue: { x:0, y:0 }}
          ).start();
        }
      }
    });
  }

  isDropZone(gesture) {
    var dz = this.state.dropZoneValues;
    var result = false;
    if (gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height) {
      if(gesture.moveX > dz.x && gesture.moveX < dz.x + dz.width) {
        result = true;
      }
    }
    return result;
  }

  setDropZoneValues(event) {
    this.setState({
        dropZoneValues: event.nativeEvent.layout
    });
  }

  render(){

    return (
      <View style={styles.mainContainer}>
          <View
            onLayout={this.setDropZoneValues.bind(this)}
            style={styles.dropZone}>
              <Text style={styles.text}>Drop me here!</Text>
          </View>

          {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {
    return (
      <View style={styles.draggableContainer}>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[this.state.pan.getLayout(), styles.circle]}>
          <Text style={styles.text}>Drag me</Text>
        </Animated.View>
      </View>
    );
  }
};

let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
        flex    : 1
    },
    dropZone    : {
        height      : 120,
        width: 200,
        marginTop: 65,
        backgroundColor:'#187d9c',
    },
    text        : {
        marginTop   : 25,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    },
    draggableContainer: {
        position    : 'absolute',
        top         : Window.height/2 - CIRCLE_RADIUS,
        left        : Window.width/2 - CIRCLE_RADIUS,
    },
    circle      : {
        backgroundColor     : '#dc761c',
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
        borderRadius        : CIRCLE_RADIUS
    }
});
