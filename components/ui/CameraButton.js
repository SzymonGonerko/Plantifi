import React from "react";
import { useState } from 'react';
import { StyleSheet, View, ImageBackground, Dimensions, Pressable } from 'react-native';

import FontAwesome from "react-native-vector-icons/FontAwesome"
import { PhotoInstruction } from '../PlantIDRequest/PhotoInstruction';

const screenWidth = Dimensions.get('screen').width;

export const CameraButton = () => {
    const [showPhotoInstruction, setShowPhotoInstruction] = useState(false)
    const [showCamera, setShowCamera] = useState(false)


    const onPressCamera = () => {
        setShowPhotoInstruction(prev => !prev)
    }

    const onPressHandler = () => {
        setShowCamera(prev => !prev)
     }

    return <>
    <View style={styles.container}>
        <ImageBackground style={styles.imgBackground} source={require("../../assets/icons/nav/Union.png")}/>
            <View style={styles.circle}>
            <Pressable style={({pressed}) => pressed ? [styles.circleContainer, styles.pressed] : [styles.circleContainer]}
                onPress={onPressCamera}
                android_ripple={{color: "#9BA9BC"}}>
                <FontAwesome name={"camera"} color="white" style={{fontSize: 20}}/>
                </Pressable>
            </View>
    </View>
    <PhotoInstruction onPressHandler={onPressHandler} showCamera={showCamera} onPressCamera={onPressCamera} isVisible={showPhotoInstruction}/>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        position: 'relative',
    },
    circle: {
        overflow: 'hidden',
        borderRadius: 200,
        backgroundColor: "#54795E",
        width: 56,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        top: -25
    },
    pressed: {
        opacity: 0.75,
        borderRadius: 200,
    },
    circleContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#54795E",
        borderRadius: 200,
        elevation: 2,
        width: "100%",
        height: "100%"
    },
    imgBackground: {
        position: "absolute",
        width: screenWidth + 15, 
        top: -47, 
        bottom: 0, 
    }
})