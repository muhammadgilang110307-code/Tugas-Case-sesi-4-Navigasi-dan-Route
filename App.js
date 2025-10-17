import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Ganti import di bawah ini ke AppTab atau AppStack sesuai yang mau kamu jalankan
import AppStack from './AppStack';
import AppTab from './AppTab';
// import AppTab from './AppTab';

export default function App() {
  return (
    <NavigationContainer>
      <AppTab />
    </NavigationContainer>
  );
}
