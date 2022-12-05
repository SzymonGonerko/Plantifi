import React from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import AntDesign from "react-native-vector-icons/AntDesign"

const windowWidth = Dimensions.get('screen').width;

export const PlantsSeparator = ({styleContainer, styleText, children, onlyText, lineStyle}) => {
    return <>
    <View style={[styles.container, styleContainer]}>
        <View style={styles.lineLeft}/>
        
        <Text style={[styles.text, styleText]}>
            {children}
        </Text>
      
        <View style={[styles.lineRight, {width: (onlyText ? "70%": "58%")}, lineStyle]}/>
        {!onlyText &&<View style={styles.iconContainer}>
            <AntDesign name='right' style={{color: "black", fontSize: 18}}/>
        </View>}
        
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: windowWidth,
    },
    text: {
        color: "black",
        fontFamily: "NunitoBold",
        fontSize: 16,
        width: "25%",
        textAlign: "center"
    },
    lineLeft: {
        backgroundColor: "#737578",
        width: "5%",
        height: 1,
    },
    lineRight: {
        backgroundColor: "#737578",
        width: "58%",
        height: 1,
    },
    iconContainer: {
        justifyContent: "center",
        flexDirection: "row",
        width: "15%"
    }
})