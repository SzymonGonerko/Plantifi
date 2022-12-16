import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Pressable, Alert } from 'react-native';
import * as ImagePicker from "expo-image-picker"
import { Camera, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import {APP_PLANTID_API_KEY, APP_PLANTID_API_URL} from '@env'
import {SquareButton} from "../ui/SquareButton"
import { WaitingAnimation } from "../ui/WaitingAnimation";
import { PlantDetails } from "./PlantDetails";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const CustomCamera = ({onPressCamera, onPressHandler}) => {
    const [type, setType] = useState(CameraType.back);
    const cameraRef = useRef()
    const [photo, setPhoto] = useState()
    const [plantsIDResponse, setplantsIDResponse] = useState(false)
    const [dataPlant, setDataPlant] = useState(false)
    const [isStartRequest, setIsStartRequest] = useState(false)

    const setCorrectGrammar = (number) => {
      switch (number) {
        case 8: return "Zostało Ci jeszcze 8 zdjęć." 
        case 7: return "Zostało Ci jeszcze 7 zdjęć."
        case 6: return "Zostało Ci jeszcze 6 zdjęć."
        case 5: return "Zostało Ci jeszcze 5 zdjęć."
        case 4: return "Zostały Ci jeszcze 4 zdjęcia."
        case 3: return "Zostały Ci jeszcze 3 zdjęcia."
        case 2: return "Zostały Ci jeszcze 2 zdjęcia."
        case 1: return "Zostało Ci jeszcze ostatnie zdjęcie! Wykorzystaj je!"
        case 0: return "Wykorzystałeś już wszystkie zdjęcia. Dziękujemy!"
        default: return `Liczba zdjęć do wykorzystania to ${number}`
    }
      }

    const onPressSquare = () => {
      onPressHandler()
      onPressCamera()
    }

    const setupRequestIntialNumber = async (value) => {
      let result
      try {
        const howManyIsAsString = await AsyncStorage.getItem('howMany')
        const data = await value
        if (howManyIsAsString === null) {
          AsyncStorage.setItem('howMany', data)
          result = parseInt(data)
        } else {
          let number = parseInt(howManyIsAsString)
          --number
          AsyncStorage.setItem('howMany', number.toString())
          result = number
        }
      } catch(e) {
        console.log(e)
      }
      return result
    }
    

    
      const toggleCameraType = () => {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
      }

      const takePhoto = async () => {
        const options = {
          quality: 0.8,
          base64: true,
          exif: false
        }
        let newPhoto = await cameraRef.current.takePictureAsync(options)
        setupRequestIntialNumber("6").then((howManyReuqestLeft) => {
          if (howManyReuqestLeft < 0) return Alert.alert(
            "Dziękujemy za...", 
            `skorzystanie z wersji testowej. Mamy nadzieję, że dowiedziałeś/aś się czegoś nowego o roślinach!`,
            [              {
              text: "ok",      
              onPress: () => onPressSquare(),
            },]
            )
          setIsStartRequest(true)
          setPhoto(newPhoto)
  
          const data = {
            api_key: APP_PLANTID_API_KEY,
            images: [newPhoto.base64],
            modifiers: ["crops_fast", "similar_images"],
            plant_language: "pl",
            plant_details: 
              [
              "common_names", 
              "wiki_description",
              "wiki_image",
              ],
          };
  
          fetch(APP_PLANTID_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then(data => {
          if ((data.suggestions[0]?.probability).toFixed(2) * 100 > 40) {
            setDataPlant({
              name: data.suggestions[0]?.plant_details?.common_names[0],
              latin: data.suggestions[0]?.plant_details.scientific_name,
              description: data.suggestions[0]?.plant_details?.wiki_description.value,
              probability: (data.suggestions[0]?.probability).toFixed(2) * 100,
              img: [data.suggestions[0]?.plant_details.wiki_image.value, data.suggestions[0]?.similar_images[0]?.url, data.suggestions[0]?.similar_images[1]?.url],
              howManyReuqestLeft,
            })
            return true
          } else {
            Alert.alert("Niska trafność", `Wynik wyszukiwania ma niską trafność, pamiętaj o poprawnym zrobieniu zdjęcia. ${setCorrectGrammar(howManyReuqestLeft)}`)
            return false
          }

        })       
        .then((isHightProbability) => {
          isHightProbability ? setplantsIDResponse(true) : setplantsIDResponse(false)
          setIsStartRequest(false)
        })
        .catch(() => {
          setplantsIDResponse(false)
          setIsStartRequest(false)
          Alert.alert("Upss...", `aplikacja nie rozpoznała rośliny...pamiętaj o poprawnym zrobieniu zdjęcia. ${setCorrectGrammar(howManyReuqestLeft)}`)
        })   
        })
      }


      const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4,4],
          quality: 1
      })
      if (!result.cancelled) {
        setPhoto(result.uri)
      }
      }



    return <>
    <View style={styles.container}>
        {!plantsIDResponse &&
          <View style={{flex: 1}}>
            {isStartRequest && <WaitingAnimation/>}
            <SquareButton onPress={onPressSquare} type={"arrow"} styleContainer={styles.sqr}/>
            <Camera style={styles.camera} type={type} ratio={"16:9"} ref={cameraRef}>
            
                <Image source={require("../../assets/icons/frame.png")} resizeMode={"contain"} style={styles.frame}/>
                <View style={styles.buttonsContainer}>

                    <View style={styles.wrapperGallery}>
                      <Pressable onPress={pickImage}>
                        <Image style={styles.iconGalerry} source={require("../../assets/icons/camera/gallery.jpg")}/>
                      </Pressable>
                    </View>

                    <TouchableOpacity style={styles.takePhotoItem} onPress={takePhoto}/>
                   
                    
                    <View style={styles.wrapperToggleCamera}>
                      <Pressable onPress={toggleCameraType}>
                        <Image style={styles.iconToggleCamera} source={require("../../assets/icons/camera/arrowCircle.png")}/>
                      </Pressable>  
                    </View>


                </View>
            </Camera>
          </View>
          }

          {plantsIDResponse && dataPlant && <PlantDetails setCorrectGrammar={setCorrectGrammar} data={dataPlant} onPressSquare={onPressSquare}/>}

          

    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      camera: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      frame: {
        width: "70%",
        height: "60%",
        marginBottom: 50
      },
      sqr: {
        position: "absolute", 
        top: 20, 
        left: 20, 
        zIndex: 2
      },
      buttonsContainer: {
        position: "absolute", 
        zIndex: 20, 
        bottom: 20, 
        flexDirection: "row", 
        width: "100%", 
        justifyContent: "space-around", 
        alignItems: "center"
      },
      iconGalerry: {
        width: 40, 
        height: 40, 
        borderRadius: 3
      },
      takePhotoItem: {
        width: 70, 
        height: 70, 
        borderRadius: 200, 
        borderWidth: 3, 
        borderColor: "white"
      },
      iconToggleCamera: {
        width: 26, 
        height: 26,
      },
      wrapperToggleCamera: {
        width: 26, 
        height: 26
      },
      wrapperGallery: {
        width: 40, 
        height: 40
      }
})