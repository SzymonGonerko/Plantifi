import React from "react";
import { useState } from 'react';
import { StyleSheet, View, Image, Text, Linking } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { IconButton } from "@react-native-material/core";
import AntDesign from "react-native-vector-icons/AntDesign"
import { LongLineSeparator } from './ui/LongLineSeparator';
import { Button } from './ui/Button';
import { SquareButton} from "./ui/SquareButton"
import { globalStyles } from "./globalStyles";

export const RightNavBar = ({goBack, showMenu}) => {
    const [typeAnimation, setTypeAnimation] = useState("fadeInRight")
    const [bgcTypeAnimation, setBgcTypeAnimation] = useState("fadeIn")


    const onPressHandler = () => {
        setTypeAnimation("fadeOutRight")
        setBgcTypeAnimation("fadeOut")
        setTimeout(() => {
            showMenu()
        }, 260)
    }


    return <>
            <View style={{position: "absolute", width: "100%", height: "100%"}}>
            <Animatable.View style={styles.bgc} duration={250} easing="ease-out" animation={bgcTypeAnimation} />
            <Animatable.View style={styles.nav} duration={250} easing="ease-out" animation={typeAnimation}>
                            <View style={styles.avatar}>
                                <IconButton onPress={onPressHandler} style={styles.closeIcon} icon={<AntDesign name={"close"} style={{fontSize: 25}}/>}/>
                                <View style={[styles.imgContainer, {transform: [{translateX: -36}, {translateY: -36}]}]}>
                                    <Image style={[styles.userImg]} resizeMode='cover' source={require("../assets/images/NavBar/User.png")}/>
                                    <Image style={styles.icon} source={require("../assets/images/NavBar/pen.png")} />
                                </View>
                            </View>

                            <View>
                                <Text style={styles.userName}>Anna Kowalska</Text>
                                <Text style={styles.userEmail}>Anna.kowalska@gmail.com</Text>
                            </View>

                            <LongLineSeparator/>

                            <View style={{flex: 1}}>
                                <Button navBtn={true} styleContainer={styles.buttonContainer} styleButton={styles.btn} styleText={styles.buttonText}>
                                    Forum
                                </Button>
                                <Button navBtn={true} styleContainer={styles.buttonContainer} styleButton={styles.btn} styleText={styles.buttonText}>
                                    Artykuły ekspertów
                                </Button>
                                <Button navBtn={true} styleContainer={styles.buttonContainer} styleButton={styles.btn} styleText={styles.buttonText}>
                                    Odkrywaj
                                </Button>
                                <Button navBtn={true} styleContainer={styles.buttonContainer} styleButton={styles.btn} styleText={styles.buttonText}>
                                    Ciekawostki
                                </Button>
                                <Button navBtn={true} styleContainer={styles.buttonContainer} styleButton={styles.btn} styleText={styles.buttonText}>
                                    Moj kalendarz
                                </Button>
                                <LongLineSeparator/>
                                <Button navBtn={true} styleContainer={styles.buttonContainer} styleButton={styles.btn} styleText={styles.buttonText}>
                                    Ustawienia
                                </Button>
                                <Button navBtn={true} styleContainer={styles.buttonContainer} styleButton={styles.btn} styleText={styles.buttonText}>
                                    Pomoc
                                </Button>
                                <Button onPress={() => Linking.openURL('https://www.freeprivacypolicy.com/live/b5c76656-2246-4380-92f4-6c0dbec3b42b')} navBtn={true} styleContainer={styles.buttonContainer} styleButton={styles.btn} styleText={styles.buttonText}>
                                    Polityka prywatności
                                </Button>

                                <LongLineSeparator/>

                                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 20}}>
                                    <SquareButton onPress={() => goBack()} styleContainer={styles.squareBtn} styleButton={{backgroundColor: "white"}} type={"logOut"}/>
                                    <Text style={styles.logOutText}>Wyloguj się</Text>
                                </View>
                            </View>
                        </Animatable.View>
            </View>
    </>
}

const styles = StyleSheet.create({
    bgc: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: globalStyles.backgroundAlfa,
    },
    nav: {
        backgroundColor: "white",
        position: "absolute",
        zIndex: 444,
        height: "100%",
        width: "55%",
        left: "45%",
        elevation: 5,
    },
    avatar: {
        position: "relative",
        width: "100%",
        height: 120,
        marginTop: 20
    },
    closeIcon: {
        position: "absolute",
        top: 10,
        left: 10,
        width: 40, 
        height: 40
    },
    imgContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        padding: 5,  
        borderWidth: 1, 
        borderColor: "#54795E",
        borderRadius: 200
    },
    userImg: {
        width: 74,
        height: 74,
        borderRadius: 100
    },
    icon: {
        position: "absolute",
        bottom: 0,
        right: -20,
        width: 19,
        height: 19
    },
    userName: {
        fontFamily: "NunitoBold",
        textAlign: "center",
        fontSize: 19,
        lineHeight: 27,

    },
    userEmail: {
        fontFamily: "NunitoRegular",
        color: "#3F4246",
        fontSize: 14,
        textAlign: "center"
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "flex-start",
        marginHorizontal: 5
    },
    btn: {
        backgroundColor: "transparent", 
        flexDirection: "row"
    },
    buttonText: {
        fontFamily: "NunitoBold",
        fontSize: 15,
        color: "#000000",
        textAlign: "left",
        flex: 1
    },
    squareBtn: {
        marginLeft: 20, 
        borderWidth: 1.2, 
        borderColor: "#54795E"
    },
    logOutText: {
        fontFamily: "NunitoBold",
        fontSize: 15,
        color: "#54795E",
        paddingLeft: 13
    }

})