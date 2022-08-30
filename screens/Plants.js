import { StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';
import { SquareButton } from '../components/ui/SquareButton';
import { Header } from '../components/ui/Header';
import { PlantsNavigator } from '../components/plantsNavigation/PlantsNavigator';

const windowWidth = Dimensions.get('window').width + 200;
const windowHeight = Dimensions.get('window').height + 200;

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
        backgroundColor: "red",
    },

})