import React, { useState } from 'react';

import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';


const GoalInput = props => {
  const [newGoalInput, setNewGoalInput] = useState('');

  const addGoalHandler = () => {
    props.addGoalHandler(newGoalInput);
    setNewGoalInput('');
  };

  const cancelHandler = () => {
    props.hideModal();
    setNewGoalInput('');
  };

  return (
    <Modal visible={props.visible} animationType='slide' >
      <View style={styles.inputContainer} >
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={setNewGoalInput}
          value={newGoalInput}
        />
        <View style={styles.buttonsContainer} >
          <View style={styles.button} ><Button title='CANCEL' color='red' onPress={cancelHandler} /></View>
          <View style={styles.button} ><Button title='ADD' onPress={addGoalHandler} /></View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  button: {
    width: '25%'
  }
});

export default GoalInput;
