import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { RotateInDownLeft } from 'react-native-reanimated';

export default function taskList() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const addTask = () => {
        if (task.length > 0) {
          
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

      <View style={styles.row1}>
        <Text  style={styles.default} >Default</Text>
        <TouchableOpacity onPress={addTask}>
        
        </TouchableOpacity>
      </View>

      <View style={styles.row2}>
        <Text  style={styles.default} >Default</Text>
        <TouchableOpacity onPress={addTask}>
        
        </TouchableOpacity>
      </View>

      <View style={styles.row3}>
        <Text  style={styles.default} >Default</Text>
        <TouchableOpacity onPress={addTask}>
        
        </TouchableOpacity>
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
        marginHorizontal: 10,
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
    text1: {
        fontSize: 15,
        color: 'black',
        fontFamily: 'monospace',
        marginTop: 10,
        marginLeft: 10,
      },
      default:{
        fontFamily:'monospace',
        marginTop:-15,
        fontSize:20,
      },
      pencilIcon:{
        width:20,
        height:20,
        marginLeft:250 ,
          
    },
    deleteIcon:{
        width:25,
        height:25,
        marginLeft:320 ,
        marginTop:-22  
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
      row2:{
        backgroundColor:'#B0F5CE',
        padding: 30,
        marginTop:20,
        borderRadius:25,
        width:200,
        height:200,
        marginLeft:150
      },
      row3:{
        backgroundColor:'#B0F5CE',
        padding: 30,
        marginTop:20,
        borderRadius:25,
        width:200,
        height:200
      },
      row1:{
        backgroundColor:'#B0F5CE',
        padding: 30,
        marginTop:20,
        borderRadius:25,
        width:200,
        height:200
      },
  });
  
  
   