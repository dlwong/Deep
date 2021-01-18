import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class QuestionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      predict: 0,
        questions: [
          {
            title: 'What would you miss the most if we stopped being friends?'
          },
          {
            title: 'What annoys you about me, but you are over it?'
          },
          {
            title: 'If my mom asked me about you, what would I say?'
          },
          {
            title: 'Could we stay friends if I shared that I was interested in your ex?'
          }
        ]
    }
}

  componentDidMount() {
    const rand = Math.floor(Math.random() * (3 - 1)) + 1;
    this.setState({ predict: rand })
  }

  render() {
    const num = this.state.predict;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{ this.state.questions[num].title }</Text>
          <View style={styles.buttonContainer}>
            <Button
            title="Another Question"
            onPress={() => this.props.navigation.push('Question')}
            color="#a55fc1"
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  }
});