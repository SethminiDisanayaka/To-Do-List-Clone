import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MainPage from '@/Component/mainPage';
import AddTask from '@/Component/addTask';

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <MainPage /> */}
      <AddTask />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
