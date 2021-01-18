import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress = {() => navigation.navigate('Question')} >
          <Image style={styles.imageContainer} source={require('../assets/icon.png')}/>
        </TouchableOpacity>
      </View>
    );
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
  }
});