import React from "react";
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SquareButton } from './SquareButton';
import { RightNavBar } from '../RightNavBar';

export const Header = ({children, onPressShowMainApp, onPressThemeBar, onPressArrowBack, navigation}) => {
    const [navVisibility, setNavVisiliblity] = useState(false)

    const goBack = () => {
        onPressThemeBar()
        onPressShowMainApp()
        return null
    }
    
    const showMenu = () => {
        setNavVisiliblity(prev => !prev)
    }
    


    return <>
            <View style={styles.headerContainer}>
                <View>
                    <SquareButton onPress={() => onPressArrowBack(navigation)} onHeader={true} type={"arrow"} styleButton={{backgroundColor: "white"}}/>
                </View>
                <View> 
                    <Text style={[styles.headerText, {transform: [{translateY: -3}]}]}>{children}</Text>
                </View>
                <View>
                    <SquareButton type={"nav"} onPress={showMenu} styleContainer={{borderWidth: 1, borderColor: "#54795E"}} styleButton={{backgroundColor: "white"}}/>
                </View>
            </View>
            <RightNavBar goBack={goBack} showMenu={showMenu} isVisible={navVisibility} />
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