import React from 'react';
import { View, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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

// --- Stack Navigator ---
export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}
