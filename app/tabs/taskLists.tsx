import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TaskList() {
  const navigation = useNavigation();
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const addTask = () => {
    if (task.length > 0) {
    
    }
  };

  const navigateToMainPage = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'mainPage' }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <TouchableOpacity onPress={navigateToMainPage}>
            <Image
              source={require('@/assets/images/backArrrow.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <Text style={styles.nametext}>Task Lists</Text>
          <Image style={styles.arrowLogo} source={require('@/assets/images/list.png')} />
        </View>
      </View>

      {['Default', 'Personal', 'Shopping', 'Work'].map((listName) => (
        <View key={listName} style={styles.row1}>
          <Text style={styles.default}>{listName}</Text>
          <TouchableOpacity onPress={addTask}>
            <Image
              source={require('@/assets/images/pencil.png')}
              style={styles.pencilIcon}
            />
            <Image
              source={require('@/assets/images/delete.png')}
              style={styles.deleteIcon}
            />
          </TouchableOpacity>
        </View>
      ))}
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
    fontSize: 22,
    color: '#FFFFFF',
    fontFamily: 'monospace',
    marginHorizontal: 100,
  },
  arrowLogo: {
    width: 25,
    height: 25,
  },
  row1: {
    backgroundColor: '#82C96D',
    padding: 30,
    marginTop: 20,
    borderRadius: 25,
  },
  default: {
    fontFamily: 'monospace',
    marginTop: -15,
    alignItems: 'center',
    fontSize: 20,
  },
  pencilIcon: {
    width: 20,
    height: 20,
    marginLeft: 250,
  },
  deleteIcon: {
    width: 25,
    height: 25,
    marginLeft: 320,
    marginTop: -22,
  },
  arrowIcon: {
    width: 25,
    height: 25,
  },
});
