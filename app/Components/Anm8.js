import React, {
  Component,
  Text,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  text: {
    fontSize: 25,
    color: '#333',
    alignSelf: 'center'
  }
});

export default class Anm8 extends Component{

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Anm8
        </Text>
      </View>
    )
  }
};
