import React from "react";
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import { Button } from '../ui/Button';
import { useState } from 'react';
import AntDesign from "react-native-vector-icons/AntDesign"


export const PlantsNeeded = ({userName, howManyPlants}) => {
    const [images, setimages] = useState([
        require("../../assets/images/plants/First.jpg"),
        require("../../assets/images/plants/Second.jpg"),
        require("../../assets/images/plants/Third.jpg"),
      ]);



    return <>
    <View style={styles.container}>
        <Text style={styles.userNameText}>{userName},</Text>
        <Text style={styles.plantsNeededText}>{howManyPlants} Twoje rośliny Cię potrzebują!</Text>
        <FlatList
            keyExtractor={(item) => item}
            horizontal
            data={images}
            renderItem={({ item, _ }) => <Image source={item} style={styles.imgs}/>   }
        />

        <Button
            icon={<AntDesign name='right' style={styles.iconStyle}/> }
            styleContainer={styles.btnStyle}>
                Podejmij działanie
        </Button>
        
    </View>
    
    </>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        marginTop: 22
    },
    imgs: {
        width: 64,
        height: 64,
        borderRadius: 8,
        marginRight: 20,
        marginBottom: 16,
    },
    userNameText: {
        fontFamily: "NunitoBold",
        fontSize: 20,
        lineHeight: 27,
    },
    plantsNeededText: {
        fontFamily: "NunitoRegular",
        fontSize: 16,
        color: "#222E2B",
        marginBottom: 13
    },
    btnStyle: {
        height: 48,
    },
    iconStyle: {
        position: "absolute", 
        top: "45%", 
        right: 25, 
        color: "white", 
        fontSize: 18
    },
})