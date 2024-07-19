import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import mainPage from "@/app/tabs/mainPage"
import addTask from "@/app/tabs/addTask"
import taskList from "@/app/tabs/taskLists"
import AllList from "@/app/tabs/AllList"
import AddInBatchMode from '@/app/tabs/AddInBatchMode';

const stack = createNativeStackNavigator()


export default function index() {
  return (
    <NavigationContainer independent={true}>
    <stack.Navigator initialRouteName="Home">
      <stack.Screen name="mainPage" component={mainPage} options={{ headerShown: false }} />
      <stack.Screen name="addTask" component={addTask} options={{ headerShown: false }} />
      <stack.Screen name="taskList" component={taskList} options={{ headerShown: false }} />
      <stack.Screen name="AddInBatchMode" component={AddInBatchMode} options={{ headerShown: false }} />
    </stack.Navigator>
  </NavigationContainer>

  )
}

const styles =StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    alignItems:"center",
    justifyContent:"center"
  }
  })