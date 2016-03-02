import React, {
  Component,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
} from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import Slider from 'react-native-slider';

export default class Anm10 extends Component{
  constructor() {
    super();

    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
    this.openModal1 = this.openModal1.bind(this);
    this.openModal2 = this.openModal2.bind(this);
    this.openModal3 = this.openModal3.bind(this);
    this.openModal4 = this.openModal4.bind(this);
    this.openModal5 = this.openModal5.bind(this);
    this.closeModal5 = this.closeModal5.bind(this);
    this.toggleDisable = this.toggleDisable.bind(this);
    this.toggleSwipeToClose = this.toggleSwipeToClose.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onClosingState = this.onClosingState.bind(this);
  }

  openModal1(id) {
    this.refs.modal1.open();
  }
  openModal2(id) {
    this.refs.modal2.open();
  }
  openModal3(id) {
    this.refs.modal3.open();
  }
  openModal4(id) {
    this.refs.modal4.open();
  }
  openModal5(id) {
    this.setState({isOpen: true});
  }
  closeModal5(id) {
    this.setState({isOpen: false});
  }
  toggleDisable() {
    this.setState({isDisabled: !this.state.isDisabled});
  }
  toggleSwipeToClose() {
    this.setState({isDisabled: !this.state.isDisabled});
  }
  onClose() {
    console.log('Modal closed');
  }
  onOpen() {
    console.log('Modal opened');
  }
  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }



  render(){
    var BContent = <Button onPress={this.closeModal5} style={[styles.btn, styles.btnModal]}>X</Button>;
    return (
      <View style={styles.wrapper}>
        <Button onPress={this.openModal1} style={styles.btn}>Basic modal</Button>
        <Button onPress={this.openModal2} style={styles.btn}>Position top</Button>
        <Button onPress={this.openModal3} style={styles.btn}>Position centered + backdrop + disable</Button>
        <Button onPress={this.openModal4} style={styles.btn}>Position bottom + backdrop + slider</Button>
        <Button onPress={this.openModal5} style={styles.btn}>Backdrop + backdropContent</Button>

        <Modal style={[styles.modal, styles.modal1]} ref={"modal1"} swipeToClose={this.state.swipeToClose} onClosed={this.onClose} onOpened={this.onOpen} onClosingState={this.onClosingState}>
          <Text style={styles.text}>Basic modal</Text>
          <Button onPress={this.toggleSwipeToClose} style={styles.btn}>Disable swipeToClose({this.state.swipeToClose ? "true" : "false"})</Button>
        </Modal>

        <Modal style={[styles.modal, styles.modal2]} backdrop={false}  position={"top"} ref={"modal2"}>
          <Text style={[styles.text, {color: "white"}]}>Modal on top</Text>
        </Modal>

        <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
          <Text style={styles.text}>Modal centered</Text>
          <Button onPress={this.toggleDisable} style={styles.btn}>Disable ({this.state.isDisabled ? "true" : "false"})</Button>
        </Modal>

        <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal4"}>
          <Text style={styles.text}>Modal on bottom with backdrop</Text>
          <Slider style={{width: 200}} value={this.state.sliderValue} onValueChange={(value) => this.setState({sliderValue: value})} />
        </Modal>

        <Modal isOpen={this.state.isOpen} onClosed={this.closeModal5} style={[styles.modal, styles.modal4]} position={"center"} backdropContent={BContent}>
          <Text style={styles.text}>Modal with backdrop content</Text>
        </Modal>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 80,
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal2: {
    height: 230,
    backgroundColor: "#187d9c"
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
    height: 300
  },

  btn: {
    margin: 10,
    backgroundColor: "#1fa0c8",
    color: "white",
    padding: 20
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22
  }
});
