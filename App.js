import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { useEffect, useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView} from 'react-native';

import { Logo } from './screens/Logo';
import { Welcome } from './screens/Welcome';
import { Login } from './screens/Login';

import NunitoItalic from "./assets/fonts/NunitoItalic.ttf"
import NunitoBold from "./assets/fonts/NunitoBold.ttf"
import NunitoBoldItalic from "./assets/fonts/NunitoBoldItalic.ttf"
import NunitoRegular from "./assets/fonts/NunitoRegular.ttf"
import PlayfairDisplayBold from "./assets/fonts/PlayfairDisplayBold.ttf"
import PlayfairDisplayRegular from "./assets/fonts/PlayfairDisplayRegular.ttf"

SplashScreen.preventAutoHideAsync();



export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [theme, setTheme] = useState('light')
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

  

  return <>
  <StatusBar style='light'/>
  <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
    <Logo/>
    <Welcome onPressHandlerAnim={onPressHandlerAnim} anim={anim}/>
    <Login onPressHandlerPrev={onPressHandlerPrev}/>
  </SafeAreaView>
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
