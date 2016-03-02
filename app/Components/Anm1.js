import React, {
  Component,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import FlipCard from 'react-native-flip-card'

export default class Anm1 extends Component{
  constructor (props) {
    super (props);
    this.state = {
      flip: false
    }
  }
  render(){
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Flip Card Example
        </Text>

        <View style={styles.stage}>

          <Text style={styles.name}>Vertical</Text>
          <FlipCard style={styles.card}>
            {/* Face Side */}
            <View style={styles.face}>
              <Text style={styles.faceText}>Head</Text>
            </View>
            {/* Back Side */}
            <View style={styles.back}>
              <Text style={styles.backText}>Tail</Text>
            </View>
          </FlipCard>

          <Text style={styles.name}>Horizonatal</Text>
          <FlipCard
            flip={this.state.flip}
            friction={6}
            flipHorizontal={true}
            flipVertical={false}
            style={styles.card}
            onFlipped={(isFlipped)=>{console.log('isFlipped', isFlipped)}}
          >
            {/* Face Side */}
            <View style={styles.face2}>
              <Text style={styles.faceText}>Head</Text>
            </View>
            {/* Back Side */}
            <View style={styles.back2}>
              <Text style={styles.backText}>Tail</Text>
            </View>

          </FlipCard>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.setState({flip: !this.state.flip})}}
            >
            <Text style={styles.buttonText}>Flip me! </Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 100,
  },
  title: {
    fontSize: 30,
    color: "#585348",
    marginBottom: 30,
  },
  name: {
    fontSize: 18,
    color: "#585348",
    alignItems: 'center',
  },
  card: {
    width:300,
    height:100,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#c0bdb2',
  },
  face: {
    flex:1,
    backgroundColor: '#1fa0c8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    flex:1,
    backgroundColor: '#D4F0FB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  face2: {
    flex:1,
    backgroundColor: '#DC761A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back2: {
    flex:1,
    backgroundColor: '#ffe5d2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  backText: {
    color: '#585348',
    fontSize: 36,
    fontWeight: 'bold',
  },
  button: {
    width: 150,
    height: 60,
    marginTop: 30,
    paddingTop: 18,
    paddingBottom: 6,
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: '#007AFF',
    borderColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    alignItems: 'center',
  }
});
