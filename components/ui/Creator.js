import React from "react";
import { StyleSheet, Text} from 'react-native';
import { View } from "react-native-animatable";

export const Creator = ({who, children, work}) => {
    return <>
                <View style={[styles.container, {opacity: who}]}>
                    <Text style={styles.name}>{children}</Text>
                    <Text style={styles.work}>{work}</Text>
                </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center",
        marginHorizontal: 10
    },
    name: {
        fontSize: 15, 
        color: "white", 
        backgroundColor: "#474646a1", 
        padding: 7, 
        borderRadius: 8,
        letterSpacing: 0.5,
        fontFamily: "NunitoBold"
    },
    work: {
        fontSize: 15, 
        color: "white",
        fontFamily: "NunitoItalic",
        textTransform: "uppercase",
        backgroundColor: "#666666c4", 
        borderRadius: 8,
        padding: 7, 
    }
})