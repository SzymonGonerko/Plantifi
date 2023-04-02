import React, { useEffect, useRef, useState }  from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Animated} from 'react-native';
import { NavIcon } from "./ui/NavIcon";
import { CameraButton } from "./ui/CameraButton";
import * as NavigationBar from 'expo-navigation-bar';

import { Plants } from "../screens/Plants";
import { Explore } from "../screens/Explore";
import { Goals } from "../screens/Goals";
import { Camera } from "../screens/Camera";
import { Shop } from "../screens/Shop";


const Tab = createBottomTabNavigator();

const dir = {
  plantsActive: require("../assets/icons/nav/plantsActive.png"),
  exploreActive: require("../assets/icons/nav/exploreActive.png"),
  goalsActive: require("../assets/icons/nav/goalsActive.png"),
  shopActive: require("../assets/icons/nav/shopActive.png"),
  explore: require("../assets/icons/nav/explore.png"),
  plants: require("../assets/icons/nav/plants.png"),
  goals: require("../assets/icons/nav/goals.png"),
  shop: require("../assets/icons/nav/shop.png"),
}



export const TabsNavigator = (props) => {
  const {toggleNavCamera, showMenu, onPressProfilePlant} = props
  const [nav, setNav] = useState({history: [0], isPressedNav: false})
  const [navPosition, setNavPosition] = useState(-25)
  const listTab = {
      fadePlants: useRef(new Animated.Value(1)).current,
      fadeExplore: useRef(new Animated.Value(0)).current,
      fadeGoals: useRef(new Animated.Value(0)).current,
      fadeShop: useRef(new Animated.Value(0)).current
  }

    const fadeOut = (thisOne) => {
        Animated.timing(thisOne, {
          toValue: 0,
          duration: 1,
          useNativeDriver: true
        }).start();
      };

    const fadeIn = (refComponent) => {
        Object.entries(listTab).forEach(([_, key]) => fadeOut(key))
        Animated.timing(refComponent, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true
        }).start()
      }

      const onBlurInputHandler = () => {
        setNavPosition(-25)
      }
      const onFocusInputHandler = () => {
        setNavPosition(-1000)
      }

      const onPressTabHandler = (index) => {
        setNav(prev => {
          const newState = prev.history[prev.history.length - 1] === index ? prev : {history: [...prev.history, index], isPressedNav: true};
          return newState
        })
      }

      const onPressArrowBack = (navigation) => {
        let tabIndex
        setNav(prev => {
          if (prev.isPressedNav) {
              let sliceTheLast = [...prev.history].slice(0, -1)
              tabIndex = sliceTheLast.pop()
              return {history: [...sliceTheLast], isPressedNav: false}
          } 
          else {
            tabIndex = [...prev.history].pop()
            return {history: [...prev.history], isPressedNav: true}
          }
        })
        switch (tabIndex) {
          case 3: return (fadeIn(listTab.fadeShop), navigation.navigate("Shop"))
          case 2: return (fadeIn(listTab.fadeGoals), navigation.navigate("Goals"))
          case 1: return (fadeIn(listTab.fadeExplore), navigation.navigate("Explore"))
          case 0: return (fadeIn(listTab.fadePlants), navigation.navigate("Plants"))
          default: return (fadeIn(listTab.fadePlants), navigation.navigate("Plants"))
        }
      }





return <>
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.tabBar, {bottom: navPosition}],
    }}
    >
        <Tab.Screen 
          name='Plants'
          options={{
                tabBarItemStyle: styles.defaultTab,
                tabBarIcon: ({focused}) => <NavIcon fadeAnim={listTab.fadePlants} text={focused ? "Moje\u00A0rośliny" : ""} source={focused ? dir.plantsActive: dir.plants}/>,
            }}
          listeners={({ navigation }) => ({
                tabPress: (e) => {
                  e.preventDefault();
                  fadeIn(listTab.fadePlants)
                  navigation.navigate('Plants');
                  onPressTabHandler(0)
                },
              })}>
            {(props) => <Plants {...props} onPressProfilePlant={onPressProfilePlant} showMenu={showMenu} onPressArrowBack={onPressArrowBack} onFocus={onFocusInputHandler} onBlur={onBlurInputHandler} />}
        </Tab.Screen>

        <Tab.Screen
          name='Explore' 
          options={{
              tabBarItemStyle: styles.defaultTab,
              tabBarIcon: ({focused}) => <NavIcon fadeAnim={listTab.fadeExplore} text={focused ? "Odkrywaj" : ""} source={focused ? dir.exploreActive: dir.explore}/>,
          }}
          listeners={({ navigation }) => ({
              tabPress: (e) => {
                e.preventDefault();
                fadeIn(listTab.fadeExplore)
                navigation.navigate('Explore');
                onPressTabHandler(1)
                },
          })}
        >
          {(props) => <Explore {...props} onPressProfilePlant={onPressProfilePlant} showMenu={showMenu} onPressArrowBack={onPressArrowBack}  onFocus={onFocusInputHandler} onBlur={onBlurInputHandler}/>}
        </Tab.Screen>

        <Tab.Screen 
            name='Camera' 
            component={Camera}
            options={{
                tabBarItemStyle: styles.defaultTab,
                tabBarButton: () => <CameraButton toggleNavCamera={toggleNavCamera}/>
            }}
        />

        <Tab.Screen
          name='Goals'
          options={{
              tabBarItemStyle: styles.defaultTab,
              tabBarIcon: ({focused}) => <NavIcon fadeAnim={listTab.fadeGoals} text={focused ? "Moje\u00A0zadania" : ""} source={focused ? dir.goalsActive: dir.goals}/>
          }}
          listeners={({ navigation }) => ({
              tabPress: (e) => {
                e.preventDefault();
                fadeIn(listTab.fadeGoals)
                navigation.navigate('Goals')
                onPressTabHandler(2)
              },
            })}
        >
            {(props) => <Goals {...props} showMenu={showMenu} onPressArrowBack={onPressArrowBack}/>}
        </Tab.Screen>

        <Tab.Screen
          name='Shop' 
          options={{
              tabBarItemStyle: styles.defaultTab,
              tabBarIcon: ({focused}) => <NavIcon fadeAnim={listTab.fadeShop} text={focused ? "Sklep" : ""} source={focused ? dir.shopActive: dir.shop}/>
          }}
          listeners={({ navigation }) => ({
              tabPress: (e) => {
                e.preventDefault();
                fadeIn(listTab.fadeShop)
                navigation.navigate('Shop')
                onPressTabHandler(3)
              },
            })}
        >
          {(props) => <Shop onPressArrowBack={onPressArrowBack} {...props} showMenu={showMenu} />}
      </Tab.Screen>

    </Tab.Navigator>
</>
}
const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        left: 10,
        right: 10,
        bottom: 20,
        height: 80,
        padding: 0,
        elevation: 0,
        borderWidth: 0
    },
    plantsIcon: {
        width: 30,
        height: 30,
    },
    defaultTab: {
      top: -15,
      zIndex: 4
    }
})
