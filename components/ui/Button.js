import { StyleSheet, Text, View, Pressable } from 'react-native';

export const Button = (props) => {
    const {children, onPress, styleContainer, styleButton, styleText, icon, navBtn, disable} = props
    return <>
    <View style={[styles.buttonOuterContainer, styleContainer]}>
        <Pressable 
            style={({pressed}) => pressed ? 
            [styles.buttonInnerContainer, styles.pressed, styleButton] : [styles.buttonInnerContainer, styleButton, disable? styles.disable:null]}
            onPress={onPress} 
            android_ripple={{color: (navBtn ? "#a5a5a5" : "black")}}
        >
            <Text style={[styles.buttonText, styleText, disable? styles.disableText: null]}>{children}</Text>
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
    },
    disable: {
        backgroundColor: "#324a37",
    },
    disableText: {
        color: "gray",
    }
})