import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Home({ navigation }) {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress = {() => navigation.navigate('Details')} >
          <Image style={styles.imageContainer} source={require('./icon.png')}/>
        </TouchableHighlight>
      </View>
    );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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