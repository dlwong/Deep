import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';

export default class App extends Component {
  _onPressButton() {
    console.log("Pushed button Start the Game!")
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress = {this._onPressButton} >
        <Image style={styles.imageContainer} source={require('./icon.png')}/>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: { display: 'flex',
    alignItems: 'center',
    marginLeft: 30,
    justifyContent: 'center',
    height: 350,
    width: 
    350, },
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});