import { StyleSheet, Text, View, ImageBackground, Modal, TouchableOpacity, Image, Pressable } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';

export const CustomCamera = () => {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();


    if (!permission) {
        return <View />;
      }
    
      if (!permission.granted) {
        return (
          <View>
            <Text style={{ textAlign: 'center' }}>Platify potrzebuje dostępu do aparatu</Text>
            <Button onPress={requestPermission} title="udziel dostępu" />
          </View>
        );
      }
    
      function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
      }

    return <>
    <View style={styles.container}>
            <Camera style={styles.camera} type={type} ratio={"16:9"}>
                <Image source={require("../assets/icons/frame.png")} resizeMode={"contain"} style={styles.frame}/>
                <View style={{position: "absolute", zIndex: 20, bottom: 20, flexDirection: "row", width: "100%", justifyContent: "space-around"}}>
                    <View style={{width: 50, height: 50, backgroundColor: "red"}}>

                    </View>

                    <TouchableOpacity style={{width: 70, height: 70, borderRadius: 200, borderWidth: 3, borderColor: "white"}} onPress={() => console.log(555)}/>
                   
                    
                    <View style={{width: 50, height: 50, backgroundColor: "green"}}>

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