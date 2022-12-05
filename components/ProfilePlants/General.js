import React from "react";
import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList, Modal, ScrollView} from 'react-native';
import { LongLineSeparator } from '../ui/LongLineSeparator';

import AntDesign from "react-native-vector-icons/AntDesign"

export const General = ({profile}) => {

    return <>
        <View style={{height: "50%"}}>

            <View style={styles.tagContainer}>

                <View style={styles.tag}>
                    <Text style={[styles.tagText, {textAlign: "left", marginLeft: 10}]}>Typ</Text>
                    <View style={styles.tagParam}>
                        {profile.type === "łatwa pielęgnacja" ? <Image style={styles.innerIcon} resizeMode={"contain"} source={require("../../assets/icons/exploreIcons/Easy.png")}/>: null}
                        {profile.type === "do łazienki" ? <Image style={styles.innerIcon} source={require("../../assets/icons/exploreIcons/bathroomIcon.png")}/>: null}
                        {profile.type === "lubiące słońce" ? <Image style={styles.innerIcon} source={require("../../assets/icons/exploreIcons/Sun.png")}/>: null}
                        {profile.type === "przyjazne zwierzętom" ? <Image style={styles.innerIcon} source={require("../../assets/icons/exploreIcons/Animals.png")}/>: null}
                        <Text style={styles.defaultText}>{profile.type}</Text>
                    </View>
                </View>

                <View style={styles.tag}>
                    <Text style={styles.tagText}>Rozmiar</Text>
                    <View style={styles.tagParam}>
                        <Image style={styles.innerIcon} source={require("../../assets/icons/exploreIcons/sizeIcon.png")}/>
                        <Text style={styles.defaultText}>{profile.size}</Text>
                    </View>
                </View>

                <View style={styles.tag}>
                    <Text style={styles.tagText}>Opieka</Text>
                    <View style={styles.tagParam}>
                        <AntDesign name='dotchart' style={styles.iconStyle}/>
                        <Text style={styles.defaultText}>{profile.care}</Text>
                    </View>
                </View>

            </View>
            <LongLineSeparator style={{marginTop: 10}}/>
            <Text style={styles.textTitleDescription}>OPIS</Text>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Text style={styles.textDescription}>
                {profile.description}
                </Text>
            </ScrollView>

        </View>

    
    </>
}

const styles = StyleSheet.create({
    tagContainer: {
        flexDirection: "row", 
        justifyContent: "space-between",
        marginTop: 20,
    },
    tag: {
        flexDirection: "column", 
        width: "33%"
    },
    tagText: {
        textTransform: "uppercase",
        fontSize: 14,
        fontFamily: "NunitoBold",
        textAlign: "center"
    },
    innerIcon: {
        width: 21,
        height: 21
    },
    tagParam: {
        marginTop: 6,
        flexDirection: "row", 
        justifyContent: "center",
    },
    defaultText: {
        fontFamily: "NunitoRegular",
        fontSize: 14,
        color: "#6A6F7D",
        marginLeft: 5
    },
    textTitleDescription:{
        fontFamily: "NunitoBold",
        fontSize: 14,
        marginBottom: 10,
        marginLeft: 7,
    },
    textDescription: {
        fontFamily: "NunitoRegular",
        marginLeft: 7,
        lineHeight: 19,
        fontSize: 14,
        color: "#495566",
        letterSpacing: 0.5,
        height: "100%"
    },
    iconStyle: {
        color: "#54795E", 
        fontSize: 18
    },
})