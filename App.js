import React, { Component } from 'react';
import { Button, StyleSheet, View, Image } from 'react-native';

export default class App extends Component {
  _onPressButton() {
    console.log("Pushed button Start the Game!")
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imageContainer} source={require('./icon.png')}/>
        {/* <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton.bind(this)}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View> */}
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