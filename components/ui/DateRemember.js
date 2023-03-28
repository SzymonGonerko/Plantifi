import React from "react";
import { Pressable, StyleSheet, Text, View, Alert} from 'react-native';
import { globalStyles } from "../globalStyles";

const days = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];

export const DateRemember = () => {
    const now = new Date();

    const onPressHandler = () => {
        Alert.alert("Pracuję nad tym...", "aplikacja jest w fazie testowej", [{text: "okey", style: "default"}])
    }


    return <>
    <View style={styles.container}>
        <Text style={styles.topText}>
            Rozpocznij od:
        </Text>
        <View style={styles.wrapper}>

            <Text style={styles.bottomText}>
                Dzisiaj ({days[now.getDay()]}, {now.getDate() <= 9 ? "0" + now.getDate(): now.getDate()}.{now.getMonth()+1 <= 9 ? "0" + (now.getMonth()+1): now.getMonth()+1}.{now.getFullYear()})
            </Text>
            <Pressable onPress={onPressHandler}>
                <Text style={styles.changeText}>Zmień</Text>
            </Pressable>
        </View>
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    topText: {
        fontFamily: "NunitoRegular",
        fontSize: 16,
        color: globalStyles.accentColor,
        marginBottom: 5
    },
    bottomText: {
        fontFamily: "NunitoBold",
        fontSize: 18,
        color: globalStyles.accentFontColor
    },
    wrapper: {
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center"
    },
    changeText: {
        fontFamily: "NunitoBold",
        fontSize: 15,
        color: globalStyles.mainColor,
        textDecorationLine: "underline",
        textDecorationColor: globalStyles.mainColor,
        textDecorationStyle: "solid"
    }
})