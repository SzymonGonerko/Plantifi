import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList, Modal} from 'react-native';

export const CloseCircle = () => {
    return <>
    <View style={styles.circle}/>
    </>
}

const styles = StyleSheet.create({
    circle: {
        position: "absolute", 
        right: -15, 
        top: -15, 
        width: 30, 
        height: 30, 
        borderRadius: 50, 
        backgroundColor: "red"}
})
