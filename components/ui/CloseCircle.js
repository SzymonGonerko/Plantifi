import React from "react";
import { StyleSheet, View, Pressable} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"

export const CloseCircle = ({onPress}) => {
    return <>
    <View style={styles.container}>
        <Pressable onPress={onPress} style={styles.circle} android_ripple={{color: "#e8b1b1"}}>
            <Ionicons name={"close"} color="black" style={{fontSize: 15}}/>
        </Pressable>
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        position: "absolute", 
        width: 25,
        height: 25,
        position: "absolute", 
        right: -17, 
        top: -10,
        borderRadius: 50,
        overflow: 'hidden',
        elevation: 1
    },
    circle: {
        justifyContent: "center",
        alignItems: "center",
        width: 25, 
        height: 25, 
        backgroundColor: "white"}
})
