import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Pressable, Animated } from 'react-native';
import { View } from "react-native-animatable";
import { Creator } from "./ui/Creator";
import { Video } from 'expo-av';
import { GithubFigma } from "./GithubFigma";
import { Title } from "./ui/Title";

const config = 
    {
        toValue: 1,
        duration: 600,
        useNativeDriver: true 
    }


export const Team = (props) => {
    const {onPressTeamInfo, visibility} = props
    const video = useRef(null);
    const [creators, setCreators] = useState(
        {
        head: useRef(new Animated.Value(0)).current,
        sg: useRef(new Animated.Value(0)).current,
        kg: useRef(new Animated.Value(0)).current,
        jc: useRef(new Animated.Value(0)).current,
        dk: useRef(new Animated.Value(0)).current,
        ap: useRef(new Animated.Value(0)).current,
        btns: useRef(new Animated.Value(0)).current,
        }
        )

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
        }, 250)
        return () => clearInterval(id)
    }, [])


    return <>
    <View style={[styles.container, {opacity: visibility}]}>
        <Pressable style={{flex: 1, backgroundColor: "#ffffff00"}} onPress={onPressTeamInfo}>
            <Video
                ref={video}
                style={styles.container}
                source={require("../assets/leaves.mp4")}
                shouldPlay
                resizeMode="cover"
                isLooping
            />
            
            <View style={styles.content}>
                <Title visibility={creators.head}/>

                <Creator who={creators.ap} work={"UX/UI Designer"}>Alicja Popławska</Creator>
                <Creator who={creators.kg} work={"UX/UI Designer"}>Klaudia Ginter</Creator>
                <Creator who={creators.jc} work={"UX/UI Designer"}>Jerzy Cwieczkowski</Creator>
                <Creator who={creators.dk} work={"UX/UI Designer"}>Daniel Kujawa</Creator>
                <Creator who={creators.sg} work={"frontend dev"}>Szymon Gonerko</Creator>
            </View>
        </Pressable>
        <GithubFigma btns={creators.btns}/>
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
        backgroundColor: "#ffffff00"
    },
    content: {
        position: "absolute", 
        top: "15%", 
        left: 0, 
        right: 0, 
        bottom: "30%", 
        zIndex: 20, 
        justifyContent: "space-between"
    },
})