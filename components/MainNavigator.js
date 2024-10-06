import React, { useState } from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {TabsNavigator} from "./TabsNavigator";
import { PhotoInstruction } from "./PlantIDRequest/PhotoInstruction";
import { RightNavBar } from "./RightNavBar";
import { ProfilePlants } from "./ProfilePlants/ProfilePlants";
import { PopUpSuccess } from "./ui/PopUpSuccess";

const Stack = createNativeStackNavigator();

export const MainNavigator = ({onPressShowMainApp, onPressThemeBar}) => {
  const [toggle, setToggle] = useState(false);
  const [showRightNav, setShowRightNav] = useState(false);
  const [showProfilePlant, setShowProfilePlant] = useState(false);
  const [dataPlant, setDataPlant] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const toggleNavCamera = () => {
    setToggle(p => !p)
  }

  const goBack = () => {
    onPressThemeBar()
    onPressShowMainApp()
    return null
}

  const onPressCamera = () => {
    toggleNavCamera()
}

  const showMenu = () => {
    setShowRightNav(p => !p)
  }

  const onPressProfilePlant = (name, src, profile ) => {
    setDataPlant(
      <ProfilePlants 
        src={src}
        name={name}
        profile={profile}
        onSuccesAddedPlant={onSuccesAddedPlant}
        onPressButtonSquare={() => setShowProfilePlant(false)}
        />
      )
    setShowProfilePlant(true)
  }

  const onSuccesAddedPlant = () => {
    setShowProfilePlant(false)
    setShowSuccess(true)
  }

  return <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Root"
          screenOptions={{headerShown: false}}>
            <Stack.Screen name="Root">
              {(props) => <TabsNavigator {...props} onPressProfilePlant={onPressProfilePlant} showMenu={showMenu} toggleNavCamera={toggleNavCamera}/>}
            </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      {toggle && <PhotoInstruction onPressCamera={onPressCamera} />}
      {showRightNav && <RightNavBar goBack={goBack} showMenu={showMenu}/>}
      {showProfilePlant && dataPlant}
      {showSuccess && <PopUpSuccess onPressClose={() => setShowSuccess(false)}/>}
</>
};

