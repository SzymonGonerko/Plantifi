import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Animated} from 'react-native';
import { useRef } from "react";
import { globalStyles } from "../../globalStyles";

import { ToDoList } from "../ToDoList";
import { TabSeparator } from "../../ui/TabSeparator";
import { DateSection } from "../DateSection";

const Tab = createBottomTabNavigator();



export const GoalsTabs = () => {
    const listTab = {
        fadeToDoList: useRef(new Animated.Value(1)).current,
        fadeCalendar: useRef(new Animated.Value(0)).current,
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




return <>
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,        
    }}
    >
        <Tab.Screen 
            name='ToDoList' 
            component={ToDoList}
            options={{
                tabBarLabelStyle: styles.label,
                tabBarIcon: () => <TabSeparator animOpacity={listTab.fadeToDoList}/>,
                tabBarLabel: "Do zrobienia",
                tabBarActiveTintColor: "#54795E"
            }}
            listeners={({ navigation }) => ({
                tabPress: (e) => {
                  e.preventDefault();
                  fadeIn(listTab.fadeToDoList)
                  navigation.navigate('ToDoList');
                },
              })}
        
        />

        <Tab.Screen
            name='Calendar' 
            component={DateSection}
            options={{
                tabBarLabelStyle: styles.label,
                tabBarIcon: () => <TabSeparator animOpacity={listTab.fadeCalendar}/>,
                tabBarLabel: "Pełny kalendarz",
                tabBarActiveTintColor: "#54795E"
            }}
            listeners={({ navigation }) => ({
                tabPress: (e) => {
                  e.preventDefault();
                  fadeIn(listTab.fadeCalendar)
                  navigation.navigate('Calendar');
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
        height: 35,
        padding: 0,
        borderBottomWidth: 5,
        borderBottomColor: globalStyles.background,
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
