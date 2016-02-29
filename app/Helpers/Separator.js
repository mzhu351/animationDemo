var React = require('react-native');

var {
  View,
  Component,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E4E4E4',
    flex: 1
  }
});

export default class Separator extends Component{
  render() {
    return (
      <View style={styles.separator} />
    )
  }
};
