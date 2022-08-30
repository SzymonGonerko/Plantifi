import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import { PlantsTabs } from "./PlantsTabs";

const Stack = createNativeStackNavigator();



export const PlantsNavigator = () => {
  return <>
        <Stack.Navigator
          initialRouteName="Root"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Root" component={PlantsTabs} />
        </Stack.Navigator>
</>
};

