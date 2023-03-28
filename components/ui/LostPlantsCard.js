import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image, Pressable} from 'react-native';

export const LostPlantsCard = ({src, name}) => {
    return <>
    <View style={styles.container}>
        <Pressable style={styles.container}>
        <ImageBackground source={src} resizeMode="center" imageStyle={styles.imgs} style={styles.imgs}/>
        <Image resizeMode='contain' style={styles.tomstoneIcon} source={require("../../assets/icons/tombstone.png")}/>
        <Text style={styles.nameText}>{name}</Text>
        </Pressable>
    </View>
    </>
}


const styles = StyleSheet.create({
    container: {
        width: 67,
        height: 64,
        marginRight: 21,
        elevation: 6,
        marginBottom: 16,
    },
    imgs: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
    },
    nameText: {
        bottom: 20,
        fontFamily: "NunitoRegular",
        fontSize: 14,
        textAlign: "center"
    },
    tomstoneIcon: {
        width: 20,
        height: 27,
        top: -20,
        right: 0,
        left: "80%"
    }
})