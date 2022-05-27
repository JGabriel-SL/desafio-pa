import React from 'react-native';
import 'react-native-gesture-handler';
import AppLoaging from 'expo-app-loading';

import { useFonts, Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoaging />;
  }

  return (
    <Routes />
  );
}


