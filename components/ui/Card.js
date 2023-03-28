import React from "react";
import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable} from 'react-native';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { ProfilePlants } from '../ProfilePlants/ProfilePlants';
import { PopUpSuccess } from './PopUpSuccess';
import { globalStyles } from "../globalStyles";


export const Card = ({src, takenCare, needWater, days, name, description, cardStyle, liked, profile}) => {
    const [profileModal, setProfileModal] = useState(false)
    const [addedNew, setAddedNew] = useState(false)


    const addPlantsToCollection = () => {
        setProfileModal(false)
        setAddedNew(true)
    }

    return <>
    <View style={[styles.container, cardStyle]}>
        <Pressable onPress={() => (setProfileModal(true))}>
            <View style={styles.tagContainer}>
            {needWater && <MaterialCommunityIcons name='watering-can' style={{color: "#6b6a6a", fontSize: 15, margin: 1}}/>}
            {liked && <AntDesign name='heart' style={{color: "black", fontSize: 11, margin: 1}}/>}
                <Text style={styles.tagText}>
                    {description} {liked}
                    {takenCare && "Zaopiekowana!"}
                    {needWater && `za ${days} dni`}
                </Text>
            </View>

            <View style={styles.nameTextContainer}>
                <Text style={styles.nameText}>{name}</Text>
            </View>
            
            <ImageBackground source={src} resizeMode="cover" imageStyle={styles.imgs} style={styles.imgs}/>
        </Pressable>
    </View>
    <ProfilePlants 
    onPressButtonSquare={() => setProfileModal(false)}
    src={src}
    name={name}
    profile={profile}
    addNewPlantsToCollecton={addPlantsToCollection}
    isVisible={profileModal}/>

    {addedNew && <PopUpSuccess onPressClose={() => setAddedNew(false)}/>}
    </>
}

const styles = StyleSheet.create({
    modal: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        backgroundColor: "red"
    },
    tagContainer: {
        position: 'absolute',
        flexDirection: "row",
        top: 8,
        right: 0,
        zIndex: 2,
        backgroundColor: globalStyles.tagColor,
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
        width: 144,
        height: 204,
        borderRadius: 8,
        marginRight: 10,
        elevation: 4,
        marginBottom: 16,
        marginLeft: 20
    },
    imgs: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
    },
    nameTextContainer: {
        position: 'absolute',
        backgroundColor: globalStyles.tagColor,
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