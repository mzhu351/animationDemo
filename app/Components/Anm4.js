import React, {
  Component,
  Text,
  View,
  StyleSheet,
  Animated
} from 'react-native';

export default class Anm4 extends Component{
  componentWillMount() {
    this._animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.timing(this._animatedValue,{
      toValue: 100,
      duration: 3000
    }).start();
  }
  render(){
    var interpolatedColorAnimation = this._animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: ['rgba(255,255,255, 1)', 'rgba(51,156,177, 1)']
    });
    var interpolatedRotateAnimation = this._animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.title}>Animated Squares</Text>
        </View>
        <Animated.View
              style={[styles.box1, {backgroundColor: interpolatedColorAnimation}]}
          />
          <Animated.View
                style={[styles.box2, {transform: [
                  {rotate: interpolatedRotateAnimation}
                ]}]}
            />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    flex: 1,
    alignSelf: 'center',
    paddingTop: 100
  },
  title: {
    fontSize: 24,
    alignSelf: 'center'
  },
  box1: {
    position: 'absolute',
    top: 200,
    left: 150,
    width: 100,
    height: 100
  },
  box2: {
    position: 'absolute',
    top: 400,
    left: 150,
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
});
