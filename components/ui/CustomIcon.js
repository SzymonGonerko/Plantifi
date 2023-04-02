import React from "react";
import { StyleSheet, View, ImageBackground, Pressable, Alert} from 'react-native';


export const CustomIcon = ({sourceImg}) => {
    
    const onPressIconHandler = () => {
        Alert.alert("Pracuję nad tym...", `Aktualnie Plantifi nie ma bazy użytkowników. \n\n𝗟𝗼𝗴𝗶𝗻: anna.kowalska@gmail.com, \n𝗛𝗮𝘀𝗹𝗼: 1234`, [{text: "okey", style: "default"}])
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
        marginHorizontal: 10
    }
})