import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import { useFonts, Dosis_400Regular } from '@expo-google-fonts/dosis';

import Routes from './src/router';

export default function App() {

  let [fontsLoaded] = useFonts({
    // Anton_400Regular,
    Dosis_400Regular,
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes/>
    </>
  );
}