import React from "react";
import { StyleSheet, Text} from 'react-native';
import { View } from "react-native-animatable";
import { globalStyles } from "../globalStyles";

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
        paddingHorizontal: 10,
        width: "100%"
    },
    name: {
        fontSize: 14, 
        color: "white", 
        backgroundColor: globalStyles.backgroundAlfa, 
        padding: 7, 
        borderRadius: 8,
        letterSpacing: 0.5,
        fontFamily: "NunitoBold",
    },
    work: {
        fontSize: 14, 
        color: "white",
        fontFamily: "NunitoItalic",
        textTransform: "uppercase",
        backgroundColor: globalStyles.backgroundAlfa,
        letterSpacing: -0.3,
        borderRadius: 8,
        padding: 7,
    }
})