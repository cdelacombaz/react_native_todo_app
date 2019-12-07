import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import ListItem from './components/ListItem';

const App = () => {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addGoalHandler = newGoal => {
    setGoals(currentGoals => [...currentGoals, { uid: Math.random().toString(), value: newGoal }]);
    setShowModal(!showModal);
  };

  const deleteGoalHandler = goalId => {
    setGoals(currentGoals => currentGoals.filter(item => item.uid !== goalId));
  };

  const toggleShowModalHandler = () => {
    setShowModal(!showModal)
  };

  return (
    <View style={styles.screen} >
      <Button title='ADD NEW GOAL' onPress={toggleShowModalHandler} />
      <GoalInput addGoalHandler={addGoalHandler} visible={showModal} hideModal={toggleShowModalHandler} />
      <FlatList
        keyExtractor={item => item.uid}
        data={goals}
        renderItem={itemData => {
          return (
            <ListItem
              title={itemData.item.value}
              uid={itemData.item.uid}
              deleteGoalHandler={deleteGoalHandler}
            />
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { padding: 50, width: '100%' }
});

export default App;
