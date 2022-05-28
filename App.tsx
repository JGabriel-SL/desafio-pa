import React, {View} from 'react-native';
import AppLoading from 'expo-app-loading';
import SplashScreen from 'expo-splash-screen';

import useFonts from './src/hooks/useFonts';

import Routes from './src/routes';
import { useEffect, useState } from 'react';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  
  // const LoadFonts = async () => {
  //   await useFonts();
  // }

  // useEffect(()=> {
  //   LoadFonts()
  // }, [])

  // if (!isReady) {
  //   return (
  //     <AppLoading 
  //       startAsync={LoadFonts}
  //       onFinish={() => setIsReady(true)}
  //       onError={() => {}}
  //     />
  //   )
  // }
  // let [fontsLoaded] = useFonts({
  //   Quicksand_400Regular,
  //   Quicksand_700Bold
  // })

  // if (!fontsLoaded) {
  //   return <AppLoaging />;
  // }

  return (
      <Routes />
  );
}