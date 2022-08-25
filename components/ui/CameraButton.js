import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Button } from 'react-native';

import FontAwesome from "react-native-vector-icons/FontAwesome"

const windowWidth = Dimensions.get('screen').width;

export const CameraButton = () => {


    return <>
    <View style={styles.container}>
        <ImageBackground style={{width: windowWidth, top: -20, bottom: 0,  position: "absolute"}} source={require("../../assets/icons/nav/Union.png")}/>
            <View style={styles.circle}>
                <FontAwesome name={"camera"} color="white" style={{fontSize: 20}}/>
            </View>
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        position: 'relative',
        width: "100%"
    },
    circle: {
        borderRadius: 200,
        backgroundColor: "#54795E",
        padding: 10,
        width: 56,
        height: 56,
        justifyContent: "center",
        alignItems: "center"
    }
})