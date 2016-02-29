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

  getRowTitle(item) {
    item = (item === 'flip_card' || item === 'layout_animation') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }
  getComponentName(item) {
    return getRowTitle(item).quote();
  }
  goToPage(item) {
    this.props.navigator.push({
      component: getComponentName(item),
      title: getRowTitle(item)
    });
  }

  render() {
    var topicArry = ['flip_card', 'layout_animation', 'anim3', 'anim4', 'anim5', 'anim6', 'anim7', 'anim8', 'anim9', 'anim10', 'anim12'];
    var list = topicArry.map((item, index) => {
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
              <TouchableHighlight
                style={this.makeBackground()}
                onPress={this.goToAnm5}
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
