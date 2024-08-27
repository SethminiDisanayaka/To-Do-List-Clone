import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TaskList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const addTask = () => {
    if (task.length > 0) {
      
    }
  };

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Image style={styles.arrowLogo} source={require('@/assets/images/tickIcon.png')} />
          <Text style={styles.nametext}>All Lists</Text>
          <Image style={styles.tinyLogo1} source={require('@/assets/images/downArrow.png')} />
          <Image style={styles.tinyLogo2} source={require('@/assets/images/search.png')} />
          <Image style={styles.tinyLogo3} source={require('@/assets/images/dots.png')} />
        </View>
      </View>

      {['Default', 'Personal', 'Shopping', 'Work','taks 2','task 3'].map((listName) => (
        <View key={listName} style={styles.rowItem}>
          <Text style={styles.default}>{listName}</Text>
          <TouchableOpacity onPress={addTask} style={styles.iconContainer}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#A4C98E',
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
   
    marginTop:30
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
  arrowLogo: {
    width: 25,
    height: 25,
  },
  tinyLogo1: {
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
  rowItem: {
    backgroundColor: '#B0F5CE',
    padding: 30,
    marginTop: 20,
    borderRadius: 25,
    width: '100%',
  },
  default: {
    fontFamily: 'monospace',
    fontSize: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  pencilIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  deleteIcon: {
    width: 25,
    height: 25,
  },
});
