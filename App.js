import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GolItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setGoals(currentGoals => [
      ...currentGoals, 
      {id: Math.random().toString(), value: goalTitle}
      ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalkey => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalkey)
    });
  };

  const cancelGoalAddHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput onCancel={cancelGoalAddHandler} visible={isAddMode} onAddGoal={addGoalHandler}/>
      <FlatList
      keyExtractor = {(item, index) => item.id}
      data={goals} 
      renderItem={itemData => (
        <GolItem id = {itemData.item.id} onDelete={removeGoalHandler} title = {itemData.item.value}/>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
