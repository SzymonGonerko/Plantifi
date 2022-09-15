import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList, Modal} from 'react-native';
import { SquareButton } from './ui/SquareButton';
import { ShortLine } from './ui/ShortLine';
import { ProfileSwitcherNav } from './ProfileSwitcherNav';

import {General} from "./General"
import {Requirements} from "./Requirements"
import {Care} from "./Care"
import {Button} from "./ui/Button"

import AntDesign from "react-native-vector-icons/AntDesign"

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height;


export const ProfilePlants = ({isVisible, onPressButtonSquare, src, name, profile}) => {
  const [nav, setNav] = useState({
    general: true,
    requirements: false,
    care: false
})


const onPressHandler = (name) => {
  setNav(oldState => {
      let newState
      Object.entries(oldState).forEach(([key, _]) => {
          if (key === name) {
              return newState = {...newState, [key]: true}
          } else {
               return newState = {...newState, [key]: false}
          }
      })
      return newState
  })
}


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
            <ProfileSwitcherNav
              general={nav.general}
              requirements={nav.requirements}
              care={nav.care}
              onPress={onPressHandler}
            />
            {nav.general && profile && <General profile={profile.general}/>}
            {nav.requirements && <Requirements profile={profile.requirements}/>}
            {nav.care && <Care/>}

 
        </View>
        
        
        
        <Button
            icon={<AntDesign name='plus' style={styles.iconStyle}/> }
            styleContainer={styles.btnStyle}
            >Dodaj do moich roślin</Button>
    </Modal>
    
    </>
}

const styles = StyleSheet.create({
      bgcContainer: {
        width: "100%",
        height: windowHeight/3,
        borderRadius: 17
    },
    background: {
        height: "100%",
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom: 30
    },
    img: {
      borderRadius: 17,
    },
    textName: {
      fontFamily: "NunitoBold",
      marginLeft: 24,
      marginTop: 15,
      marginBottom: 15,
      fontSize: 24,
    },
    profileInfo: {
      backgroundColor: "#FBFBFB",
      marginHorizontal: 10,
      borderRadius: 20,
    },
    btnSqure: {
      position: "absolute",
      left: "10%",
      top: "20%"
    },
    iconStyle: {
      position: "absolute", 
      top: "45%", 
      right: 25, 
      color: "white", 
      fontSize: 18
  },
  btnStyle: {
    height: 50, 
    marginTop: 10, 
    position: "absolute", 
    bottom: 30, 
    left: 15, 
    right: 15
  }
    });
    