import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import * as Animatable from 'react-native-animatable';

export const NavIcon = ({source, text}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true
        }).start();
        console.log("fadeout")
      };

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true
        }).start();
        console.log("fadein")
      };

      useEffect(() => {
        if (text === "") {
            fadeOut()
        }
        fadeIn()

        return () => fadeOut()
    })

    return <>
    <View style={styles.container}>
        <Pressable onPress={fadeIn} style={styles.con}>
        <ImageBackground style={styles.plantsIcon} resizeMode="contain" source={source}/>
        <Animated.Text style={[styles.text, {opacity: fadeAnim}]}>{text}</Animated.Text>
        </Pressable>
    
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