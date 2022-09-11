import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList, ScrollView} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { IconButton } from "@react-native-material/core";

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

export const Slider = () => {
    return <>
            <View style={styles.sliderContainer}>
                {alphabet.map(el => {
                    return <IconButton style={styles.icon} icon={<Text style={styles.letter}>{el}</Text>}/>
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
    letter: {
        textAlign: "center",
        fontFamily: "NunitoBold",
        fontSize: 16,
        color: "#9EA09E",
    }
})