import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {TabsNavigator} from "./TabsNavigator";

const Stack = createNativeStackNavigator();



export const MainNavigator = ({onPressShowMainApp}) => {
  console.log(onPressShowMainApp)
  return <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Root"
          screenOptions={{headerShown: false}}>
            <Stack.Screen name="Root">
              {(props) => <TabsNavigator {...props} onPressShowMainApp={onPressShowMainApp} />}
            </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
</>
};

