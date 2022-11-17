import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Button } from 'react-native';

import FontAwesome from "react-native-vector-icons/FontAwesome"
import { PhotoInstruction } from '../PhotoInstruction';

const windowWidth = Dimensions.get('screen').width;

export const CameraButton = () => {
    const [showPhotoInstruction, setShowPhotoInstruction] = useState(false)

    return <>
    <View style={styles.container}>
        <ImageBackground style={styles.imgBackground} source={require("../../assets/icons/nav/Union.png")}/>
            <View style={styles.circle}>
            <Pressable style={({pressed}) => pressed ? [styles.circleContainer, styles.pressed] : [styles.circleContainer]}
                onPress={() => setShowPhotoInstruction(prev => !prev)}
                android_ripple={{color: "#9BA9BC"}}>
                <FontAwesome name={"camera"} color="white" style={{fontSize: 20}}/>
                </Pressable>
            </View>
    </View>
    <PhotoInstruction isVisible={showPhotoInstruction}/>


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
        top: -30,
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
        width: windowWidth, 
        top: -45, 
        bottom: 0, 
    }
})