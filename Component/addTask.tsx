import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function index() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const navigation = useNavigation();

  const addTask = () => {
    if (task.length > 0) {
     
      
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Image style={styles.arrowLogo} source={require('../assets/images/backArrrow.png')} />
          <Text style={styles.nametext}>New Task</Text>
        </View>
      </View>
      
      <Text style={styles.text1}>What is to be done?</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter task here"
          style={styles.input}
          value={task}
          onChangeText={text => setTask(text)}
        />
         <Image style={styles.tinyLogo4} source={require('../assets/images/microphone.png')} />
      </View>
      
      <Text style={styles.text2}>Due Date</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Date not set"
          style={styles.input}
          value={task}
          onChangeText={text => setTask(text)}
        />
         <TouchableOpacity style={styles.dateButton} onPress={addTask}>
        <Image
          source={require('../assets/images/calender.png')}
          style={styles.dateIcon}
        />
      </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Image
          source={require('../assets/images/Tick.png')}
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
    paddingTop:50
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
    marginHorizontal: 130,
    
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: '#A4C98E',
    borderRadius: 5,
    padding: 5,
    marginTop: 10, 
    width:350,
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
  arrowLogo: {
    width: 25,
    height: 25,
  },
  tinyLogo4: {
    width: 20,
    height: 20,
    marginLeft: 30,
  },
  addButton: {
    alignSelf: 'center',
    marginTop:350,
    marginLeft:300,
    backgroundColor: '#82C96D',
    borderRadius: 5,
  },
  addIcon: {
    width: 50,
    height: 50,
  },
  mainIcon:{
   marginTop:-450,
  marginLeft:150
  },
  text1:{
    fontSize: 15,
    color: 'black',
    fontFamily: 'monospace',
    marginTop: 10,
    marginLeft:10
  },
  text2:{
    fontSize: 15,
    color: 'black',
    fontFamily: 'monospace',
    marginTop: 80,
    marginLeft:10
  },
  dateIcon:{
    width: 20,
    height: 20,
  }
  
});
