import { StyleSheet, Text, View, Dimensions, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import { SquareButton } from '../components/ui/SquareButton';
import { Header } from '../components/ui/Header';
import { PlantsNavigator } from '../components/plantsNavigation/PlantsNavigator';


export const Plants = () => {


    return (
        <SafeAreaView style={styles.container}>
                <Header>Moje Rośliny</Header>
                <PlantsNavigator/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})