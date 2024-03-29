import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { PlantsSeparator } from '../ui/PlantsSeparator';
import { Button } from '../ui/Button';
import { CustomCamera } from './CustomCamera';
import AntDesign from "react-native-vector-icons/AntDesign"
import { IconButton } from "@react-native-material/core";
import { HowManyPhotosLeft } from "../HowManyPhotosLeft";
import { globalStyles } from "../globalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PhotoInstruction = ({onPressCamera}) => {
    const [howManyLeft, setHowManyLeft] = useState(0)
    const [showCamera, setShowCamera] = useState(false)

    const onPressHandler = () => {
      setShowCamera(prev => !prev)
   }

    useEffect(() => {
        const getDataFromStorage = async () => {
            try {
                const howManyIsAsString = await AsyncStorage.getItem('howMany')
                if (howManyIsAsString !== null) {
                    let number = parseInt(howManyIsAsString)
                    number = number - 7
                    setHowManyLeft(Math.abs(number))
                }
              } catch(e) {
                console.log(e)
              }
        }
        getDataFromStorage()
    }, [])



    return <>
    <View style={{height: "100%"}}>
        {!showCamera && <View style={{}}>
            <View style={{}}>
                <ImageBackground source={require("../../assets/images/instructionBackground.png")} style={{position: "absolute" ,width: "100%", height: "100%"}}/>
                <View style={{width: "100%", height: "100%", backgroundColor: "#202327cc"}}/>
            </View>

            <View style={styles.box}>
                <IconButton onPress={onPressCamera} style={{position: "absolute", zIndex: 50, right: 7, top: 7}} icon={<AntDesign name={"close"} style={{fontSize: 25}}/>} />
                <Text style={styles.title}>Jak zrobić poprawne zdjęcie?</Text>

                <View>
                    <PlantsSeparator lineStyle={lines.line} styleContainer={lines.container} styleText={lines.text} onlyText={true}>
                        1
                    </PlantsSeparator>
                    <Text style={styles.text}>Ustaw aparat tak, aby obejmował całą roślinę</Text>
                    <PlantsSeparator lineStyle={lines.line} styleContainer={lines.container} styleText={lines.text} onlyText={true}>
                        2
                    </PlantsSeparator>
                    <Text style={styles.text}>Postaraj się o dobre światło, ale unikaj kompozycji pod światło</Text>
                    <PlantsSeparator lineStyle={lines.line} styleContainer={lines.container} styleText={lines.text} onlyText={true}>
                        3
                    </PlantsSeparator>
                    <Text style={styles.text}>Jeśli aplikacja nie rozpozna rośliny spróbuj zrobić zdjęcie jeszcze raz pod innym kątem</Text>
                    <PlantsSeparator lineStyle={lines.line} styleContainer={lines.container} styleText={lines.text} onlyText={true}>
                        4
                    </PlantsSeparator>
                    <Text style={styles.text}>Poczekaj aż aparat złapie ostrość i zrób zdjęcie</Text>
                </View>

                <HowManyPhotosLeft howManyLeft={howManyLeft}/>


                <Button 
                    onPress={onPressHandler} 
                    styleContainer={{height: 45, marginHorizontal: 20, marginTop: 15}}
                    icon={<AntDesign name='right' style={styles.iconStyle}/> }
                    >
                        Zaczynamy!
                </Button>
            </View>
        </View>}

        {showCamera && <CustomCamera onPressHandler={onPressHandler} onPressCamera={onPressCamera}/>}
    </View>
    </>
}

const styles = StyleSheet.create({
    box: {
        position: "absolute", 
        zIndex: 2,
        justifyContent: "space-around",
        backgroundColor: "white", 
        left: "10%", 
        right: "10%", 
        top: "10%", 
        bottom: "10%",
        borderRadius: 16,
    },
    title: {
        fontFamily: "PlayfairDisplayBold",
        paddingHorizontal: 10,
        fontSize: 30,
        textAlign: "center",
        paddingTop: 30,
    },
    text: {
        paddingHorizontal: 50,
        fontFamily: "NunitoRegular",
        fontSize: 14
    },
    iconStyle: {
        position: "absolute", 
        top: "45%", 
        right: 25, 
        color: "white", 
        fontSize: 18
    },
})

const lines = StyleSheet.create({
    line: {width: "85%"},
    container: {width: "100%"},
    text: {width: "10%", color: globalStyles.mainColor, fontFamily: "PlayfairDisplayBold", fontSize: 23}
})