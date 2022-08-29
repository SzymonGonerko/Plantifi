import { StyleSheet, Text, View, Dimensions, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { SquareButton } from '../components/ui/SquareButton';
import { LoginForm } from '../components/LoginForm';
import { Separator } from '../components/ui/Separator';
import { CustomIcon } from '../components/ui/CustomIcon';
import { useState } from 'react';



const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height + 200;

export const Login = ({onPressHandlerPrev, onPressThemeBar, onPressShowMainApp}) => {
const [loginText, setLoginText] = useState("Zaloguj się")


const onFocusHandler = () => {
  setLoginText("Cześć!")
}

const onBlurHandler = () => {
  setLoginText("Zaloguj się")
}


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
              style={styles.background}
              imageStyle={styles.img}
              />
              <SquareButton type={"arrow"} onPressThemeBar={onPressThemeBar} onPress={onPressHandlerPrev} styleContainer={styles.btnSqure}/>
          </View>

          <View style={styles.areaLogin }>
            <View style={{transform: [{translateY: -80}]}}>
              <Text style={styles.text}>{loginText}</Text>
              <LoginForm onFocusHandler={onFocusHandler} onBlurHandler={onBlurHandler} onPressShowMainApp={onPressShowMainApp}/>
            </View>
          </View>

          <View style={{transform: [{translateY: -50}]}}>

            <Separator styleText={styles.separatorStyle}>
              Szybkie logowanie
            </Separator>


            <View style={styles.iconsContainer}>
              <CustomIcon sourceImg={require("../assets/icons/Google.png")}/>
              <CustomIcon sourceImg={require("../assets/icons/Facebook.png")}/>
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
    top: 0,
    left: 0,
    zIndex: -2
    },
    container: {
      flex: 1,
      width: windowWidth,
      height: windowHeight,
      backgroundColor: 'white',
    },
    bgcContainer: {
      width: "100%",
      height: "38%",
      borderRadius: 17
  },
  background: {
      height: "100%",
      marginHorizontal: 10,
      marginVertical: 30
  },
  img: {
    borderRadius: 17,
  },
  text: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: 36,
    marginLeft: 10,
    letterSpacing: -1.5
  },
  areaLogin: {
    backgroundColor: "white",
    marginHorizontal: 10,
    borderRadius: 20,
  },
  btnSqure: {
    position: "absolute",
    left: "10%",
    top: "20%"
  },
  iconsContainer: {
    flexDirection: "row", 
    justifyContent: "center", 
    marginTop: 15
  },
  separatorStyle: {
    color: "black", 
    fontFamily: "NunitoBold"
  }
  });
  