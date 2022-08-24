import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Button } from 'react-native';

import Feather from "react-native-vector-icons/Feather"

export const CameraButton = () => {


    return <>
    <View style={styles.container}>
        <View style={styles.whiteCircle} >
            <View style={styles.circle}>
                <Feather name={"camera"} style={{fontSize: 20}}/>
            </View>
        </View>


    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        position: 'relative'
    },
    whiteCircle: {
        position: 'absolute',
        zIndex: -2,
        top: -14,
        backgroundColor: "white",
        width: 150,
        height: 170,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    circle: {
        borderWidth: 1,
        borderRadius: 200,
        borderColor: "red",
        backgroundColor: "yellow",
        padding: 10,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    }
})