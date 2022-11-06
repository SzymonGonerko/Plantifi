import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated} from 'react-native';
import { useEffect } from "react";
import { NavIcon } from "./ui/NavIcon";
import { useRef, useState } from "react";
import { CameraButton } from "./ui/CameraButton";
import * as NavigationBar from 'expo-navigation-bar';

import { Plants } from "../screens/Plants";
import { Explore } from "../screens/Explore";
import { Goals } from "../screens/Goals";
import { Camera } from "../screens/Camera";
import { Shop } from "../screens/Shop";


const Tab = createBottomTabNavigator();



export const TabsNavigator = ({onPressShowMainApp, onPressThemeBar}) => {
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





return <>
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
    }}
    >
        <Tab.Screen 
          name='Plants'
          options={{
                tabBarItemStyle: styles.defaultTab,
                tabBarIcon: ({focused}) => <NavIcon fadeAnim={listTab.fadePlants} text={focused ? "Moje\u00A0rośliny" : ""} source={focused ? require("../assets/icons/nav/plantsActive.jpg"): require("../assets/icons/nav/plants.jpg")}/>,
            }}
          listeners={({ navigation }) => ({
                tabPress: (e) => {
                  e.preventDefault();
                  fadeIn(listTab.fadePlants)
                  navigation.navigate('Plants');
                },
              })}>
            {(props) => <Plants {...props} onPressThemeBar={onPressThemeBar} onPressShowMainApp={onPressShowMainApp} />}
        </Tab.Screen>

        <Tab.Screen
          name='Explore' 
          options={{
              tabBarItemStyle: styles.defaultTab,
              tabBarIcon: ({focused}) => <NavIcon fadeAnim={listTab.fadeExplore} text={focused ? "Odkrywaj" : ""} source={focused ? require("../assets/icons/nav/exploreActive.jpg"): require("../assets/icons/nav/explore.jpg")}/>,
          }}
          listeners={({ navigation }) => ({
              tabPress: (e) => {
                e.preventDefault();
                fadeIn(listTab.fadeExplore)
                navigation.navigate('Explore');
                },
          })}
        >
          {(props) => <Explore {...props} onPressThemeBar={onPressThemeBar} onPressShowMainApp={onPressShowMainApp} />}
        </Tab.Screen>

        <Tab.Screen 
            name='Camera' 
            component={Camera}
            options={{
                tabBarItemStyle: styles.defaultTab,
                tabBarButton: () => <CameraButton/>
            }}
        />

        <Tab.Screen
          name='Goals'
          options={{
              tabBarItemStyle: styles.defaultTab,
              tabBarIcon: ({focused}) => <NavIcon fadeAnim={listTab.fadeGoals} text={focused ? "Moje\u00A0zadania" : ""} source={focused ? require("../assets/icons/nav/goalsActive.jpg"): require("../assets/icons/nav/goals.jpg")}/>
          }}
          listeners={({ navigation }) => ({
              tabPress: (e) => {
                e.preventDefault();
                fadeIn(listTab.fadeGoals)
                navigation.navigate('Goals');
              },
            })}
        >
            {(props) => <Goals {...props} onPressThemeBar={onPressThemeBar} onPressShowMainApp={onPressShowMainApp} />}
        </Tab.Screen>

        <Tab.Screen
          name='Shop' 
          options={{
              tabBarItemStyle: styles.defaultTab,
              tabBarIcon: ({focused}) => <NavIcon fadeAnim={listTab.fadeShop} text={focused ? "Sklep" : ""} source={focused ? require("../assets/icons/nav/shopActive.jpg"): require("../assets/icons/nav/shop.jpg")}/>
          }}
          listeners={({ navigation }) => ({
              tabPress: (e) => {
                e.preventDefault();
                fadeIn(listTab.fadeShop)
                navigation.navigate('Shop');
              },
            })}
        >
          {(props) => <Shop {...props} onPressThemeBar={onPressThemeBar} onPressShowMainApp={onPressShowMainApp} />}
      </Tab.Screen>

    </Tab.Navigator>
</>
}
const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        left: 10,
        right: 10,
        bottom: 0,
        height: 90,
        padding: 0,
        elevation: 0,
        borderWidth: 0
    },
    plantsIcon: {
        width: 30,
        height: 30,
    },
    defaultTab: {
      top: -10,
      zIndex: 4
    }
})
