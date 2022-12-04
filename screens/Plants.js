import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Alert, PermissionsAndroid, Button} from 'react-native';
import { Header } from '../components/ui/Header';
import { PlantsNavigator } from '../components/plantsNavigation/PlantsNavigator';
import { Camera, CameraType } from 'expo-camera';


export const Plants = ({onPressShowMainApp, onPressThemeBar}) => {
    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) {
        return null;
      }
    
      if (!permission.granted) {
         Alert.alert(
            "Dostęp do aparatu",
            "Aby rozpoznać Twoją rośline aplikacja Plantify potrzbuje dostępu do aparatu",
            [
              {
                text: "Odmawiam",      
                onPress: () => Alert.alert("Dostęp do aparatu", "dostęp do apraratu jest wyłączony. Spróbuj ponownie przy następnym uruchomieniu aplikacji"),
              },
              { 
                text: "Zezwalam", 
                onPress: () => requestPermission(),
              }
            ]
          );;
      }


    return (
        <SafeAreaView style={styles.container}>
                <Header onPressThemeBar={onPressThemeBar} onPressShowMainApp={onPressShowMainApp}>Moje Rośliny</Header>
                <PlantsNavigator/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})