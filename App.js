import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]); 

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
        placeholder="GOAL"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}/>
        <Button title = "ADD" onPress={addGoalHandler}/>
      </View>

      <View>
        {goals.map((goal) => <Text>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
     alignItems: "center"
  },
  input: {
    borderColor:"black",
  borderWidth: 1,
  padding: 10,
  width: '80%'},
});
