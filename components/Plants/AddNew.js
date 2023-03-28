import React from "react";
import { StyleSheet, Text, View} from 'react-native';
import { SquareButton } from '../ui/SquareButton';
import { globalStyles } from "../globalStyles";

export const AddNew = () => {
    return <>
    <View style={styles.container}>
        <Text style={styles.title}>Moje rośliny</Text>
        <View style={styles.wrapper}>
            <Text style={styles.defaultText}>Dodaj</Text>
            <SquareButton type={"add"} styleContainer={{borderWidth: 1, borderColor: globalStyles.mainColor}} styleButton={{backgroundColor: "white"}}/>
        </View>
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 25
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontFamily: "NunitoBold",

    },
    defaultText: {
        fontSize: 17, 
        color: "#54795E",
        fontFamily: "NunitoBold",
        marginRight: 11
    }
})