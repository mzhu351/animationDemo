import Anm1 from './Components/Anm1';
import Anm2 from './Components/Anm2';
import Anm3 from './Components/Anm3';
import Anm4 from './Components/Anm4';
import Anm5 from './Components/Anm5';

import React, {
  Text,
  View,
  StyleSheet,
  Component,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65
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
    this.goToAnm4 = this.goToAnm4.bind(this);
    this.goToAnm5 = this.goToAnm5.bind(this);
  }
  makeBackground(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent:'center',
      flex: 1,
      borderWidth: 1,
      borderColor: '#ddd'
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
      title: 'Flip Card'
    });
  }
  goToAnm2(){
    this.props.navigator.push({
      component: Anm2,
      title: 'LayoutAnimation'
    });
  }
  goToAnm3(){
    this.props.navigator.push({
      component: Anm3,
      title: 'Anm3'
    });
  }
  goToAnm4(){
    this.props.navigator.push({
      component: Anm4,
      title: 'Anm4'
    });
  }
  goToAnm5(){
    this.props.navigator.push({
      component: Anm5,
      title: 'Anm5'
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToAnm1}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}>Flip Card </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToAnm2}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}>Layout Animation </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToAnm3}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> other </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToAnm4}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}>other2 </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToAnm4}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> other3 </Text>
        </TouchableHighlight>
      </View>
    )
  }
};
