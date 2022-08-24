import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';


import { useEffect, useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text} from 'react-native';

import { Logo } from './screens/Logo';
import { Welcome } from './screens/Welcome';
import { Login } from './screens/Login';

import {MainNavigator} from './components/MainNavigator';

import NunitoItalic from "./assets/fonts/NunitoItalic.ttf"
import NunitoBold from "./assets/fonts/NunitoBold.ttf"
import NunitoBoldItalic from "./assets/fonts/NunitoBoldItalic.ttf"
import NunitoRegular from "./assets/fonts/NunitoRegular.ttf"
import PlayfairDisplayBold from "./assets/fonts/PlayfairDisplayBold.ttf"
import PlayfairDisplayRegular from "./assets/fonts/PlayfairDisplayRegular.ttf"
import { View } from 'react-native-animatable';

SplashScreen.preventAutoHideAsync();



export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [showMainApp, setShowMainApp] = useState(false)
  const [themeBar, setThemeBar] = useState('light')
  const [anim, setAnim] = useState("")

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({NunitoItalic, NunitoBold, NunitoBoldItalic, PlayfairDisplayBold, PlayfairDisplayRegular, NunitoRegular});
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }


  

  const onPressHandlerAnim = () => {
      setAnim("bounceOutLeft")
    }

  const onPressHandlerPrev = () => {
      setAnim("bounceInLeft")
  }

  const onPressThemeBar = () => {
  setThemeBar(prev => prev === "light" ? "dark": "light")
  }

  const onPressShowMainApp = () => {
    setShowMainApp(true)
  }

  return <>
  
  <StatusBar style={themeBar}/>
  {!showMainApp &&
    <View style={styles.container} onLayout={onLayoutRootView}>
        <Logo/>
        <Welcome 
          onPressHandlerAnim={onPressHandlerAnim} 
          anim={anim} 
          onPressTheme={onPressThemeBar}/>
        <Login 
          onPressHandlerPrev={onPressHandlerPrev}
          onPressShowMainApp={onPressShowMainApp}
          onPressThemeBar={onPressThemeBar}/>
   
  </View>
 }
 {showMainApp && <MainNavigator/>}
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
