import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList} from 'react-native';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


export const Card = ({src, takenCare, needWater, days, name}) => {
    return <>
    <View style={[styles.container, {marginLeft: 20}]}>
        <View style={styles.tagContainer}>
        {needWater && <MaterialCommunityIcons name='watering-can' style={{color: "#6b6a6a", fontSize: 15, margin: 1}}/>}
            <Text style={styles.tagText}>
                {takenCare && "Zaopiekowana!"}
                {needWater && `za ${days} dni`}
            </Text>
        </View>

        <View style={styles.nameTextContainer}>
            <Text style={styles.nameText}>{name}</Text>
        </View>
        
        <ImageBackground source={src} resizeMode="center" imageStyle={styles.imgs} style={styles.imgs}/>
    </View>
    
    </>
}

const styles = StyleSheet.create({
    tagContainer: {
        position: 'absolute',
        flexDirection: "row",
        top: 8,
        right: 0,
        zIndex: 2,
        backgroundColor: "#ffffff73",
        paddingTop: 4,
        paddingBottom: 3,
        paddingLeft: 11,
        paddingRight: 10,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30
    },
    tagText: {
        fontSize: 12,
        fontFamily: "NunitoRegular"

    },
    container: {
        position: 'relative',
        width: 144,
        height: 204,
        borderRadius: 100,
        marginRight: 10,
        elevation: 4,
        marginBottom: 16,
    },
    imgs: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
    },
    nameTextContainer: {
        position: 'absolute',
        backgroundColor: "#ffffff73",
        zIndex: 2,
        bottom: 0,
        left: 0,
        right: 0
    },
    nameText: {
        fontSize: 14,
        fontFamily: "NunitoBold",
        textAlign: "center",
        paddingTop: 5, 
        paddingBottom: 8,
        paddingHorizontal: 4
    }
})