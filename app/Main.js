import Anm1 from './Components/Anm1';
import Anm2 from './Components/Anm2';
import Anm3 from './Components/Anm3';
import Anm4 from './Components/Anm4';
import Anm5 from './Components/Anm5';
import Separator from './Helpers/Separator';

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
  }
  makeBackground() {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent:'center',
      flex: 1,
      borderWidth: 1,
      borderColor: '#ddd',
      backgroundColor: '#eee'
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

  getRowTitle(item) {
    item = (item === 'flip_card' || item === 'layout_animation') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }

  render() {
    var topicArry = ['flip_card', 'layout_animation', 'anim3', 'anim4', 'anim5'];
    var list = topicArry.map((item, index) => {
      return (
        <View key={index}>
          <View style={styles.container}>

              <TouchableHighlight
                style={this.makeBackground()}
                onPress={this.goToAnm1}
                underlayColor='#88D4F5'>
                <Text style={styles.rowTitle}>
                  {this.getRowTitle(item)}
                </Text>
              </TouchableHighlight>
          </View>
          <Separator />
        </View>
      )
    });
    return (
      <ScrollView style={styles.container}>
        {list}
      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  }
});
