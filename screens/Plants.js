import { StyleSheet, Text, SafeAreaView} from 'react-native';
import { Header } from '../components/ui/Header';
import { PlantsNavigator } from '../components/plantsNavigation/PlantsNavigator';


export const Plants = ({onPressShowMainApp}) => {
console.log("Plants", onPressShowMainApp)
    return (
        <SafeAreaView style={styles.container}>
                <Header onPressShowMainApp={onPressShowMainApp}>Moje Rośliny</Header>
                <PlantsNavigator/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})