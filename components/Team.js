import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, Pressable, Image, Animated } from 'react-native';
import { View } from "react-native-animatable";
import { Creator } from "./ui/Creator";

const config = 
    {
        toValue: 1,
        duration: 400,
        useNativeDriver: true 
    }


export const Team = (props) => {
    const {onPressTeamInfo, visibility} = props
    const [creators, setCreators] = useState({
        kg: useRef(new Animated.Value(0)).current,
        jc: useRef(new Animated.Value(0)).current,
        dk: useRef(new Animated.Value(0)).current,
        ap: useRef(new Animated.Value(0)).current,
        sg: useRef(new Animated.Value(0)).current,
    })

    useEffect(() => {
        let counter = -1
        const id = setInterval(() => {
            counter++
            try {
                if (counter < Object.entries(creators).length) {
                    Animated.timing(Object.entries(creators)[counter][1], config).start()
                    }
            } catch (error) {
                console.log(error)
            }
        }, 200)
        return () => clearInterval(id)
    }, [])


    return <>
    <View style={[styles.container, {opacity: visibility}]}>
        <Pressable style={{flex: 1}} onPress={onPressTeamInfo}>
            <Image resizeMode="cover" source={require("../assets/images/background.jpg")} blurRadius={10}/>
            
            <View style={styles.content}>
                <Text style={styles.title}>Plantify</Text>
                <Creator who={creators.sg} work={"frontend dev"}>Szymon Gonerko</Creator>
                <Creator who={creators.jc} work={"UX/UI Designer"}>Jerzy Cwieczkowski</Creator>
                <Creator who={creators.dk} work={"UX/UI Designer"}>Daniel Kujawa</Creator>
                <Creator who={creators.ap} work={"UX/UI Designer"}>Alicja Popławska</Creator>
                <Creator who={creators.kg} work={"UX/UI Designer"}>Klaudia Ginter</Creator>
            </View>
            
            

        </Pressable>
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    content: {
        position: "absolute", 
        top: "20%", 
        left: 0, 
        right: 0, 
        bottom: "25%", 
        zIndex: 20, 
        justifyContent: "space-between"
    },
    title: {
        color: "white", 
        fontSize: 55, 
        textAlign: "center", 
        fontFamily: "PlayfairDisplayRegular", 
        letterSpacing: -2,
    }
})