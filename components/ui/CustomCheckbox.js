import React from "react";
import { StyleSheet, Text, View, Pressable} from 'react-native';

import BouncyCheckbox from "react-native-bouncy-checkbox";


export const CustomCheckbox = (props) => {
    const {onPressInfoHandler, onPress, labelText, helper, style} = props
    return <>
            <View style={[styles.container, style]}>
                <BouncyCheckbox 
                innerIconStyle={{borderRadius: 4}}
                fillColor="#54795E"
                text={labelText}
                onPress={() => onPress ? onPress(): null}
                iconStyle={{borderRadius: 4}}
                textStyle={styles.textStyleCheckbox}
                iconImageStyle={styles.iconStyle}
                />
                <Pressable onPress={onPressInfoHandler}>
                    <Text style={styles.passwordForgotten}>
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
        alignItems: "center",
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