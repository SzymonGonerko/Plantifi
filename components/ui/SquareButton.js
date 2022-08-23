import { StyleSheet, Text, View, Pressable } from 'react-native';

import AntDesign from "react-native-vector-icons/AntDesign"

export const SquareButton = ({onPress, styleContainer, styleButton, onPressThemeBar}) => {

const onPressButtonHandler = () => {
    onPress()
    onPressThemeBar()
}

    return <>
    <View style={[styles.buttonOuterContainer, styleContainer]}>
        <Pressable 
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed, styleButton] : [styles.buttonInnerContainer, styleButton]}
        onPress={onPressButtonHandler} android_ripple={{color: "#9BA9BC"}}>
           <AntDesign name='left' style={{color: "black", fontSize: 25}}/> 
        </Pressable>
    </View>
    </>
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 8,
        overflow: "hidden",
        width: 48,
        height: 48
    },
    buttonInnerContainer: {
        backgroundColor: "#c6cdd3",
        flex: 1,
        paddingRight: 1,
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
    },
    pressed: {
        opacity: 0.75,
    }
})