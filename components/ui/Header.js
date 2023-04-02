import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { SquareButton } from './SquareButton';
import { globalStyles } from "../globalStyles";

export const Header = ({children, onPressArrowBack, navigation, showMenu}) => {
    
    return <>
            <View style={styles.headerContainer}>
                <View>
                    <SquareButton onPress={() => onPressArrowBack(navigation)} onHeader={true} type={"arrow"} styleButton={{backgroundColor: "white"}}/>
                </View>
                <View> 
                    <Text style={[styles.headerText, {transform: [{translateY: -3}]}]}>{children}</Text>
                </View>
                <View>
                    <SquareButton 
                        type={"nav"} 
                        onPress={() => showMenu()} 
                        styleContainer={styles.squareButton} 
                        styleButton={{backgroundColor: "white"}}
                    />
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
    },
    squareButton: {
        borderWidth: 1, 
        borderColor: globalStyles.mainColor
    }

})