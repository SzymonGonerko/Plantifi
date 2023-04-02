import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal} from 'react-native';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { IconButton } from "@react-native-material/core";
import { globalStyles } from '../globalStyles';
import * as Animatable from 'react-native-animatable';

export const PopUpSuccess = ({onPressClose}) => {
    const [typeAnimation, setTypeAnimation] = useState("")

    const onCloseHandler = () => {
        setTypeAnimation("fadeOut")
        setTimeout(() => {
            onPressClose()
        }, 250)
    }

    return <>
            <Animatable.View 
                duration={250} 
                animation={typeAnimation} 
                style={styles.background}
            >
                <View style={styles.container}>
                    <View style={styles.titleLine}>
                        <Text style={styles.title}>Nowy członek rodziny!</Text>
                        <IconButton onPress={onCloseHandler} style={{position: "absolute", right: 20}} icon={<AntDesign name={"close"} style={{fontSize: 25}}/>} />
                    </View>

                    <View style={styles.textLine}>
                        <MaterialCommunityIcons name='check-circle-outline' style={styles.checkedIcon}/>
                        <Text style={styles.defaultText}>Udało Ci się dodać nową roślinę!</Text>
                    </View>
                </View>
            </Animatable.View>

    </>
}

const styles = StyleSheet.create({
    background: {
        position: "absolute", 
        top: 0, 
        bottom: 0, 
        left: 0, 
        right: 0,
        height: "100%",
        width: "100%",
        backgroundColor: globalStyles.backgroundAlfa
    },
    container: {
        position: "absolute", 
        borderTopLeftRadius: 40, 
        borderTopRightRadius: 40,
        bottom: 0, 
        left: 0, 
        right: 0, 
        height: 150, 
        backgroundColor: "white",
    },
    checkedIcon: {
        fontSize: 35,
        color: "#54795E"
    },
    defaultText: {
        fontFamily: "NunitoRegular",
        fontSize: 16,
        color: "#495566",
        marginLeft: 10
    },
    title: {
        fontFamily: "NunitoBold",
        fontSize: 24,
        color: globalStyles.accentFontColor
    },
    titleLine: {
        flexDirection: "row", 
        alignItems: "center", 
        marginTop: 23, 
        marginLeft: 30, 
        marginBottom: 10
    },
    textLine: {
        flexDirection: "row", 
        alignItems: "center", 
        marginLeft: 28
    }
})