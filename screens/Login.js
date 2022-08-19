import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable, Alert, Button } from 'react-native';
import { useState } from 'react';
import { SquareButton } from '../components/ui/SquareButton';
import { Stack, TextInput, IconButton} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height + 200;

export const Login = ({onPressHandlerPrev}) => {

    return <>
    <View style={styles.container}>
        <View style={styles.bgcContainer}>
            <ImageBackground
            source={require("../assets/images/goslinka.jpg")} 
            resizeMode="center"
            style={styles.background}
            imageStyle={styles.img}
            />
            <SquareButton onPress={onPressHandlerPrev} styleContainer={styles.btnSqure}/>
            <Text style={styles.text}>Zaloguj się</Text>
        </View>
        <View style={styles.areaLogin}>

          <Stack spacing={2} style={{ margin: 16}}>
            <TextInput
              label="Email"
              variant="outlined"
              leadingContainerStyle={{paddingBottom: 20}}
              inputContainerStyle={{height: 48, alignItems: "center"}}
              style={{}}
          />
          <TextInput
            label="Hasło"
            variant="outlined"
            inputContainerStyle={{height: 48, alignItems: "center"}}
            trailing={props => (
              <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
            )}
          />
          </Stack>
        </View>
        

        
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: windowWidth,
      height: windowHeight,
      zIndex: -2,
      backgroundColor: 'red',
      alignItems: "center"

    },
    bgcContainer: {
      position: "relative",
      top: 0,
      left: 0,
      width: "100%",
      height: windowHeight / 2.3,
      borderRadius: 17
  },
  background: {
      position: 'absolute',
      width: windowWidth - 20,
      height: "100%",
      marginHorizontal: 10,
      marginVertical: 30
 
  },
  img: {borderRadius: 17},
  text: {
    position: 'absolute',
    top: windowHeight / 2.8,
    left: 0,
    marginLeft: 20,
    fontFamily: "PlayfairDisplayBold",
    fontSize: 36,
  },
  areaLogin: {
    position: 'absolute',
    backgroundColor: "green",
    top: windowHeight / 2.25,
    bottom: 0,
    left: 8,
    right: 8,
    borderRadius: 20
  },
  btnSqure: {
    position: "absolute",
    left: "10%",
    top: "15%"
  }
  });
  