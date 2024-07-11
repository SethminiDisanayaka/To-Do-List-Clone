import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Image style={styles.arrowLogo} source={require('../assets/images/tickIcon.png')} />
          <Text style={styles.nametext}>All Lists</Text>
          <Image style={styles.tinyLogo1} source={require('../assets/images/downArrow.png')} />
          <Image style={styles.tinyLogo2} source={require('../assets/images/search.png')} />
          <Image style={styles.tinyLogo3} source={require('../assets/images/dots.png')} />
        </View>
      </View>
      
      <View style={styles.inputContainer}>
        <Image style={styles.tinyLogo4} source={require('../assets/images/microphone.png')} />
        <TextInput
          placeholder="Enter quick task here"
          style={styles.input}
          value={task}
          onChangeText={text => setTask(text)}
        />
      </View>
      
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Image
          source={require('../assets/images/addBtn.png')}
          style={styles.addIcon}
        />
      </TouchableOpacity>
      
      <View style={styles.tasksContainer}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.taskItem}>
            <Text>{task}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4C98E',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#82C96D',
    padding: 10,
    borderRadius: 5,
  },
  nametext: {
    fontSize: 23,
    color: '#FFFFFF',
    fontFamily: 'monospace',
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: '#A4C98E',
    borderRadius: 5,
    padding: 5,
    marginTop: 600, 
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#A4C98E',
  },
  tasksContainer: {
    marginTop: 20,
  },
  taskItem: {
    padding: 15,
    backgroundColor: '#f9c2ff',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
  },
  tinyLogo1: {
    width: 25,
    height: 25,
  },
  arrowLogo: {
    width: 25,
    height: 25,
  },
  tinyLogo2: {
    width: 25,
    height: 25,
  },
  tinyLogo3: {
    width: 25,
    height: 25,
  },
  tinyLogo4: {
    width: 15,
    height: 15,
    marginLeft: 10,
  },
  addButton: {
    alignSelf: 'center',
    marginTop:-100,
    marginLeft:300,
    backgroundColor: '#82C96D',
    borderRadius: 5,
  },
  addIcon: {
    width: 50,
    height: 50,
  },
});
