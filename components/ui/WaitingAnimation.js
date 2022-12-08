import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Animated } from 'react-native';

export const WaitingAnimation = () => {
    const [animation, setAnimation] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animation, {
          toValue: 11,
          duration: 7000,
          useNativeDriver: false,
        }).start();
      }, []);

    const bgcAnimations = {
        backgroundColor: animation.interpolate({
          inputRange: [0, 1, 2, 5, 8, 11],
          outputRange: 
            [
              '#54795e00', 
              '#23783ac2', 
              '#237478c2', 
              '#302378c2', 
              '#78235dc2', 
              '#786f23c2'
            ],
        }),
      };


    return <Animated.View style={[styles.container, bgcAnimations]}/>
}

const styles = StyleSheet.create({
    container: {
        position: "absolute", 
        zIndex: 5, 
        top: 0, 
        bottom: 0, 
        left: 0, 
        right: 0,
    }
})