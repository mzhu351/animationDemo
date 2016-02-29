import React, {
  Component,
  StyleSheet,
  Text,
  View,
  LayoutAnimation,
  TouchableWithoutFeedback
} from 'react-native';

export default class Anm2 extends Component{
  constructor() {
    super();
    this.state = {
      viewStyle: {
        height: 250
      }
    }
  }

  animatedView() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      viewStyle: {
        height: this.state.viewStyle.height > 250 ? 250 : 450
      }
    })
  }

  render(){
    let viewStyle = [styles.view, this.state.viewStyle]
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.animatedView.bind(this)}>
          <View style={viewStyle}>
            <Text style={styles.viewText}>Click me</Text>
          </View>
        </TouchableWithoutFeedback>

      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    color: '#809e2d',
    alignSelf: 'center'
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#809e2d',
    margin: 20
  },
  viewText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
  }
});
