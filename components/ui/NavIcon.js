import React from "react";
import { StyleSheet, View, ImageBackground, Animated } from 'react-native';

export const NavIcon = ({source, text, fadeAnim}) => {

    return <>
    <View style={styles.container}>
        <ImageBackground style={styles.plantsIcon} resizeMode="contain" source={source}/>
        <Animated.Text style={[styles.text, {opacity: fadeAnim}]}>{text}</Animated.Text>
    </View>
    
    </> 
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
    },
    plantsIcon: {
        width: 30,
        height: 30,
    },
    text: {
        fontSize: 11,
        fontFamily: "NunitoRegular",
        color: "#54795E",
        width: "100%"
    },
})