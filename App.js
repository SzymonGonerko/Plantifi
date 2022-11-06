import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';


import { useEffect, useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { Logo } from './screens/Logo';
import { Welcome } from './screens/Welcome';
import { Login } from './screens/Login';

import {MainNavigator} from './components/MainNavigator';

import NunitoItalic from "./assets/fonts/NunitoItalic.ttf"
import NunitoBold from "./assets/fonts/NunitoBold.ttf"
import NunitoExtraBold from "./assets/fonts/NunitoExtraBold.ttf"
import NunitoBoldItalic from "./assets/fonts/NunitoBoldItalic.ttf"
import NunitoRegular from "./assets/fonts/NunitoRegular.ttf"
import PlayfairDisplayBold from "./assets/fonts/PlayfairDisplayBold.ttf"
import PlayfairDisplayRegular from "./assets/fonts/PlayfairDisplayRegular.ttf"
import Inter from "./assets/fonts/Inter.ttf"
import { View } from 'react-native-animatable';

SplashScreen.preventAutoHideAsync();



export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)
  const [logoVisibility, setLogoVisiblity] = useState(true)
  const [showMainApp, setShowMainApp] = useState(false)
  const [themeBar, setThemeBar] = useState('light')
  const [anim, setAnim] = useState("")

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({NunitoItalic, NunitoBold, NunitoBoldItalic, NunitoExtraBold ,PlayfairDisplayBold, PlayfairDisplayRegular, NunitoRegular, Inter});
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
    NavigationBar.setVisibilityAsync("hidden")
    NavigationBar.setBackgroundColorAsync('transparent')
    NavigationBar.setPositionAsync('absolute')
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
      setTimeout(() => {
        setLogoVisiblity(false)
      }, 2000)
    }

  const onPressHandlerPrev = () => {
      setAnim("bounceInLeft")
  }

  const onPressThemeBar = () => {
  setThemeBar(prev => prev === "light" ? "dark": "light")
  }

  const onPressShowMainApp = () => {
    setAnim("")
    setShowMainApp(prev => !prev)
  }

  return <>
  
  <StatusBar style={themeBar}/>
  {!showMainApp &&
    <View style={styles.container} onLayout={onLayoutRootView}>
        {logoVisibility && <Logo/>}
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
 {showMainApp && <MainNavigator onPressThemeBar={onPressThemeBar} onPressShowMainApp={onPressShowMainApp}/>}
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
