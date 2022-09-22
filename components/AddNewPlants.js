import { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LongLineSeparator } from './ui/LongLineSeparator';
import { CustomCheckbox } from './CustomCheckbox';
import * as ImagePicker from "expo-image-picker"
import { PickerImage } from './PickerImage';



export const AddNewPlants = ({src}) => {
    const [defaultImg, setDefaultImg] = useState(true)
    const [rooms, setRooms] = useState(["Łazienka", "Sypialnia", "Kuchnia", "Balkon", "Salon/Pokój", "Ogród"])
    const [imagesCollection, setImagesCollection] = useState({
        first: "",
        second: "",
        third: ""
    })

    const pickImage = async (name) => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1
        })
        if (!result.cancelled) {
            setImagesCollection(oldState => {
                let newState
                Object.entries(oldState).forEach(([key, val]) => {
                    if (key === name) {
                        return newState = {...newState, [key]: result.uri}
                    } else {
                        return newState = {...newState, [key]: val}
                    }
                })
                return newState
            })
        }
    }


    return <>
    <View style={{marginHorizontal: 15}}>
        <LongLineSeparator style={{marginTop: 5, marginBottom: 10}}/>
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
            <CustomCheckbox labelText={"Zapamiętaj zdjęcia z encyklopedii"}/>
        </View>
        <LongLineSeparator style={{marginTop: 5, marginBottom: 10}}/>
        <Text style={styles.titleText}>Gdzie znajduje się Twoja roślina?</Text>
        <View>
            {rooms.map(el => {
                return <View>
                    <Text>{el}</Text>
                </View>
            })}
        </View>
    </View>
    </>
}

const styles = StyleSheet.create({
    titleText: {
        fontFamily: "NunitoBold",
        fontSize: 18,
        color: "#36455A"
    }
})