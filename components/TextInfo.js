import React from "react";
import { StyleSheet, Text, Pressable, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const TextInfo = ({onPressTeamInfo}) => {

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

        <Pressable style={styles.teamsContainer} onPress={onPressTeamInfo}>
            <Text style={[styles.defaultText, styles.textTeam]}>
                Plantifi© Team 2023
            </Text>
            <FontAwesome name="info-circle" size={11} color="#54795E"/>
        </Pressable>


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
    textTeam: {
       fontFamily: "NunitoItalic",
       fontSize: 15,
       textDecorationLine: "underline"
    },
    teamsContainer: {
        flexDirection: "row", 
        justifyContent: "center", 
        paddingLeft: 11
    }
})