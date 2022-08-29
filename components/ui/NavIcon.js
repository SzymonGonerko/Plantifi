import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import * as Animatable from 'react-native-animatable';

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
        justifyContent: "center",
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
    },
    con: {
        alignItems: "center",
    }
})