import { StyleSheet, Text, View, ScrollView, Switch,TouchableOpacity ,Image} from 'react-native';
import React, { useState } from 'react';
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
  
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <TouchableOpacity onPress={navigateToMainPage}>
            <Image
              source={require('@/assets/images/backArrrow.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <Text style={styles.nametext}>Settings</Text>
          <Image style={styles.arrowLogo} source={require('@/assets/images/list.png')} />
        </View>
        </View>
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Remove Ads</Text>
        <Text style={styles.subText}>One payment to remove ads forever.</Text>
        <Switch />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Status bar</Text>
        <Text style={styles.subText}>Disabled</Text>
        <Switch />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Confirm finishing tasks</Text>
        <Text style={styles.subText}>Disabled</Text>
        <Switch />
      </View>
      <View style={[styles.settingItem, styles.highlight]}>
        <Text style={styles.settingText}>Confirm repeating tasks</Text>
        <Text style={styles.subText}>Disabled</Text>
        <Switch />
      </View>
      <View style={[styles.settingItem, styles.highlight]}>
        <Text style={styles.settingText}>Found in clipboard</Text>
        <Text style={styles.subText}>Enabled</Text>
        <Switch value={true} />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>List to show at startup</Text>
        <Text style={styles.subText}>All Lists</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>First day of week</Text>
        <Text style={styles.subText}>Sunday</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Time format</Text>
        <Text style={styles.subText}>12-hour</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Sort order</Text>
        <Text style={styles.subText}>Due date + Alphabetically</Text>
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Notifications</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Sound</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Voice</Text>
        <Switch />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Vibration</Text>
        <Switch />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Task Notifications</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Day Summary</Text>
        <Switch />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Syncing with Google</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Google Account</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Sync Mode</Text>
      </View>
     
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#A4C98E',
  },
  header: {
    paddingVertical: 15,
  },
  headerText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  settingItem: {
    paddingVertical: 15,
    borderBottomColor: '#005080',
    borderBottomWidth: 1,
  },
  settingText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  subText: {
    fontSize: 14,
    color: '#000000',
  },
  highlight: {
    backgroundColor: '#519E7E',
    borderRadius: 8,
    padding: 10,
  },
  sectionHeader: {
    paddingVertical: 10,
  },
  sectionHeaderText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
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
  arrowIcon: {
    width: 25,
    height: 25,
  },
});
