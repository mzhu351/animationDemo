import React, {
  Component,
  Text,
  View,
  StyleSheet
  } from 'react-native';
import Progress from "react-native-progress";

export default class Anm9 extends Component{
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      indeterminate: true
    }
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    this.animate();
  }

  componentWillUnmount() {
    this.stopAnm();
  }

  animate() {
    var progress = 0;
    this.setState({ progress });

    setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress += Math.random()/5;
        if(progress > 1) {
          progress = 1;
        }
        this.setState({ progress });
      }, 500);
    }, 1500);
  }

  stopAnm() {
    clearTimeout(()=> {
      this.setState({ indeterminate: false });
      setInterval && clearInterval(() => {
        progress = 0;
        this.setState({ progress });
      });
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Progress Example</Text>

        <Progress.Bar
          style={styles.progress}
          width={300}
          progress={this.state.progress}
          indeterminate={this.state.indeterminate}
        />
        <View style={styles.circles}>
          <Progress.Pie
            style={styles.progress}
            progress={this.state.progress}
            size={120}
            indeterminate={this.state.indeterminate}
          />
          <Progress.Circle
            style={styles.progress}
            size={120}
            borderWidth={2}
            progress={this.state.progress}
            indeterminate={this.state.indeterminate}
            direction="counter-clockwise"
          />
        </View>
        <View style={styles.circles}>
          <Progress.CircleSnail
            style={styles.progress}
            size={100}
          />
        <Progress.CircleSnail
            style={styles.progress}
            size={100}
            color={[
              '#F44336',
              '#2196F3',
              '#009688',
            ]}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  circles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progress: {
    margin: 10,
  },
});
