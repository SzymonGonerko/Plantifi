import { StyleSheet, Text, SafeAreaView} from 'react-native';
import { Header } from '../components/ui/Header';
import { PlantsNavigator } from '../components/plantsNavigation/PlantsNavigator';


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