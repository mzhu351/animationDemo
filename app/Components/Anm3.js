import React, {
  Component,
  Text,
  View,
  StyleSheet,
  Easing,
  Animated
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    backgroundColor: '#1fa0c8',
    position: 'absolute',
    top: 100,
    left: 100,
    width: 100,
    height: 100
  }
});

export default class Anm3 extends Component{
  componentWillMount() {
    this._animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    const animationConfig = {
      duration: 600, // milliseconds
      delay: 500, // milliseconds
      easing: Easing.inOut(Easing.ease),
    }
    const value = this._animatedValue;
    const dropAnimation = Animated.timing(value, {
      ...animationConfig,
      toValue: 400
    }).start();
  }

  render(){
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, {transform: [
            {translateY: this._animatedValue}
          ]}]} />
      </View>
    )
  }
};
