import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

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
        <TextInput
          placeholder="Add Task"
          style={styles.input}
          value={task}
          onChangeText={text => setTask(text)}
        />
        {/* <Button title="ADD" onPress={addTask} /> */}
      </View>
      {/* <FlatList
        data={tasks}
        renderItem={itemData => (
          <TouchableOpacity onPress={() => deleteTask(itemData.item.key)}>
            <View style={styles.taskItem}>
              <Text>{itemData.item.value}</Text>
            </View>
          </TouchableOpacity>
        )}
      /> */}
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
    backgroundColor:'#82C96D'
  },
  nametext: {
    fontSize: 23,
    color: '#FFFFFF',
    fontFamily: 'monospace',
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 650,
  },
  input: {
    width: '70%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
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
});
