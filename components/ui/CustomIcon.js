import React from "react";
import { StyleSheet, View, ImageBackground, Pressable, Alert} from 'react-native';


export const CustomIcon = ({sourceImg}) => {
    
    const onPressIconHandler = () => {
        Alert.alert("Pracuję nad tym...", "aplikacja jest w fazie testowej. Email: anna.kowalska@gmail.com, Hasło: 1234", [{text: "okey", style: "default"}])
    }

    return <>
        <View style={styles.container}>
            <Pressable onPress={onPressIconHandler}>
                <ImageBackground
                source={sourceImg}
                resizeMode="cover"
                style={{width: 40, height: 40}}
                />
            </Pressable>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 200, 
        width: 50, 
        height: 50, 
        // borderWidth: 2, 
        // borderColor: "#54795E",
        marginHorizontal: 10
    }
})