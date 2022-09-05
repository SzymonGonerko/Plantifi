import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native';

export const LostPlantsCard = ({src, name}) => {
    return <>
    <View style={styles.container}>
        <ImageBackground source={src} resizeMode="center" imageStyle={styles.imgs} style={styles.imgs}/>
        <Image resizeMode='contain' style={styles.tomstoneIcon} source={require("../../assets/icons/tombstone.png")}/>
        <Text style={styles.nameText}>{name}</Text>
    </View>
    </>
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 67,
        height: 64,
        borderRadius: 100,
        marginRight: 21,
        elevation: 4,
        marginBottom: 16,
    },
    imgs: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
    },
    nameText: {
        position: 'relative',
        bottom: 20,
        fontFamily: "NunitoRegular",
        fontSize: 14,
        textAlign: "center"
    },
    tomstoneIcon: {
        position: 'relative',
        width: 20,
        height: 27,
        top: -20,
        right: 0,
        left: "80%"
    }
})