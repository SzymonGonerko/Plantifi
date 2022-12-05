import React from "react";
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from "@react-native-material/core";

export const CicleProgress = () => {
    return <>
            <View style={styles.container}>
                <ActivityIndicator size={60} color="#35c45c" />
            </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        position: "absolute", 
        zIndex: 5, 
        top: 0, 
        bottom: 0, 
        left: 0, 
        right: 0, 
        backgroundColor: "#357c48a1", 
        justifyContent: "center", 
        alignItems: "center"
    }
})