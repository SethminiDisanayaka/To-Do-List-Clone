import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Task Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4C98E',
    paddingTop: 20,
    paddingHorizontal: 10,

  },
  text: {
    fontSize: 20,
  },
});

export default TaskScreen;
