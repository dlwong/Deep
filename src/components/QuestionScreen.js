import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import questionsList from '../data/questionsList.js';

export default function QuestionScreen() {
  const max = questionsList.length;
  const min = 0;

  function rand() {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const [count, setCount] = useState( rand() );

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, marginLeft: 10}}>{ questionsList[count] }</Text>
        <View style={styles.buttonContainer}>
          <Button
          title="Another Question"
          onPress={ () => setCount(rand()) }
          color="#a55fc1"
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
  },
  buttonContainer: {
    margin: 50,
    top: 150
  }
});