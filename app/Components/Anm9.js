import React, {
  Component,
  Text,
  View,
  StyleSheet,
  Animated
  } from 'react-native';
import Button from 'react-native-button';

export default class Anm9 extends Component{
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      fadeAnim: new Animated.Value(0),
    };
    this.toggleAnm = this.toggleAnm.bind(this);
  }
  toggleAnm() {
    console.log('called');
    Animated.timing(
      this.state.fadeAnim,
      {toValue: 1 , duration: 1500},
    ).start();
    this.setState((state) => (
      {show: !state.show}
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => {this.toggleAnm();}}
                style={styles.btn}>
          Press {this.state.show ?
                  'Show' : 'Hide'}
        </Button>

        <Animated.View style={[styles.box,{opacity: this.state.fadeAnim}]}>
          <Text>Fadding {this.state.show ?
                  'Out' : 'In'} </Text>
        </Animated.View>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  btn: {
    margin: 10,
    backgroundColor: "#1fa0c8",
    color: "white",
    padding: 20
  },
  box: {
    backgroundColor: 'deepskyblue',
    borderWidth: 1,
    borderColor: 'dodgerblue',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  }

});
