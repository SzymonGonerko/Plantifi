import React from "react";
import { StyleSheet, Text, View} from 'react-native';

export const HowManyPhotosLeft = ({howManyLeft}) => {
    return <>
                <View style={styles.container}>
                    <View style={styles.line}/>
                    <Text style={styles.text}>Twoje zdjęcia:</Text>
                    <View style={styles.box}>
                        <Text style={styles.number}>{howManyLeft < 7 ? howManyLeft : 7}/7</Text>
                    </View>
                </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        alignItems: "center", 
        marginVertical: 2,
        marginTop: 15
    },
    line: {
        height: 1, 
        width: "25%", 
        backgroundColor: "#54795E"
    },
    box: {
        borderColor: "#54795E", 
        borderWidth: 2, 
        justifyContent: "center", 
        paddingHorizontal: 14, 
        paddingVertical: 8, 
        borderRadius: 10
    },
    text: {
        paddingHorizontal: 10, 
        fontFamily: "NunitoBold", 
        color: "#54795E"
    },
    number: {
        fontFamily: "NunitoBold",
        fontSize: 16,
        color: "#54795E"

    }
})