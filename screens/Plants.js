import React from "react";
import { StyleSheet, SafeAreaView, Alert} from 'react-native';
import { Header } from '../components/ui/Header';
import { PlantsNavigator } from '../components/Plants/plantsNavigation/PlantsNavigator';


export const Plants = (props) => {
    const {onPressShowMainApp, onPressThemeBar, onFocus, onBlur, onPressArrowBack, navigation} = props

    return (
        <SafeAreaView style={styles.container}>
                <Header navigation={navigation} onPressArrowBack={onPressArrowBack} onPressThemeBar={onPressThemeBar} onPressShowMainApp={onPressShowMainApp}>Moje Rośliny</Header>
                <PlantsNavigator onFocus={onFocus} onBlur={onBlur}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})