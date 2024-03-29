import React from "react";
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import { LongLineSeparator } from '../ui/LongLineSeparator';
import { CustomCheckbox } from '../ui/CustomCheckbox';
import * as ImagePicker from "expo-image-picker"
import { PickerImage } from '../PickerImage';
import { DateRemember } from '../ui/DateRemember';
import { RecommendedCare } from './RecommendedCare';
import { globalStyles } from "../globalStyles";
import { LinearGradient } from 'expo-linear-gradient';

import ToggleSwitch from 'toggle-switch-react-native'

const windowHeight = Dimensions.get('window').height;

export const AddNewPlants = ({src, care}) => {
    const [defaultImg, setDefaultImg] = useState(true)
    const [remember, setRemember] = useState(false)
    const [rooms, setRooms] = useState([
        {room: "Balkon ", isSelected: false}, 
        {room: "Kuchnia", isSelected: false}, 
        {room: "Ogród Kuchnia", isSelected: false}, 
        {room: "Salon/Pokój", isSelected: false}, 
        {room: "Sypialnia", isSelected: false}, 
        {room: "Łazienka", isSelected: false}
    ])
    const [imagesCollection, setImagesCollection] = useState({
        first: "",
        second: "",
        third: ""
    })

    const pickImage = async (name) => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,4],
            quality: 1
        })
        if (!result.cancelled) {
            setImagesCollection(oldState => {
                let newState
                Object.entries(oldState).forEach(([key, value]) => {
                    if (key === name) {
                        return newState = {...newState, [key]: result.uri}
                    } else {
                        return newState = {...newState, [key]: value}
                    }
                })
                return newState
            })
        }
    }

    const onPressRoomHandler = (name) => {
    setRooms(oldState => {
        const found = oldState.find(el => el.room === name)
        found.isSelected = !found.isSelected
        const without = oldState.filter((el) => el.room !== found.room)
        const result = [...without, found]
        const newState = result.sort((a,b) => a.room.localeCompare(b.room))
    return [...newState]
    })
    }


    return <>
    <LongLineSeparator style={{marginTop: 5, marginBottom: 10}}/>
    <ScrollView showsVerticalScrollIndicator={false} style={{height: windowHeight/2.5, marginHorizontal: 10}}>
        
        <View style={{flexDirection: "column"}}>
            <Text style={styles.titleText}>Dodaj swoje zdjęcia</Text>
            <View style={{flexDirection: "row", marginTop: 20}}>

                <PickerImage 
                    addPick={pickImage.bind(this, "first")}
                    onCancel={() => (setImagesCollection(prev => ({...prev, first: ""})), setDefaultImg(false))}
                    defaultImg={defaultImg}
                    src={src}
                    uri={imagesCollection.first}
                />

                <PickerImage 
                    addPick={pickImage.bind(this, "second")}
                    onCancel={() => setImagesCollection(prev => ({...prev, second: ""}))}
                    defaultImg={false}
                    uri={imagesCollection.second}
                />

                <PickerImage 
                    addPick={pickImage.bind(this, "third")}
                    onCancel={() => setImagesCollection(prev => ({...prev, third: ""}))}
                    defaultImg={false}
                    uri={imagesCollection.third}
                />
                

            </View>
            <View style={{}}>
                <CustomCheckbox labelText={"Zapamiętaj zdjęcia z encyklopedii"}/>
            </View>
            
        </View>
        <LongLineSeparator style={styles.lineSep}/>
        
        <Text style={styles.titleText}>Gdzie znajduje się Twoja roślina?</Text>
        <View style={styles.rectWrapper}>
            {rooms.map((el, i) => {
                return <View key={i} style={[styles.recttangle, (el.isSelected ? styles.selectedRect: null)]}>
                    <Pressable onPress={onPressRoomHandler.bind(this, el.room)} style={styles.pressContainer}>
                        <Text style={[styles.text, (el.isSelected? styles.seclectedText: null)]}>{el.room}</Text>
                    </Pressable>
                </View>
                
            })}
        </View>
        <View style={styles.toggleItem}>
            <Text style={styles.label}>Ustaw Przypomnienia</Text>
            <ToggleSwitch
                isOn={remember}
                onColor="#54795E"
                offColor="#B1B8C1"
                size="large"
                onToggle={() => setRemember(prev => !prev)}
            />
        </View>

        <View style={{marginBottom: 100}}>
            {remember && <>
            <DateRemember/>
            <RecommendedCare profile={care}/>
            </>}
        </View>

    </ScrollView>
    <LinearGradient
                colors={['transparent', 'rgba(200,200,200,0.8)']}
                style={[{height: 20}, {transform: [{translateY: -20}]}]}
            />
    </>
}

const styles = StyleSheet.create({
    titleText: {
        fontFamily: "NunitoBold",
        fontSize: 18,
        color: globalStyles.accentColor,
    },
    rectWrapper: {
        width: "100%", 
        justifyContent: "space-between", 
        flexDirection: "row", 
        flexWrap: "wrap", 
        marginTop: 19
    },
    toggleItem: {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between", 
        marginTop: 15
    },
    recttangle: {
        width: "48%", 
        height: 40, 
        borderRadius: 8,
        borderColor: globalStyles.greyColor,
        borderWidth: 1,
        marginBottom: 11
    },
    selectedRect: {
        borderWidth: 2,
        borderColor: "green"
    },
    seclectedText: {
        color: "green"
    },
    pressContainer: {
        width: "100%", 
        height: "100%", 
        justifyContent: "center", 
        alignItems: "center"
    },
    text: {
        color: globalStyles.greyColor,
        fontFamily: "NunitoBold"
    },
    label: {
        color: globalStyles.accentFontColor,
        fontFamily: "NunitoBold",
        fontSize: 18,
    },
    lineSep: {
        marginVertical: 15
    }
})