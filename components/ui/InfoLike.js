import React, { useState  } from "react";
import { StyleSheet, Text, ImageBackground, Modal} from 'react-native';
import { View } from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather"


export const InfoLike = ({name, opacity}) => {
    return <>
        <View style={[styles.container, {opacity}]}>
            <View style={styles.check}>
                <Feather name={"check"} color={"white"} style={styles.icon}/>
            </View>
            <View style={{flexDirection:"column", paddingLeft: 20}}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.added}>Dodano do ulubionych!</Text>
            </View>
        </View>
    
    </>
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        zIndex: 3, 
        top: "45%", 
        left: "10%", 
        right: "10%", 
        height: 90, 
        backgroundColor: "#ffffff",
        borderRadius: 16,
        elevation: 50
    },
    icon: {
        fontSize: 20, 
        marginTop: 5
    },
    name: {
        fontFamily: "NunitoRegular",
        fontSize: 14,
        color: "#495566"
    },
    added: {
        fontFamily: "NunitoBold",
        fontSize: 18,

    },
    check: {
        justifyContent: "center", 
        alignItems: "center",
        width: 30, 
        height: 30, 
        backgroundColor: "#54795E",
        borderRadius: 200
    },
})