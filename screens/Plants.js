import React from "react";
import { StyleSheet, SafeAreaView, Alert} from 'react-native';
import { Header } from '../components/ui/Header';
import { PlantsNavigator } from '../components/Plants/plantsNavigation/PlantsNavigator';
import { Camera } from 'expo-camera';


export const Plants = ({onPressShowMainApp, onPressThemeBar}) => {

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