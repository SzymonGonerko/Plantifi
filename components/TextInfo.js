import React from "react";
import { StyleSheet, Text, Pressable, Alert } from 'react-native';


export const TextInfo = () => {

    const onPressHandler = () => {
        Alert.alert("Pracuję nad tym", "aplikacja jest w fazie testowej. Kliknij zaloguj się", [{text: "okey", style: "default"}])
    }

    return <>
        <Text style={[styles.defaultText]}>Szybki zastrzyk wiedzy?</Text>
        <Pressable onPress={onPressHandler}>
            <Text style={[styles.defaultText, styles.guestText]}>
                Wejdź jako gość
            </Text>
        </Pressable>
        <Text style={[styles.defaultText, styles.textAuthors]}>
            powered by UXPlants Team (C) 2022
        </Text>
        <Text style={[styles.defaultText, styles.textAuthors]}>
            Project created by Klaudia Ginter
        </Text>
        <Text style={[styles.defaultText, styles.textAuthors]}>
            Coded by Szymon Gonerko
        </Text>
    </>
}

const styles = StyleSheet.create({
    defaultText: {
        fontFamily: "NunitoRegular",
        textAlign: "center",
        color: "white",
        fontSize: 12
    },
    guestText: {
        fontFamily: "NunitoBold",
        textDecorationLine: "underline",
        marginVertical: 15
    },
    textAuthors: {
       fontFamily: "NunitoItalic"
    }
})