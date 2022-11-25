import React from "react";
import { useState  } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView ,Modal} from 'react-native';
import { SquareButton } from './ui/SquareButton';
import { ShortLine } from './ui/ShortLine';
import AntDesign from "react-native-vector-icons/AntDesign"
import { Button } from './ui/Button';
import { LongLineSeparator } from "./ui/LongLineSeparator";
import { PopUpSuccess } from "./ui/PopUpSuccess";

export const PlantDetails = ({onPressSquare}) => {
  const [addedNew, setAddedNew] = useState(false)


  const addPlantsToCollection = () => {
    setAddedNew(true)
    setTimeout(() => {onPressSquare()}, 2000)
    
}
  
    return <>
        <View style={styles.bgcContainer}>
            <ImageBackground
            source={require("../assets/images/background.jpg")} 
            style={styles.background}
            imageStyle={styles.img}
            />
            <SquareButton onPress={onPressSquare} styleContainer={styles.btnSqure}  type={"arrow"}/>
        </View>

        <View style={styles.profileInfo}>

            <ShortLine style={{marginTop: 14}}/>
            <Text style={styles.textName}>sdsdsds</Text>
            
            <LongLineSeparator style={{marginTop: 10}}/>
            <Text style={styles.textTitleDescription}>OPIS</Text>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Text style={styles.textDescription}>
                fdsffsd fsd fsd fsd fsd fsd f sdf sdf sdf sd fsd f sdf dsf dsf sd f sdf sd fsd fsd f ds
                </Text>
            </ScrollView>
            
            <Button
            onPress={addPlantsToCollection}
            icon={<AntDesign name='plus' style={styles.iconStyle}/> }
            styleContainer={styles.btnStyle}
            >
              Dodaj do moich roślin
            </Button>
        </View>
        {addedNew && <PopUpSuccess onPressClose={() => setAddedNew(false)}/>}
    </>
}

const styles = StyleSheet.create({
    bgcContainer: {
      width: "100%",
      height: "35%",
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
  marginTop: 20, 
},
textTitleDescription:{
  fontFamily: "NunitoBold",
  fontSize: 14,
  marginBottom: 10,
  marginLeft: 7,
},
textDescription: {
  fontFamily: "NunitoRegular",
  marginLeft: 7,
  lineHeight: 19,
  fontSize: 14,
  color: "#495566",
  letterSpacing: 0.5,
  height: "100%"
},
  });
  