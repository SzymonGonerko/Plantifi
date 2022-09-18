import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList, Modal} from 'react-native';
import { LongLineSeparator } from './ui/LongLineSeparator';
import { CustomCheckbox } from './CustomCheckbox';


export const AddNewPlants = () => {
    return <>
    <View>
        <LongLineSeparator style={{marginTop: 5, marginBottom: 10}}/>
        <View style={{flexDirection: "column"}}>
            <Text>Dodaj swoje zdjęcia</Text>
            <View></View>
            <CustomCheckbox labelText={"Zapamiętaj zdjęcia z encyklopedii"}/>

        </View>
    </View>
    </>
}