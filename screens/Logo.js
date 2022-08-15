import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable } from 'react-native';
import * as Animatable from 'react-native-animatable';
const windowWidth = Dimensions.get('window').width + 200;
const windowHeight = Dimensions.get('window').height + 200;

export const Logo = () => {
const [anim, setAnim] = useState("")


const onPressHandler = () => {
    setAnim("bounceOutLeft")
  }

    return <>
    <Animatable.View animation={anim} duration={1000} easing="ease-out" iterationCount={1} style={styles.container}>
        <Pressable onPress={onPressHandler} style={styles.container}>
        <View style={styles.bgcContainer}>
            <View style={styles.bgcFilter}/>
            <ImageBackground
            source={require("../assets/images/background.jpg")} 
            resizeMode="cover"
            style={styles.background}
            />
        </View>
        <View style={styles.logoContainer}>
            <Image
                source={require("../assets/images/logo.png")} 
                resizeMode="contain" 
                style={styles.rootScreen}
            />
        </View>
        <View style={[styles.textContainer, {transform: [{translateX: - windowWidth/4.5}]}]}>
            <Text style={styles.text}>
                powered by UXPlants Team (C) 2022
            </Text>
            <Text style={styles.text}>
                Poject created by Klaudia Ginter
            </Text>
            <Text style={styles.text}>
                Coding by Szymon Gonerko
            </Text>
        </View>
        </Pressable>
    </Animatable.View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        width: windowWidth,
        height: windowHeight
     },
    bgcContainer: {
        position: "absolute",
        width: windowWidth,
        height: windowHeight
    },
    bgcFilter: {
        position: 'absolute',
        zIndex: 2,
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#00000070"
    },
    background: {
        position: 'absolute',
        width: windowWidth,
        height: windowHeight,
    },
    logoContainer: {
        position: 'absolute',
        zIndex: 2
    },
    rootScreen: {
        flex: 1,
        width: windowWidth/ 1.8,
      },
    textContainer: {
        position: "absolute",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        bottom: 10, 
        left: "50%",
        zIndex: 3
    },
    text: {
        color: "white",
        fontSize: 15,
        fontFamily: "NunitoBoldItalic",
        color: "#646C66"
}
})