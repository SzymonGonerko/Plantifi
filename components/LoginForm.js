import { StyleSheet, View, Alert} from 'react-native';

import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

import { useState } from 'react';
import { OutlinedTextField } from 'rn-material-ui-textfield'
import AntDesign from "react-native-vector-icons/AntDesign"
import Octicons from "react-native-vector-icons/Octicons"
import Feather from "react-native-vector-icons/Feather"
import {Button} from "../components/ui/Button"
import { IconButton } from "@react-native-material/core";
import { CustomCheckbox } from './CustomCheckbox';

export const LoginForm = ({onFocusHandler, onBlurHandler, onPressShowMainApp}) => {
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
        lightColor: '#FF231F7C',
      });
    }
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Pamiętaj o swoich roślinkach 🪴🌾",
        body: 'Pielegnuj swoje krzaczki codziennie 😊 Niektóre z nich wymagają podlania 💦 Pozdrawiamy zespół Plantify',
      },
      trigger: { seconds: 2 },
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
    if (form.password !== "1234") {
        setCorrectPassword(true)
    } else {
        setCorrectPassword(false)
    }
    if (form.password === "1234" && (form.login === "anna.kowalska@gmail.com" || form.login === "Anna.kowalska@gmail.com")) {
        onPressShowMainApp()
        schedulePushNotification()
    }
}

const onPressInfoHandler = () => {
    Alert.alert("Pracuję nad tym...", "aplikacja jest w fazie testowej. Email: anna.kowalska@gmail.com, Hasło: 1234", [{text: "okey", style: "default"}])
}

const setVisiblePassword = () => {
    setSecurePassword(prev => !prev)
}

    return <>
        <View style={styles.container}>
          <OutlinedTextField
            label="email"
            keyboardType="email-address"
            onFocus={onFocusHandler}
            activeLineWidth={1.2}
            onBlur={onBlurHandler}
            baseColor={correctLogin ? "green" : "#64768E"}
            inputContainerStyle={styles.loginInputContainer}
            tintColor={correctLogin ? "green" : "black"}
            title={correctLogin ? "Zweryfikowaliśmy Twój Email!" : ""}
            contentInset={{input: 11}}
            labelTextStyle={styles.loginLabel}
            renderRightAccessory={() => correctLogin && <Octicons name='check-circle' style={styles.circleIcon}/>}
            onChangeText={(e) => onChangeLoginHandler(e)}
            />

          <OutlinedTextField
            label="Hasło"
            baseColor={correctPasword ? "red" : "#64768E"}
            inputContainerStyle={styles.passwordInputContainer}
            keyboardType={"number-pad"}
            activeLineWidth={1.2}
            tintColor={correctPasword ? "red" : "black"}
            title={correctPasword ? "Hasło niepoprawne!" : ""}
            secureTextEntry={securePassword}
            contentInset={{input: 11}}
            labelTextStyle={styles.passwordLabel}
            renderRightAccessory={() => 
                <IconButton onPress={setVisiblePassword} style={styles.iconButton} icon={<Feather name={securePassword ? "eye": "eye-off"} style={{fontSize: 20}}/>} />}
            onChangeText={(e) => onChangePasswordHandler(e)}
            />
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
    passwordInputContainer: {
        height: 45, 
        backgroundColor: "white", 
        borderRadius: 10,
        marginTop: 10
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
        position: "absolute", 
        right: 10, 
        width: 38, 
        height: 35, 
        top: 5
    },
    circleIcon: {
        color: "green", 
        fontSize: 20, 
        marginBottom: 1
    }
})