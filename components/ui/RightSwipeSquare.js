import React from "react";
import { StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { globalStyles } from "../globalStyles";


    export const RightSwipeSquare = () => {
        return <View style={styles.container}>
            <MaterialCommunityIcons name='check-circle-outline' style={styles.checkedIcon}/>
            <Text style={styles.text}>Zrobione!</Text>
        </View>
        
    }
    const styles = StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: globalStyles.mainColor,
            width: 109,
            borderRadius: 7
        },
        checkedIcon: {
            fontSize: 30,
            color: "white"
        },
        text: {
            fontFamily: "NunitoBold",
            color: "white",
            fontSize: 16
        }
    })