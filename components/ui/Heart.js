import React from "react";
import { useState, useRef  } from 'react';
import { StyleSheet, View, Pressable, Animated} from 'react-native';

import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"

export const Heart = ({bottomPosition}) => {
    const heartOpacity = useRef(new Animated.Value(1)).current;
    const heartGrowUp = useRef(new Animated.Value(1)).current;
    const [isFirstTap, setIsFirstTap] = useState(true)

    const heartAnimation = () => {
        if (isFirstTap) {
            Animated.timing(heartOpacity, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
              }).start();
              Animated.timing(heartGrowUp, {
                  toValue: 1.9,
                  duration: 500,
                  useNativeDriver: true
                }).start();
                setIsFirstTap(prev => !prev)
        } else {
            Animated.timing(heartOpacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
              }).start();
              Animated.timing(heartGrowUp, {
                  toValue: 1,
                  duration: 500,
                  useNativeDriver: true
                }).start();
                setIsFirstTap(prev => !prev)
        }
      };



    return <>
    <View style={[styles.container, {bottom: bottomPosition}]}>

        <Animated.View style={[
          {
            flex: 1,
            backgroundColor: "#FF6262",
            opacity: heartOpacity,
            transform: [{ scale: heartGrowUp }]
          }
        ]}>
            <Pressable style={styles.press} onPress={heartAnimation}>
                <Entypo name={"heart"} color={"white"} style={styles.icon}/>
            </Pressable>
        </Animated.View>

        <View style={styles.check}>
            <Feather name={"check"} color={"white"} style={styles.icon}/>
        </View>

    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        position: "absolute", 
        bottom: -20, 
        right: 30,
        width: 57, 
        height: 57, 
        backgroundColor: "white",
        zIndex: 4,
        borderRadius: 100,
        overflow: "hidden",
        elevation: 2
    },
    press: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    },
    check: {
        position: "absolute",
        zIndex: -2, 
        justifyContent: "center", 
        alignItems: "center",
        width: "100%", 
        height: "100%", 
        backgroundColor: "#54795E", 
    },
    icon: {
        fontSize: 35, 
        marginTop: 5
    }


    
})