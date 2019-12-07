import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const ListItem = props => {
  return (
    <TouchableOpacity onPress={() => props.deleteGoalHandler(props.uid)} >
      <Text style={styles.listItem}>{props.title}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'lightblue',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default ListItem;
