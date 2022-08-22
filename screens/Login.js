import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable, Alert, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { useState } from 'react';
import { SquareButton } from '../components/ui/SquareButton';
import { Stack, TextInput, IconButton} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { TextField, FilledTextField, OutlinedTextField } from 'rn-material-ui-textfield'
import { LoginForm } from '../components/LoginForm';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height + 200;

export const Login = ({onPressHandlerPrev}) => {
    return <>
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.containerKey}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <View style={styles.bgcContainer}>
            <ImageBackground
            source={require("../assets/images/goslinka.jpg")} 
            resizeMode="center"
            style={styles.background}
            imageStyle={styles.img}
            />
            <SquareButton onPress={onPressHandlerPrev} styleContainer={styles.btnSqure}/>
        </View>
        <View style={styles.areaLogin }>
          <View style={{transform: [{translateY: -60}]}}>
            <Text style={styles.text}>Zaloguj się</Text>
            <LoginForm/>
          </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </>
}

const styles = StyleSheet.create({
  containerKey: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    zIndex: -2
    },
    container: {
      flex: 1,
      width: windowWidth,
      height: windowHeight,
      backgroundColor: '#dddddd',
    },
    bgcContainer: {
      width: "100%",
      height: "35%",
      borderRadius: 17
  },
  background: {
      width: windowWidth - 20,
      height: "100%",
      marginHorizontal: 10,
      marginVertical: 30
  },
  img: {
    borderRadius: 17
  },
  text: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: 36,
    marginLeft: 10,
    letterSpacing: -1.5
  },
  areaLogin: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 10,
    borderRadius: 20
  },
  btnSqure: {
    position: "absolute",
    left: "10%",
    top: "25%"
  }
  });
  