import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList, Modal} from 'react-native';
import { SquareButton } from './ui/SquareButton';
import { ShortLine } from './ui/ShortLine';


export const ProfilePlants = ({isVisible, onPressButtonSquare, src, name}) => {
    return <>
    <Modal
    animationType="slide"
    visible={isVisible}
    >
        <View style={styles.bgcContainer}>
            <ImageBackground
            source={src} 
            style={styles.background}
            imageStyle={styles.img}
            />
            <SquareButton styleContainer={styles.btnSqure} onPress={onPressButtonSquare} type={"arrow"}/>
        </View>

        <View style={styles.profileInfo}>

            <ShortLine style={{marginTop: 14}}/>
            <Text style={styles.textName}>{name}</Text>
           

        </View>
        

    </Modal>
    
    </>
}

const styles = StyleSheet.create({
      bgcContainer: {
        width: "100%",
        height: "38%",
        borderRadius: 17
    },
    background: {
        height: "100%",
        marginHorizontal: 10,
        marginVertical: 30
    },
    img: {
      borderRadius: 17,
    },
    textName: {
      fontFamily: "NunitoBold",
      marginLeft: 24,
      marginTop: 20,
      fontSize: 24,
    },
    profileInfo: {
      backgroundColor: "white",
      marginHorizontal: 10,
      borderRadius: 20,
    },
    btnSqure: {
      position: "absolute",
      left: "10%",
      top: "20%"
    },
    });
    