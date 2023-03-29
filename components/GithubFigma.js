import React from "react";
import { StyleSheet, Text, Pressable, Linking} from 'react-native';
import { View } from "react-native-animatable";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { globalStyles } from "./globalStyles";

export const GithubFigma = ({btns}) => {
    const github = 'https://github.com/SzymonGonerko/Plantify'
    const figma = 'https://www.figma.com/file/9Mjrr6WzPrrUpFpVoT0SNq/Plantify?node-id=0%3A1&t=E8ZnZOnsKwpv0u7g-0'


    return <>
                <View style={[styles.container, {opacity: btns}]}>

                    <Pressable style={[styles.btnContent]} onPress={() => Linking.openURL(github)}>
                        <Text style={styles.btnText}>GitHub</Text>
                        <FontAwesome name="github" size={20} color="#ffffff"/>
                    </Pressable>

                    
                    <Pressable style={[styles.btnContent]} onPress={() => Linking.openURL(figma)}>
                        <Text style={styles.btnText}>Figma</Text>
                        <Feather name="figma" size={20} color="#ffffff"/>
                    </Pressable>
                </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: "13%",
        flexDirection: "row", 
        justifyContent: "space-around", 
        alignItems: "center",
        marginHorizontal: 10,
        backgroundColor: "#ffffff00"
    },
    btnContent: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 8,
        width: "40%", 
        height: 40, 
        backgroundColor: globalStyles.backgroundAlfa,
        borderColor: "#4e7c5b",
        borderWidth: 1,

    },
    btnText: {
        fontFamily: "NunitoRegular",
        fontSize: 14,
        paddingRight: 5,
        color: "#ffffff"
    }

})