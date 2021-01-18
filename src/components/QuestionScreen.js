import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class QuestionScreen extends Component {
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
    this.setState({ predict: rand })
  }

  render() {
    const num = this.state.predict;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{ this.state.questions[num].title }</Text>
        <Button
        title="Another Question"
        onPress={() => this.props.navigation.push('Question')}
      />
      </View>
    );
  }
}