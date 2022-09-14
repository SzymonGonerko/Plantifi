import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList, Modal} from 'react-native';

export const ProfileSwitcherNav = () => {
    const [nav, setNav] = useState({
        general: true,
        requirements: false,
        care: false
    })

    const onPressHandler = (name) => {
        setNav(oldState => {
            let newState
            Object.entries(oldState).forEach(([key, _]) => {
                if (key === name) {
                    return newState = {...newState, [key]: true}
                } else {
                     return newState = {...newState, [key]: false}
                }
            })
            return newState
        })
    }


    return <>
    <View style={styles.container}>

        <View style={{flexDirection: "row", justifyContent: "center"}}>
            <Pressable onPress={onPressHandler.bind(this, "general")} style={styles.press}>
                <Text style={[styles.defaultText, (nav.general && styles.selected)]}>Ogólne</Text>
                {nav.general && <View style={styles.line}/>}
            </Pressable>
            
            <Pressable onPress={onPressHandler.bind(this, "requirements")} style={styles.press}>
                <Text style={[styles.defaultText, (nav.requirements && styles.selected)]}>Wymagania</Text>
                {nav.requirements && <View style={styles.line}/>}
            </Pressable>
            
            <Pressable onPress={onPressHandler.bind(this, "care")} style={styles.press}>
                <Text style={[styles.defaultText, (nav.care && styles.selected)]}>Pielęgnacja</Text>
                {nav.care && <View style={styles.line}/>}
            </Pressable>
            

        </View>
        
        <View>
            <View style={{position: "absolute", opacity: 0.1 ,zIndex: -2, width: "100%", height: 4, backgroundColor: "#64768E"}} />
        </View>

    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        width: "100%", 
        flexDirection: "column",
        justifyContent: "space-around"
    },
    press: {
        height: 40,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    defaultText: {
        fontFamily: "NunitoBold",
        fontSize: 16,
        textAlign: "center",
    },
    selected: {
        color: "#54795E",
    },
    line: {
        position: "absolute", 
        zIndex: 2 ,
        bottom: -4, 
        width: "60%", 
        height: 4, 
        backgroundColor: "#54795E",
        borderRadius: 10
    }
})