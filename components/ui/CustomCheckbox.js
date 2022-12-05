import React from "react";
import { StyleSheet, Text, View, Pressable} from 'react-native';

import BouncyCheckbox from "react-native-bouncy-checkbox";


export const CustomCheckbox = ({onPressInfoHandler, labelText, helper}) => {
    return <>
            <View style={styles.container}>
                <BouncyCheckbox 
                innerIconStyle={{borderRadius: 4}}
                fillColor="#54795E"
                text={labelText}
                iconStyle={{borderRadius: 4}}
                textStyle={styles.textStyleCheckbox}
                iconImageStyle={styles.iconStyle}
                />
                <Pressable onPress={onPressInfoHandler}>
                    <Text style={[styles.passwordForgotten, {transform: [{translateY: 4}]}]}>
                        {helper}
                    </Text>
                </Pressable>
            </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15
    },
    passwordForgotten: {
        fontSize: 14,
        fontFamily: "NunitoRegular",
        textDecorationLine: "underline",
        color: "#54795E"
    },
    textStyleCheckbox: {
        textDecorationLine: "none", 
        color: "black", 
        fontSize: 14, 
        fontFamily: "NunitoRegular"
    },
    iconStyle: {
        width: 12, 
        height: 12
    }
})