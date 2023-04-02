import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Animated } from 'react-native';

export const WaitingAnimation = () => {
    const [animation, setAnimation] = useState(new Animated.Value(0));
    const [visible, setVisible] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(animation, {
          toValue: 15,
          duration: 30000,
          useNativeDriver: false,
        }).start()

        setTimeout(() => {
          Animated.timing(visible, {
            toValue: 1,
            duration: 2500,
            useNativeDriver: false,
          }).start()
        }, 7000)
      }, []);

    const bgcAnimations = {
        backgroundColor: animation.interpolate({
          inputRange: [0, 0.2, 1, 5, 8, 11, 13, 15],
          outputRange: 
            [
              '#54795e00', 
              '#2dec45a6', 
              '#2de9eca6', 
              '#2d4aeca6', 
              '#a82deca6', 
              '#ec2d2da6',
              '#e9ec2da6',
              '#2dddeca6'
            ],
        }),
      };


    return <Animated.View style={[styles.container, bgcAnimations]}>
        <Animated.Text style={[styles.waitingText, {opacity: visible}]}>Jest wolny transfer jeszcze chwila...</Animated.Text>
      </Animated.View>
}

const styles = StyleSheet.create({
    container: {
        position: "absolute", 
        top: 0, 
        left: 0,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    waitingText: {
      width: "50%",
      fontFamily: "NunitoRegular",
      textAlign: "center",
      fontSize: 25
    }
})