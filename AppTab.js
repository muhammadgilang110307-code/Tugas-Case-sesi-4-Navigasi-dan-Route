import React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// --- Halaman HOME ---
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Halaman Home</Text>
      <Button title="Ke Setting" onPress={() => navigation.navigate('Setting')} />
      <Button title="Ke About" onPress={() => navigation.navigate('About')} />
    </View>
  );
}

// --- Halaman SETTING ---
function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Halaman Setting</Text>
      <Button title="Kembali ke Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

// --- Halaman ABOUT ---
function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Halaman About</Text>
      <Button title="Kembali ke Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

// --- Tab Navigator ---
export default function AppTab() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}
