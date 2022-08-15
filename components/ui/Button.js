import { StyleSheet, Text, View, Pressable } from 'react-native';

export const Button = ({children, onPress, styleContainer, styleButton, styleText}) => {
    return <>
    <View style={[styles.buttonOuterContainer, styleContainer]}>
        <Pressable 
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed, styleButton] : [styles.buttonInnerContainer, styleButton]}
        onPress={onPress} android_ripple={{color: "black"}}>
            <Text style={[styles.buttonText, styleText]}>{children}</Text>
        </Pressable>
    </View>
    </>
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: "#54795E",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        height: 48
    },
    buttonText: {
        fontFamily: "NunitoRegular",
        fontSize: 16,
        color: "white",
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    }
})