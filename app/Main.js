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

import React, {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Component,
  TouchableHighlight
} from 'react-native';

export default class Main extends Component{

  constructor(props) {
    super(props);

    this.goToAnm1 = this.goToAnm1.bind(this);
    this.goToAnm2 = this.goToAnm2.bind(this);
    this.goToAnm3 = this.goToAnm3.bind(this);
    this.goToAnm4 = this.goToAnm4.bind(this);
    this.goToAnm5 = this.goToAnm5.bind(this);
    this.goToAnm6 = this.goToAnm6.bind(this);
    this.goToAnm7 = this.goToAnm7.bind(this);
    this.goToAnm8 = this.goToAnm8.bind(this);
    this.goToAnm9 = this.goToAnm9.bind(this);
    this.goToAnm10 = this.goToAnm10.bind(this);
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
  goToAnm6(){
    this.props.navigator.push({
      component: Anm6,
      title: 'Anm6'
    });
  }
  goToAnm7(){
    this.props.navigator.push({
      component: Anm7,
      title: 'Anm7'
    });
  }
  goToAnm8(){
    this.props.navigator.push({
      component: Anm8,
      title: 'Anm8'
    });
  }
  goToAnm9(){
    this.props.navigator.push({
      component: Anm9,
      title: 'Anm9'
    });
  }
  goToAnm10(){
    this.props.navigator.push({
      component: Anm10,
      title: 'Anm10'
    });
  }

  getRowTitle(item) {
    item = (item === 'flip_card' || item === 'layout_animation') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }

  goToPage(item) {
    this.props.navigator.push({
      component: getRowTitle(item).quote(),
      title: getRowTitle(item)
    });
  }

  render() {
    var topicArry = ['flip_card', 'layout_animation', 'anm3', 'anm4', 'anm5', 'anm6', 'anm7', 'anm8', 'anm9', 'anm10'];
    var list = topicArry.map((item, index) => {
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
              <TouchableHighlight
                style={this.makeBackground()}
                onPress={this.goToAnm3}
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
