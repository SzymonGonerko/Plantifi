import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable, Alert} from 'react-native';
import { useState } from 'react';
import { OutlinedTextField } from 'rn-material-ui-textfield'
import { Stack, Button} from "@react-native-material/core";
import AntDesign from "react-native-vector-icons/AntDesign"
import Octicons from "react-native-vector-icons/Octicons"

export const LoginForm = () => {
const [form, setForm] = useState({
    login: "",
    password: ""
})

const onChangeLoginHandler = (e) => {
    setForm(prev => ({login: e, password: prev.password}))
}

const onChangePasswordHandler = (e) => {
    setForm(prev => ({login: prev.login, password: e}))
}

const onSubmitHandler = () => {
    console.log(form)
}


    return <>
        <Stack style={{ margin: 16}}>
          <OutlinedTextField
            label="email"
            keyboardType="email-address"
            baseColor={"#64768E"}
            inputContainerStyle={styles.loginInputContainer}
            tintColor={"green"}
            activeLineWidth={1}
            title={"Zweryfikowaliśmy Twój Email!"}
            contentInset={{input: 7}}
            labelTextStyle={styles.loginLabel}
            renderRightAccessory={() => form.login === "gg" ? <Octicons name='check-circle' style={{color: "green", fontSize: 20, marginBottom: 8, fontWeight: "900"}}/>:null }
            onChangeText={(e) => onChangeLoginHandler(e)}
            />

          <OutlinedTextField
            label="Hasło"
            baseColor={"#64768E"}
            inputContainerStyle={styles.passwordInputContainer}
            tintColor={"black"}
            secureTextEntry={true}
            activeLineWidth={1}
            contentInset={{input: 10}}
            labelTextStyle={styles.passwordLabel}
            onChangeText={(e) => onChangePasswordHandler(e)}
            />
            <Button onPress={onSubmitHandler} title="Button" />
        </Stack>
    </>
}

const styles = StyleSheet.create({
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
        borderRadius: 10
    },
    passwordLabel: {
        position: "relative", 
        top: -3,
        fontFamily: "NunitoRegular"
    }

})