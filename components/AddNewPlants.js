import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList, Modal} from 'react-native';
import { LongLineSeparator } from './ui/LongLineSeparator';
import { CustomCheckbox } from './CustomCheckbox';
import { CloseCircle } from './ui/CloseCircle';


export const AddNewPlants = ({src}) => {
    return <>
    <View>
        <LongLineSeparator style={{marginTop: 5, marginBottom: 10}}/>
        <View style={{flexDirection: "column"}}>
            <Text>Dodaj swoje zdjęcia</Text>
            <View style={{flexDirection: "row"}}>
                <View style={styles.square}>
                    <Image style={{width: 70, height: 67,borderRadius: 8,}} source={src}/>
                    <CloseCircle/>
                </View>
                <View style={styles.square}>
                    <Image style={{width: 72, height: 69}} source={src}/>
                </View>
                <View style={styles.square}>

                </View>
            </View>
            <CustomCheckbox labelText={"Zapamiętaj zdjęcia z encyklopedii"}/>
        </View>
    </View>
    </>
}

const styles = StyleSheet.create({
    square: {
        position: 'relative',
        width: 72,
        height: 69,
        borderColor: "green",
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 8,
        marginRight: 25,
    }
})