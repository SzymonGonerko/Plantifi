import React from "react";
import { StyleSheet, Text, View} from 'react-native';
import { IconButton } from "@react-native-material/core";
import AntDesign from "react-native-vector-icons/AntDesign"
import { globalStyles } from "../globalStyles";

const alphabet = ["X","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

export const Slider = ({onPress}) => {
    return <>
            <View style={styles.sliderContainer}>
                {alphabet.map((el, i) => {
                    if (i === 0) {
                        return <IconButton key={i} onPress={() => onPress(el)} style={styles.icon} icon={<AntDesign name='closecircle' style={styles.close}/>}/>
                    } else {
                        return <IconButton key={i} onPress={() => onPress(el, i)} style={styles.icon} icon={<Text style={styles.letter}>{el}</Text>}/>
                    }
                    
                })}
            </View>
    </>
}

const styles = StyleSheet.create({
    sliderContainer: {
        width: "10%", 
        flexDirection: "column",
        alignItems: "center"
    },
    icon: {
        width: 30,
        height: 30,
    },
    close: {
        fontSize: 20,
        color: globalStyles.accentFontColor,
    },
    letter: {
        textAlign: "center",
        fontFamily: "NunitoBold",
        fontSize: 16,
        color: globalStyles.accentFontColor,
    }
})