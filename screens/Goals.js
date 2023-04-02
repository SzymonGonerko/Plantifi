import React from "react";
import { StyleSheet, View } from 'react-native';
import { Header } from "../components/ui/Header"
import { GoalsNavigator } from '../components/Goals/goalsNavigation/GoalsNavigator';


export const Goals = (props) => {
    const {onPressArrowBack, navigation, showMenu} = props
    return (
        <View style={styles.container}>
            <Header 
                showMenu={showMenu} 
                navigation={navigation} 
                onPressArrowBack={onPressArrowBack}
                >
                    Moje Zadania
            </Header>
            <GoalsNavigator/>
        </View>
    )

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})