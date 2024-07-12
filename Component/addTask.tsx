import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

export default function Index() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

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
        <TouchableOpacity onPress={addTask}>
          <Image
            source={require('../assets/images/calender.png')}
            style={styles.dateIcon}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Add to List</Text>
      <View style={styles.comboBoxContainer}>
        <RNPickerSelect
          onValueChange={(value: string | null) => setSelectedValue(value)}
          items={[
            { label: 'Item 1', value: 'item1' },
            { label: 'Item 2', value: 'item2' },
            { label: 'Item 3', value: 'item3' },
          ]}
          style={{
            placeholder: {
              color: 'black',
              fontSize: 16,
              fontFamily: 'monospace',
            }
          }}
          placeholder={{ label: 'Select an item', value: null }}
        />
        
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
    paddingTop: 50,
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
    width: 350,
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
    marginTop: 300,
    backgroundColor: '#82C96D',
    borderRadius: 25,
    padding: 10,
    marginLeft:250
  },
  addIcon: {
    width: 30,
    height: 30,
  },
  text1: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'monospace',
    marginTop: 10,
    marginLeft: 10,
  },
  text2: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'monospace',
    marginTop: 20,
    marginLeft: 10,
  },
  dateIcon: {
    width: 20,
    height: 20,
  },
  label: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'monospace',
    marginTop: 60,
    marginLeft: 10,
  },
  comboBoxContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    fontFamily:'monospace',
  backgroundColor:'#82C96D'
  },
  selectedText: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'monospace',
    marginTop: 10,
    marginLeft: 10,
  },
});

