import { StyleSheet, Text, View, Pressable } from 'react-native';

export const Button = ({children, onPress, styleContainer, styleButton, styleText, icon, navBtn}) => {
    return <>
    <View style={[styles.buttonOuterContainer, styleContainer]}>
        <Pressable 
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed, styleButton] : [styles.buttonInnerContainer, styleButton]}
        onPress={onPress} android_ripple={{color: (navBtn ? "#5da671" : "black")}}
        >
            <Text style={[styles.buttonText, styleText]}>{children}</Text>
            {icon}
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
        position: 'relative',
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