import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Home({ navigation }) {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress = {() => navigation.navigate('Question')} >
          <Image style={styles.imageContainer} source={require('./icon.png')}/>
        </TouchableHighlight>
      </View>
    );
}

class QuestionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        predict: 0,
        questions: [
            {
                id: 1,
                title: 'Who are you?'
            },
            {
                id: 2,
                title: 'Who are you2?'
            },
            {
                id: 3,
                title: 'Who are you3?'
            }
        ]
    }
}

  componentDidMount() {
    const rand = Math.floor(Math.random() * (3 - 1)) + 1;
    this.setState({predict: rand})
  }

  render() {
    const num = this.state.predict;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{ this.state.questions[num].title }</Text>
      </View>
    );
  }
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen name="Question" component={QuestionScreen} />
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
  }
});