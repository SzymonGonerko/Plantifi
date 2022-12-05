import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated} from 'react-native';
import { useEffect } from "react";
import { useRef } from "react";
import * as NavigationBar from 'expo-navigation-bar';

import { Collection } from "../Collection";
import { Favourite } from "../Favourite";
import { Lost } from "../Lost";
import { TabSeparator } from "../../ui/TabSeparator";

const Tab = createBottomTabNavigator();



export const PlantsTabs = () => {
    const listTab = {
        fadeCollection: useRef(new Animated.Value(1)).current,
        fadeFavourite: useRef(new Animated.Value(0)).current,
        fadeLost: useRef(new Animated.Value(0)).current,
    }

    const fadeOut = (thisOne) => {
        Animated.timing(thisOne, {
          toValue: 0,
          duration: 1,
          useNativeDriver: true,
        }).start();
      };

    const fadeIn = (refComponent) => {
        Object.entries(listTab).forEach(([_, key]) => fadeOut(key))
        Animated.timing(refComponent, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true
        }).start();
      }

      useEffect(() => {
        NavigationBar.setPositionAsync("relative")
        NavigationBar.setBackgroundColorAsync('white')
      }, [])




return <>
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
    }}
    >
        <Tab.Screen 
            name='Collection' 
            component={Collection}
            options={{
                tabBarLabelStyle: styles.label,
                tabBarIcon: () => <TabSeparator animOpacity={listTab.fadeCollection}/>,
                tabBarLabel: "Moja kolekcja",
                tabBarActiveTintColor: "#54795E"
            }}
            listeners={({ navigation }) => ({
                tabPress: (e) => {
                  e.preventDefault();
                  fadeIn(listTab.fadeCollection)
                  navigation.navigate('Collection');
                },
              })}
        
        />

        <Tab.Screen
            name='Favourite' 
            component={Favourite}
            options={{
                tabBarLabelStyle: styles.label,
                tabBarIcon: () => <TabSeparator animOpacity={listTab.fadeFavourite}/>,
                tabBarLabel: "Ulubione",
                tabBarActiveTintColor: "#54795E"
            }}
            listeners={({ navigation }) => ({
                tabPress: (e) => {
                  e.preventDefault();
                  fadeIn(listTab.fadeFavourite)
                  navigation.navigate('Favourite');
                },
              })}
        />

        <Tab.Screen 
            name='Lost' 
            component={Lost}
            options={{
                tabBarLabelStyle: styles.label,
                tabBarIcon: () => <TabSeparator animOpacity={listTab.fadeLost}/>,
                tabBarLabel: "Utracone",
                tabBarActiveTintColor: "#54795E"
            }}
            listeners={({ navigation }) => ({
                tabPress: (e) => {
                  e.preventDefault();
                  fadeIn(listTab.fadeLost)
                  navigation.navigate('Lost');
                },
              })}
        />

    </Tab.Navigator>
</>
}
const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        left: 0,
        right: 0,
        top: 0,
        height: 45,
        padding: 0,
        borderBottomWidth: 4,
        borderBottomColor: "#e6e7e8",
        elevation: 0,
        borderTopWidth: 0
    },
    plantsIcon: {
        width: 30,
        height: 30,
    },
    label: {
        fontFamily: "NunitoBold",
        fontSize: 15,
        paddingBottom: 10,
    },
})
