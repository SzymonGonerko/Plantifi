import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable, Alert } from 'react-native';
import {Header} from "../components/ui/Header"
import { GoalsNavigator } from '../components/goalsNavigation/GoalsNavigator';


export const Goals = ({onPressShowMainApp, onPressThemeBar}) => {
    return (
        <View style={styles.container}>
            <Header onPressShowMainApp={onPressShowMainApp} onPressThemeBar={onPressThemeBar}>
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