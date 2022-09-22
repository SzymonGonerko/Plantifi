import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList, Modal, Platform} from 'react-native';
import { CloseCircle } from './ui/CloseCircle';
import Octicons from "react-native-vector-icons/Octicons"

export const PickerImage = ({addPick, onCancel, defaultImg, src, uri}) => {
    return <>
            <View style={styles.square}>
                <View style={styles.pressContainer}>
                    <Pressable onPress={addPick} android_ripple={{color: "black"}} style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}}>
                        <Octicons name={"plus"} style={{fontSize: 30, color: "#54795E"}}/>
                    </Pressable>
                </View>
                {defaultImg && <Image style={styles.uploadedImage} source={src}/>}
                {uri && <Image style={styles.uploadedImage} source={{uri: uri}}/>}
                <CloseCircle onPress={onCancel}  />
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
        justifyContent: "center",
        alignItems: "center"
    },
    pressContainer: {
        width: "100%", 
        height: "100%", 
        borderRadius: 8, 
        overflow: "hidden"
    },
    uploadedImage: {
        position: "absolute", 
        width: 73, 
        height: 70, 
        borderRadius: 9
    }
})