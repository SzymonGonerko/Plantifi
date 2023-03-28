import React from "react";
import { useRef, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Pressable, Animated} from 'react-native';


export const CategoryCard = ({src, name, onPress, index, isSelected}) => {
    const defaultText = useRef(new Animated.Value(1)).current;
    const selectedText = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (!isSelected) fadeOut()
    }, [isSelected])
    
    const fadeIn = () => {
        Animated.timing(selectedText, {
          toValue: 1,
          duration: 350,
          useNativeDriver: true
        }).start();
        Animated.timing(defaultText, {
            toValue: 0,
            duration: 350,
            useNativeDriver: true
          }).start();
      };
    
      const fadeOut = () => {
        Animated.timing(selectedText, {
            toValue: 0,
            duration: 350,
            useNativeDriver: true
          }).start()
          Animated.timing(defaultText, {
            toValue: 1,
            duration: 350,
            useNativeDriver: true
          }).start();
      };

    return <>
    <View style={styles.container}>
        <View style={[styles.squareContainer, (isSelected && styles.selectedSquareContainer)]}>
            <Pressable 
            style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : [styles.buttonInnerContainer]}
            onPress={() => (onPress(index), fadeIn())} android_ripple={{color: "#9BA9BC"}}>
                <ImageBackground source={src} resizeMode="contain" imageStyle={styles.imgs} style={styles.imgs}/>
            </Pressable>
        </View>

        <View style={styles.tagTextContainer}>
            <Animated.Text style={[styles.tagText, {opacity: defaultText}]}>{name}</Animated.Text>
            <Animated.Text style={[styles.selectedTagText, {opacity: selectedText}]}>{name}</Animated.Text>
        </View>
        
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        width: 90,
        height: 90
    },
    tagTextContainer: {
        position: "relative",
        width: "100%", 
        height: "100%"
    },
    tagText: {
        position: 'absolute',
        fontSize: 12,
        fontFamily: "NunitoRegular",
        textAlign: "center",
        lineHeight: 13,
        width: "100%",
    },
    selectedTagText: {
        position: 'absolute',
        fontSize: 13,
        fontFamily: "NunitoBold",
        textAlign: "center",
        lineHeight: 14,
        width: "100%",
        height: "100%",
        color: "#54795E"
    },
    squareContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: 50,
        height: 50,
        backgroundColor: "white",
        borderRadius: 8,
        marginBottom: 6,
        overflow: 'hidden',
    },

    selectedSquareContainer: {
        elevation: 4,
        borderWidth: 1,
        borderColor: "#54795E"
    },
    imgs: {
        position: 'absolute',
        width: 18,
        height: 18,
    },
    buttonOuterContainer: {
        borderRadius: 8,
        overflow: "hidden",
        width: 48,
        height: 48
    },
    buttonInnerContainer: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        elevation: 1,
    },
    pressed: {
        opacity: 0.75,
    },
})