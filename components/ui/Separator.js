import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from "../globalStyles";

export const Separator = ({styleContainer, styleText, children}) => {
    return <>
    <View style={[styles.container, styleContainer]}>
        <View style={styles.lineLeft}/>
        <View>
            <Text style={[styles.text, styleText]}>
                {children}
            </Text>
        </View>
        <View style={styles.lineRight}/>
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontFamily: "NunitoRegular",
    },
    lineLeft: {
        backgroundColor: globalStyles.background,
        width: "50%",
        height: 1,
        marginRight: 10
    },
    lineRight: {
        backgroundColor: globalStyles.background,
        width: "50%",
        height: 1,
        marginLeft: 10
    }
})