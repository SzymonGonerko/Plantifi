import React from "react";
import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable, Alert } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { Separator } from '../components/ui/Separator';
import { TextInfo } from '../components/TextInfo';
import * as Animatable from 'react-native-animatable';

const {width, height} = Dimensions.get('screen');

export const Welcome = ({anim, onPressHandlerAnim, onPressTheme}) => {


    const onPressHandler = () => {
        Alert.alert("Wpisz", "aplikacja jest w fazie testowej. Login to: anna.kowalska@gmail.com, hasło to: 1234", [{text: "okey", style: "default"}])
    }

    const onPressLogin = () => {
        onPressHandlerAnim()
        onPressTheme()
        NavigationBar.setVisibilityAsync("visible")
        NavigationBar.setBackgroundColorAsync('white')
        NavigationBar.setPositionAsync('absolute')
    }

    useEffect(() => {
        NavigationBar.setBackgroundColorAsync('transparent')
        NavigationBar.setPositionAsync('absolute')
    }, [])


    return <>
    <Animatable.View animation={anim}  style={styles.container}>
    <Pressable style={styles.container}>
 
        <View style={styles.bgcContainer}>
            <View style={styles.bgcFilter}/>
            <ImageBackground
            source={require("../assets/images/background.jpg")} 
            resizeMode="cover"
            style={styles.background}
            />
        </View>
        <View style={styles.contentContainer}>
            <View style={styles.welcomeText}>
                <Text style={styles.text}>Witaj</Text>
                <Text style={styles.text}>w Plantify</Text>
            </View>
            <View style={styles.btnsContainer}>
                <Button onPress={onPressLogin} styleContainer={{marginHorizontal: 20}}>Zaloguj się</Button>
                <Separator styleContainer={{marginTop: 20}}>Nie masz jeszcze konta?</Separator>
                <Button
                    onPress={onPressHandler}
                    styleContainer={{marginHorizontal: 20, marginTop: 20}} 
                    styleButton={{backgroundColor: "white"}}
                    styleText={{color: "#54795E"}}>
                        Załóż konto
                </Button>
            </View>
            <View style={styles.textContainer}>
                <TextInfo/>
            </View>

        </View>
        </Pressable>
    </Animatable.View>
    </>
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: -1,
        width,
        height,
        justifyContent: "center",
        alignItems: "center",
    },
    bgcContainer: {
        position: "absolute",
        width,
        height,
    },
    bgcFilter: {
        position: 'absolute',
        zIndex: 2,
        width,
        height,
        backgroundColor: "#0d0e2480"
    },
    background: {
        position: 'absolute',
        width,
        height,
    },
    contentContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
        width,
        height,
    },
    welcomeText: {
        position: 'absolute',
        top: "35%",
        bottom: "50%",
        left: "10%",
        right: 0,
        zIndex: 2,
    },
    text: {
        fontSize: 42,
        color: "white",
        lineHeight: 50,
        fontFamily: "PlayfairDisplayBold"
    },
    btnsContainer: {
        position: 'absolute',
        top: "54%",
        left: 0,
        right: 0
    },
    textContainer: {
        position: 'absolute',
        bottom: "10%",
        left: 0,
        width: "100%",
    },
})