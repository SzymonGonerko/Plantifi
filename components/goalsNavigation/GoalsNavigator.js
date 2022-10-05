import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { GoalsTabs } from "./GoalsTabs";

const Stack = createNativeStackNavigator();



export const GoalsNavigator = () => {
  return <>
        <Stack.Navigator
          initialRouteName="Root"
          
          screenOptions={{headerShown: false, contentStyle: {backgroundColor: "red"}}}
          >
          <Stack.Screen name="Root" component={GoalsTabs} />
        </Stack.Navigator>
</>
};

