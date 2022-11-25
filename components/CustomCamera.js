import React from "react";
import { StyleSheet, Text, View, ImageBackground, Modal, TouchableOpacity, Image, Pressable } from 'react-native';
import * as ImagePicker from "expo-image-picker"
import { Camera, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import {APP_PLANTID_API_KEY, APP_PLANTID_API_URL} from '@env'
import {SquareButton} from "../components/ui/SquareButton"


export const CustomCamera = ({onPressCamera, onPressHandler}) => {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const cameraRef = useRef()
    const [photo, setPhoto] = useState()


    if (!permission) {
        return <View />;
      }
    
      if (!permission.granted) {
        return (
          <View style={{position: "absolute", top: "50%", left: "50%"}}>
            <Text style={{ textAlign: 'center' }}>Platify potrzebuje dostępu do aparatu</Text>
            <Button onPress={requestPermission} title="udziel dostępu" />
          </View>
        );
      }
    
      const toggleCameraType = () => {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
      }

      const takePhoto = async () => {
        const options = {
          quality: 1,
          base64: true,
          exif: false
        }

        let newPhoto = await cameraRef.current.takePictureAsync(options)
        setPhoto(newPhoto)

        const data = {
          api_key: APP_PLANTID_API_KEY,
          images: [newPhoto.base64],
          modifiers: ["crops_fast", "similar_images"],
          plant_language: "pl",
          plant_details: 
            [
            "common_names", "classification",
            "description",
            "taxonomy",
            "treatment",
            "url"
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
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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

      const onPressSquare = () => {
        onPressHandler()
        onPressCamera()
      }


    return <>
    <View style={styles.container}>
            <SquareButton onPress={onPressSquare} type={"arrow"} styleContainer={{position: "absolute", top: 20, left: 20, zIndex: 2}}/>
            <Camera style={styles.camera} type={type} ratio={"16:9"} ref={cameraRef}>
                <Image source={require("../assets/icons/frame.png")} resizeMode={"contain"} style={styles.frame}/>
                <View style={{position: "absolute", zIndex: 20, bottom: 20, flexDirection: "row", width: "100%", justifyContent: "space-around", alignItems: "center"}}>
                    <View style={{width: 40, height: 40}}>
                      <Pressable onPress={pickImage}>
                        <Image style={{width: 40, height: 40, borderRadius: 3}} source={require("../assets/icons/camera/gallery.jpg")}/>
                      </Pressable>
                    </View>

                    <TouchableOpacity style={{width: 70, height: 70, borderRadius: 200, borderWidth: 3, borderColor: "white"}} onPress={takePhoto}/>
                   
                    
                    <View style={{width: 26, height: 26}}>
                      <Pressable onPress={toggleCameraType}>
                        <Image style={{width: 26, height: 26,}} source={require("../assets/icons/camera/arrowCircle.png")}/>
                      </Pressable>
                    </View>

                </View>

            </Camera>
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
})