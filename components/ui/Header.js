import { StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';
import { SquareButton } from './SquareButton';

export const Header = ({children}) => {

    const goBack = () => {
        return null
    }
    
    const showMenu = () => {
        return null
    }
    


    return <>
            <View style={styles.headerContainer}>
                <View>
                    <SquareButton type={"arrow"} onPress={goBack} styleButton={{backgroundColor: "white"}}/>
                </View>
                <View> 
                    <Text style={[styles.headerText, {transform: [{translateY: -3}]}]}>{children}</Text>
                </View>
                <View>
                    <SquareButton type={"nav"} onPress={showMenu} styleContainer={{borderWidth: 1, borderColor: "#54795E"}} styleButton={{backgroundColor: "white"}}/>
                </View>
            </View>
    </>
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        paddingTop: 50,
        paddingBottom: 20,
        justifyContent: "space-around",
        alignItems: "center"
    },
    headerText: {
        fontSize: 26,
        fontFamily: "PlayfairDisplayBold"
    }

})