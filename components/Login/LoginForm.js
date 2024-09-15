import React, { useState, useRef } from "react";
import { StyleSheet, View, Alert, TextInput, Text, Animated, Platform} from 'react-native';

import * as Notifications from 'expo-notifications';
import * as Animatable from 'react-native-animatable';
import { globalStyles } from "../globalStyles";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

import {Button} from "../ui/Button"
import { IconButton } from "@react-native-material/core";
import { CustomCheckbox } from '../ui/CustomCheckbox';
import AntDesign from "react-native-vector-icons/AntDesign"
import Octicons from "react-native-vector-icons/Octicons"
import Feather from "react-native-vector-icons/Feather"

export const LoginForm = ({onFocusHandler, onBlurHandler, onPressShowMainApp}) => {
const emailLabel = useRef(new Animated.Value(14)).current
const passwordLabel = useRef(new Animated.Value(14)).current
const firstRef = useRef();
const secondRef = useRef();
const [correctLogin, setCorrectLogin] = useState(false)
const [correctPasword, setCorrectPassword] = useState(false)
const [securePassword, setSecurePassword] = useState(true)
const [form, setForm] = useState({
    login: "",
    password: ""
})

async function schedulePushNotification() {
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
      });
    }
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Twoje roślinki Cię potrzebują!",
        body: 'Wygląda na to, że niektóre roślinki wymagają Twojej uwagi. 🤗 Zaopiekuj się nimi!',

      },
      trigger: { seconds: 60 },
    });
  }
  


const onChangeLoginHandler = (e) => {
    setForm(prev => ({login: e, password: prev.password}))
    if (e === "anna.kowalska@gmail.com" || e === "Anna.kowalska@gmail.com") {
        setCorrectLogin(true)
    } else {setCorrectLogin(false)}
}

const onChangePasswordHandler = (e) => {
    setCorrectPassword(false)
    setForm(prev => ({login: prev.login, password: e}))
}

const onSubmitHandler = () => {
    const correctLogin = form.login === "anna.kowalska@gmail.com" || form.login === "Anna.kowalska@gmail.com"
    if (form.password !== "1234") setCorrectPassword(true)
    else setCorrectPassword(false)
    if (form.password === "1234" && correctLogin) {
        onPressShowMainApp()
        schedulePushNotification()
    }
}

const onPressInfoHandler = () => {
    Alert.alert("Pracuję nad tym...", `Aktualnie Plantifi nie ma bazy użytkowników. \n\n𝗟𝗼𝗴𝗶𝗻: anna.kowalska@gmail.com, \n𝗛𝗮𝘀𝗹𝗼: 1234`, [{text: "okey", style: "default"}])
}

const setVisiblePassword = () => {
    setSecurePassword(prev => !prev)
}

const blur = () => {
    if (form.login == "") {
        Animated.timing(emailLabel, {
            toValue: 14,
            duration: 100,
            useNativeDriver: true
          }).start(() => {})
    }
    if (form.password == "") {
        Animated.timing(passwordLabel, {
            toValue: 14,
            duration: 100,
            useNativeDriver: true
          }).start(() => {})
    }
    onBlurHandler()
}

const focuseHandlerLogin = () => {
    onFocusHandler()
    Animated.timing(emailLabel, {
        toValue: -12,
        duration: 100,
        useNativeDriver: true
      }).start(() => {})
}

const focuseHandlerPassword = () => {
    onFocusHandler()
    Animated.timing(passwordLabel, {
        toValue: -12,
        duration: 100,
        useNativeDriver: true
      }).start(() => {})
}

    return <>
        <View style={styles.container}>

        <View style={{marginBottom: 20}}>
            <Animatable.View style={[styles.labelContainer, {transform: [{translateY: emailLabel}]}]}>
                <Text style={{fontFamily: "NunitoRegular", color: globalStyles.accentColor}}>Email</Text>
            </Animatable.View>
            <View style={styles.inputContainer}>
                <TextInput
                    label="Email"
                    ref={firstRef}
                    mode="outlined"
                    inputMode="email"
                    cursorColor={"black"}
                    keyboardType="email-address"
                    returnKeyType="next"
                    onFocus={focuseHandlerLogin}
                    onBlur={blur}
                    style={{width: "85%", height: "100%"}}
                    onChangeText={e => onChangeLoginHandler(e)}
                    onSubmitEditing={(e) => {
                        secondRef.current.focus();
                      }}
                />
                <View style={styles.iconsContainer}>
                {correctLogin && <Octicons name='check-circle' style={styles.circleIcon}/>}
                </View>
            </View>
        </View>


        <View style={{marginBottom: 20}}>
            <Animatable.View style={[styles.labelContainer, {transform: [{translateY: passwordLabel}]}]}>
                <Text style={{fontFamily: "NunitoRegular", color: globalStyles.accentColor}}>Hasło</Text>
            </Animatable.View>
            <View style={styles.inputContainer}>
                <TextInput
                    label={"Hasło"}
                    ref={secondRef}
                    mode={"outlined"}
                    inputMode={"decimal"}
                    autoComplete={"current-password"}
                    secureTextEntry={securePassword ? true:false}
                    cursorColor={"black"}
                    returnKeyType={"send"}
                    onSubmitEditing={onSubmitHandler}
                    onFocus={focuseHandlerPassword}
                    onBlur={blur}
                    style={{width: "85%", height: "100%"}}
                    onChangeText={e => onChangePasswordHandler(e)}
                    
                />
                <View style={styles.iconsContainer}>
                    <IconButton onPress={setVisiblePassword} style={styles.iconButton} icon={<Feather name={securePassword ? "eye": "eye-off"} style={{fontSize: 20}}/>} />
                </View>
            </View>
        </View>

            <CustomCheckbox 
                onPressInfoHandler={onPressInfoHandler}
                helper={"Zapomniałem hasła"}
                labelText={"Zapamiętaj mnie"} />
            <Button 
                onPress={onSubmitHandler} 
                styleContainer={{height: 48, marginTop: 25}}
                icon={<AntDesign name='right' style={styles.iconStyle}/> }
                >
                    Zaczynamy!
            </Button>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 55,
        marginHorizontal: 20,
        justifyContent: "space-between",
    },
    passwordForgotten: {
        fontSize: 14,
        fontFamily: "NunitoRegular",
        textDecorationLine: "underline",
        color: "#54795E"
    },
    loginInputContainer: {
        height: 45 , 
        backgroundColor: "white",
    },
    loginLabel: {
        position: "relative", 
        top: -3,
        fontFamily: "NunitoRegular",
    },
    passwordLabel: {
        position: "relative", 
        top: -3,
        fontFamily: "NunitoRegular"
    },
    iconStyle: {
        position: "absolute", 
        top: "45%", 
        right: 25, 
        color: "white", 
        fontSize: 18
    },
    iconButton: {
        width: 38, 
        height: 35, 
    },
    circleIcon: {
        color: globalStyles.successColor, 
        fontSize: 20, 
        marginBottom: 1
    },
    labelContainer: {
        fontFamily: "NunitoRegular",
        backgroundColor: "white",
        alignSelf: "flex-start",
        paddingHorizontal: 3,
        marginStart: 10,
        zIndex: 1,
        elevation: 1,
        shadowColor: "white",
        position: "absolute",
    },
    iconsContainer: {
        width: "15%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        zIndex: 0,
        borderColor: globalStyles.accentColor,
        display: "flex",
        flexWrap: "wrap",
        height: 48,
        width: "100%",
        alignContent: "space-between"
    },
})