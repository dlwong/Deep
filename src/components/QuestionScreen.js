import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import questionsList from '../questionsList.js';

export default class QuestionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      predict: 0,
        questions: questionsList
    }
}

  componentDidMount() {
    const max = this.state.questions.length;
    const min = 0;
    const rand = Math.floor(Math.random() * (max - min)) + min;

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