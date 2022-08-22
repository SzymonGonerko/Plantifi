import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable, Alert, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { useState } from 'react';
import { OutlinedTextField } from 'rn-material-ui-textfield'
import { Stack} from "@react-native-material/core";
import AntDesign from "react-native-vector-icons/AntDesign"
import Octicons from "react-native-vector-icons/Octicons"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {Button} from "../components/ui/Button"

export const LoginForm = () => {
const [correctLogin, setCorrectLogin] = useState(false)
const [toggleCheckBox, setToggleCheckBox] = useState(false)
const [form, setForm] = useState({
    login: "",
    password: ""
})

const onChangeLoginHandler = (e) => {
    setForm(prev => ({login: e, password: prev.password}))
    if (e === "anna.kowalska@gmail.com") {
        setCorrectLogin(true)
    } else {setCorrectLogin(false)}
}

const onChangePasswordHandler = (e) => {
    setForm(prev => ({login: prev.login, password: e}))
}

const onSubmitHandler = () => {
    console.log(form)
}


    return <>
        <View style={styles.container}>
          <OutlinedTextField
            label="email"
            keyboardType="email-address"
            baseColor={correctLogin ? "green" : "#64768E"}
            inputContainerStyle={styles.loginInputContainer}
            tintColor={correctLogin ? "green" : "black"}
            activeLineWidth={1}
            title={correctLogin ? "Zweryfikowaliśmy Twój Email!" : ""}
            contentInset={{input: 12}}
            labelTextStyle={styles.loginLabel}
            renderRightAccessory={() => correctLogin && <Octicons name='check-circle' style={{color: "green", fontSize: 20, marginBottom: 2, fontWeight: "900"}}/>}
            onChangeText={(e) => onChangeLoginHandler(e)}
            />

          <OutlinedTextField
            label="Hasło"
            baseColor={"#64768E"}
            inputContainerStyle={styles.passwordInputContainer}
            tintColor={"black"}
            secureTextEntry={true}
            activeLineWidth={1}
            contentInset={{input: 12}}
            labelTextStyle={styles.passwordLabel}
            onChangeText={(e) => onChangePasswordHandler(e)}
            />
            <View style={styles.checkboxContainer}>
                <BouncyCheckbox 
                innerIconStyle={{borderRadius: 4}}
                fillColor="#54795E"
                text="Zapamiętaj mnie"
                iconStyle={{borderRadius: 4}}
                textStyle={{textDecorationLine: "none", color: "black", fontSize: 14, fontFamily: "NunitoRegular"}}
                iconImageStyle={{width: 12, height: 12}}
                />
            <Pressable>
                <Text style={[styles.passwordForgotten, {transform: [{translateY: 4}]}]}>Zapomniałem hasła</Text>
            </Pressable>
            </View>
            <Button onPress={onSubmitHandler} styleContainer={{height: 48, marginTop: 30}}>Zaczynamy!</Button>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 44,
        marginHorizontal: 20,
        justifyContent: "space-between",
        height: "50%",
    },
    checkboxContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    passwordForgotten: {
        fontSize: 14,
        fontFamily: "NunitoRegular",
        textDecorationLine: "underline",
        color: "#54795E"

    },
    loginInputContainer: {
        height: 48 , 
        backgroundColor: "white", 
        borderRadius: 10,
    },
    loginLabel: {
        position: "relative", 
        top: -3,
        fontFamily: "NunitoRegular",
    },
    passwordInputContainer: {
        height: 48, 
        backgroundColor: "white", 
        borderRadius: 10,
        marginTop: 10
    },
    passwordLabel: {
        position: "relative", 
        top: -3,
        fontFamily: "NunitoRegular"
    }

})