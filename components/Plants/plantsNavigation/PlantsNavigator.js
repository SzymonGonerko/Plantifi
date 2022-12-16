import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { PlantsTabs } from "./PlantsTabs";

const Stack = createNativeStackNavigator();


export const PlantsNavigator = ({onFocus, onBlur}) => {
  return <>
        <Stack.Navigator
          initialRouteName="Root"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Root">
              {(props) => <PlantsTabs onFocus={onFocus} onBlur={onBlur} {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
</>
};

