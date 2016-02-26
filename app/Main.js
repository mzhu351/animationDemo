import Anm1 from './Anm1';
import Anm2 from './Anm2';
import Anm3 from './Anm3';

import React, {
  Text,
  View,
  StyleSheet,
  Component,
  TouchableHighlight
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
    alignSelf: 'center'
  }
});

export default class Main extends Component{

  constructor(props) {
    super(props);

    this.goToAnm1 = this.goToAnm1.bind(this);
    this.goToAnm2 = this.goToAnm2.bind(this);
    this.goToAnm3 = this.goToAnm3.bind(this);
  }
  makeBackground(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent:'center',
      flex: 1
    }

    if(btn === 0){
      obj.backgroundColor = '#eee';
    } else if (btn === 1){
      obj.backgroundColor = '#eee'
    } else {
      obj.backgroundColor = '#eee';
    }

    return obj;
  }
  goToAnm1(){
    this.props.navigator.push({
      component: Anm1,
      title: 'Anm1'
    });
  }
  goToAnm2(){
    this.props.navigator.push({
      component: Anm2,
      title: 'Anm2'
    });
  }
  goToAnm3(){
    this.props.navigator.push({
      component: Anm3,
      title: 'Anm3'
    });
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToAnm1}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}>Card flip </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToAnm2}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}>Jitter </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToAnm3}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> other </Text>
        </TouchableHighlight>
      </View>
    )
  }
};
