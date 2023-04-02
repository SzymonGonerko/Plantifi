import React from "react";
import { StyleSheet, SafeAreaView, Alert} from 'react-native';
import { Header } from '../components/ui/Header';
import { PlantsNavigator } from '../components/Plants/plantsNavigation/PlantsNavigator';


export const Plants = (props) => {
    const {onFocus, onBlur, onPressArrowBack, navigation, showMenu, onPressProfilePlant} = props

    return (
        <SafeAreaView style={styles.container}>
                <Header 
                    showMenu={showMenu} 
                    navigation={navigation} 
                    onPressArrowBack={onPressArrowBack}
                    >
                        Moje Rośliny
                    </Header>
                <PlantsNavigator 
                    onFocus={onFocus} 
                    onBlur={onBlur} 
                    onPressProfilePlant={onPressProfilePlant}
                />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})