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
          <Image style={styles.arrowLogo} source={require('../assets/images/backArrrow.png')} />
          <Text style={styles.nametext}>Task Lists</Text>
          <Image style={styles.arrowLogo} source={require('../assets/images/list.png')} />
        </View>
      </View>

      <View style={styles.row1}>
        <Text  style={styles.default} >Default</Text>
        <TouchableOpacity onPress={addTask}>
          <Image
            source={require('../assets/images/pencil.png')}
            style={styles.pencilIcon}
          />
          <Image
            source={require('../assets/images/delete.png')}
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.row1}>
        <Text  style={styles.default} >Personal</Text>
        <TouchableOpacity onPress={addTask}>
          <Image
            source={require('../assets/images/pencil.png')}
            style={styles.pencilIcon}
          />
          <Image
            source={require('../assets/images/delete.png')}
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.row1}>
        <Text  style={styles.default} >Shopping</Text>
        <TouchableOpacity onPress={addTask}>
          <Image
            source={require('../assets/images/pencil.png')}
            style={styles.pencilIcon}
          />
          <Image
            source={require('../assets/images/delete.png')}
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.row1}>
        <Text  style={styles.default} >Work</Text>
        <TouchableOpacity onPress={addTask}>
          <Image
            source={require('../assets/images/pencil.png')}
            style={styles.pencilIcon}
          />
          <Image
            source={require('../assets/images/delete.png')}
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
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
      fontSize: 22,
      color: '#FFFFFF',
      fontFamily: 'monospace',
      marginHorizontal: 100,
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
      row1:{
        backgroundColor:'#82C96D',
        padding: 30,
        marginTop:20,
        borderRadius:25
      },
      default:{
        fontFamily:'monospace',
        marginTop:-15,
        alignItems:'center',
        fontSize:20
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
    }
  });
  
  
  