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
      duration: 2000
    }).start();
  }
  render(){
    var interpolatedColorAnimation = this._animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: ['rgba(255,255,255, 1)', 'rgba(51,156,177, 1)']
    });
    return (
      <View style={styles.container}>
<Text>fff</Text>
        <Animated.View
              style={[styles.box, {backgroundColor: interpolatedColorAnimation}]}
          />
        <Text>ffaaaaf</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    position: 'absolute',
    top: 100,
    left: 100,
    width: 200,
    height: 100
  }
});
