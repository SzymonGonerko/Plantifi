import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import { LongLineSeparator } from './ui/LongLineSeparator';
import { CustomCheckbox } from './CustomCheckbox';
import * as ImagePicker from "expo-image-picker"
import { PickerImage } from './PickerImage';



export const AddNewPlants = ({src}) => {
    const [defaultImg, setDefaultImg] = useState(true)
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
    <ScrollView showsVerticalScrollIndicator={false} style={{height: "42%"}}>
        <LongLineSeparator style={{marginTop: 5, marginBottom: 10}}/>
        <View style={{flexDirection: "column"}}>
            <Text style={styles.titleText}>Dodaj swoje zdjęcia</Text>
            <View style={{flexDirection: "row", marginTop: 20, marginLeft: 20}}>

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
            <View style={{marginLeft: 20}}>
                <CustomCheckbox labelText={"Zapamiętaj zdjęcia z encyklopedii"}/>
            </View>
            
        </View>
        <LongLineSeparator style={{marginTop: 15, marginBottom: 15}}/>
        
        <Text style={styles.titleText}>Gdzie znajduje się Twoja roślina?</Text>
        <View style={{width: "100%", flexDirection: "row", flexWrap: "wrap", marginTop: 19}}>
            {rooms.map((el, i) => {
                return <View key={i} style={[styles.recttangle, (el.isSelected ? styles.selectedRect: null)]}>
                    <Pressable onPress={onPressRoomHandler.bind(this, el.room)} style={styles.pressContainer}>
                        <Text style={[styles.text, (el.isSelected? styles.seclectedText: null)]}>{el.room}</Text>
                    </Pressable>
                </View>
                
            })}
        </View>
    </ScrollView>
    </>
}

const styles = StyleSheet.create({
    titleText: {
        fontFamily: "NunitoBold",
        fontSize: 18,
        color: "#36455A",
        marginLeft: 20
    },
    recttangle: {
        width: 159, 
        height: 40, 
        borderRadius: 8 ,
        marginRight: 10, 
        borderColor: "#9EA09E",
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
        color: "#9EA09E",
        fontFamily: "NunitoBold"
    }
})