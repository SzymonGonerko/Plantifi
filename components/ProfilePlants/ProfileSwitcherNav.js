import React from "react";
import { StyleSheet, Text, View, Pressable} from 'react-native';
import { globalStyles } from "../globalStyles";

export const ProfileSwitcherNav = ({general, requirements, care, onPress}) => {

    return <>
    <View style={styles.container}>

        <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
            <Pressable onPress={onPress.bind(this, "general")} style={styles.press}>
                <Text style={[styles.defaultText, (general && styles.selected)]}>Ogólne</Text>
                {general && <View style={styles.line}/>}
            </Pressable>
            
            <Pressable onPress={onPress.bind(this, "requirements")} style={styles.press}>
                <Text style={[styles.defaultText, (requirements && styles.selected)]}>Wymagania</Text>
                {requirements && <View style={styles.line}/>}
            </Pressable>
            
            <Pressable onPress={onPress.bind(this, "care")} style={styles.press}>
                <Text style={[styles.defaultText, (care && styles.selected)]}>Pielęgnacja</Text>
                {care && <View style={styles.line}/>}
            </Pressable>
            

        </View>
        
        <View>
            <View style={styles.underlineItem}/>
        </View>

    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        width: "100%", 
        flexDirection: "column",
    },
    press: {
        minWidth: "25%",
        paddingVertical: 10,
        justifyContent: "space-between",
        alignItems: "center",
    },
    defaultText: {
        fontFamily: "NunitoBold",
        fontSize: 16,
        textAlign: "center",
    },
    selected: {
        color: globalStyles.mainColor,
    },
    line: {
        position: "absolute", 
        zIndex: 2 ,
        bottom: -4, 
        width: "60%", 
        height: 4, 
        backgroundColor: globalStyles.mainColor,
        borderRadius: 10
    },
    underlineItem: {
        position: "absolute", 
        left: 0, 
        right: 0,
        zIndex: -2, 
        opacity: 0.1, 
        width: "150%", 
        height: 4, 
        backgroundColor: globalStyles.lineColor
    }
})