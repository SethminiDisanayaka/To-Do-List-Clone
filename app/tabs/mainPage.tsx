import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function index() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const addTask = () => {
    if (task.length > 0) {

    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Image style={styles.arrowLogo} source={require('@/assets/images/tickIcon.png')} />
          <Text style={styles.nametext}>All Lists</Text>
          <Image style={styles.tinyLogo1} source={require('@/assets/images/downArrow.png')} />
          <Image style={styles.tinyLogo2} source={require('@/assets/images/search.png')} />
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image style={styles.tinyLogo3} source={require('@/assets/images/dots.png')} />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.inputContainer}>
        <Image style={styles.tinyLogo4} source={require('@/assets/images/microphone.png')} />
        <TextInput
          placeholder="Enter quick task here"
          style={styles.input}
          value={task}
          onChangeText={text => setTask(text)}
        />
      </View>
      
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('addTask')}>
        <Image source={require('@/assets/images/addBtn.png')} style={styles.addIcon} />
      </TouchableOpacity>
      
      <View style={styles.tasksContainer}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.taskItem}>
            <Text>{task}</Text>
          </View>
        ))}
      </View>
      
      <Image source={require('@/assets/images/beach.png')} style={styles.mainIcon} />
      <Text style={styles.nametext2}> Nothing to do anything</Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable style={styles.modalItem} onPress={() => navigation.navigate('taskList')}>
              <Text style={styles.modalText}>Task Lists</Text>
            </Pressable>
            <Pressable style={styles.modalItem} onPress={() => navigation.navigate('AddInBatchMode')}>
              <Text style={styles.modalText}>Add in Batch Mode</Text>
            </Pressable>
            <Pressable style={styles.modalItem} onPress={() => { /* handle Remove Ads */ }}>
              <Text style={styles.modalText}>Remove Ads</Text>
            </Pressable>
            <Pressable style={styles.modalItem} onPress={() => { /* handle More Apps */ }}>
              <Text style={styles.modalText}>More Apps</Text>
            </Pressable>
            <Pressable style={styles.modalItem} onPress={() => { /* handle Send feedback */ }}>
              <Text style={styles.modalText}>Send feedback</Text>
            </Pressable>
            <Pressable style={styles.modalItem} onPress={() => { /* handle Follow us */ }}>
              <Text style={styles.modalText}>Follow us</Text>
            </Pressable>
            <Pressable style={styles.modalItem} onPress={() => { /* handle Invite friends */ }}>
              <Text style={styles.modalText}>Invite friends to the app</Text>
            </Pressable>
            <Pressable style={styles.modalItem} onPress={() => navigation.navigate('settings')}>
              <Text style={styles.modalText}>Settings</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    marginTop: 650, 
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
  mainIcon:{
   marginTop:-450,
  marginLeft:150
  },
  nametext2:{
    fontSize: 15,
    color: 'black',
    fontFamily: 'monospace',
   marginLeft:70
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalItem: {
    padding: 10,
  },
  modalText: {
    fontSize: 16,
    color: 'black',
  },
});
