import Anm1 from './Components/Anm1';
import Anm2 from './Components/Anm2';
import Anm3 from './Components/Anm3';
import Anm4 from './Components/Anm4';
import Anm5 from './Components/Anm5';
import Anm6 from './Components/Anm6';
import Anm7 from './Components/Anm7';
import Anm8 from './Components/Anm8';
import Anm9 from './Components/Anm9';
import Anm10 from './Components/Anm10';
import Anm11 from './Components/Anm11';
import Anm12 from './Components/Anm12';

import React, {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Component,
  TouchableHighlight
} from 'react-native';

import _ from 'lodash';

export default class Main extends Component{

  constructor(props) {
    super(props);
  }
  makeBackground() {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent:'center',
      flex: 1,
      borderWidth: 1,
      borderColor: '#ddd',
      backgroundColor: '#eee',
      paddingTop: 20,
      paddingBottom: 20,
    }
    return obj;
  }

  getRowTitle(item) {
    item = (item === 'flip_card' || item === 'layout_animation') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }

  goPage(item) {
    switch(item) {
      case 'flip_card': var component = Anm1;
        break;
      case 'layout_animation': var component = Anm2;
        break;
      case 'move': var component = Anm3;
        break;
      case 'basic': var component = Anm4;
        break;
      case 'animation_trigger': var component = Anm5;
        break;
      case 'attention_seeker': var component = Anm6;
        break;
      case 'bouncing': var component = Anm7;
        break;
      case 'infinite_swipe': var component = Anm8;
        break;
      case 'circular_progress': var component = Anm9;
        break;
      case 'modal': var component = Anm10;
        break;
      case 'draggable': var component = Anm11;
        break;
      case 'flipper2': var component = Anm12;
        break;

    }
    this.props.navigator.push({
      component: component,
      title: item
    });
  }

  render() {
    var topicArry = ['flip_card', 'layout_animation', 'move', 'basic',
                  'animation_trigger', 'attention_seeker', 'bouncing', 'infinite_swipe',
                  'circular_progress', 'modal', 'draggable', 'flipper2'];

    var list = topicArry.map((item, index) => {
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
              <TouchableHighlight
                style={this.makeBackground()}
                onPress={() => this.goPage(item)}
                underlayColor='#88D4F5'>
                <Text style={styles.buttonText}>
                  {this.getRowTitle(item)}
                </Text>
              </TouchableHighlight>
          </View>
        </View>
      )
    });
    return (
      <ScrollView style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.pageTitle}>
            Animation Demo
          </Text>
        </View>
        {list}
      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
    alignSelf: 'center'
  },
  banner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1fa0c8',
    paddingTop: 60,
    paddingBottom: 60
  },
  pageTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white'
  },
  rowContainer: {
    padding: 0
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  }
});
