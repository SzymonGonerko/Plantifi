import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList} from 'react-native';
import { plantsCategory } from '../../plantsData';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


export const CategoryCard = ({src, name, onPress, index, isSelected}) => {
    
    


    return <>
    <View style={{flexDirection: "column", alignItems: "center"}}>
        <View style={[styles.container, (isSelected? styles.selectedContainer: null)]}>
            <Pressable 
            style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : [styles.buttonInnerContainer]}
            onPress={() => onPress(index)} android_ripple={{color: "#9BA9BC"}}>

                <ImageBackground source={src} resizeMode="contain" imageStyle={styles.imgs} style={styles.imgs}/>

            </Pressable>
        </View>
        <Text style={[styles.tagText, (isSelected? styles.selectedText: null)]}>{name}</Text>
    </View>

    
    
    </>
}

const styles = StyleSheet.create({
    tagText: {
        fontSize: 12,
        fontFamily: "NunitoRegular",
        textAlign: "center",
        maxWidth: 70,
        marginRight: 10,
        marginLeft: 20,
        lineHeight: 13
    },
    container: {
        position: 'relative',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: 50,
        height: 50,
        marginRight: 10,
        backgroundColor: "white",
        borderRadius: 8,
        marginBottom: 6,
        marginLeft: 20,
        overflow: 'hidden',
        
    },
    selectedContainer: {
        elevation: 4
    },
    imgs: {
        position: 'absolute',
        width: 18,
        height: 18,
    },
    buttonOuterContainer: {
        borderRadius: 8,
        overflow: "hidden",
        width: 48,
        height: 48
    },
    buttonInnerContainer: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        elevation: 1,
    },
    pressed: {
        opacity: 0.75,
    },
    selectedText: {
        color: "green",
        fontFamily: "NunitoBold",
    }
})