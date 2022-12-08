import React from "react";
import { useState  } from 'react';
import { StyleSheet, Text, View, ImageBackground, Modal} from 'react-native';
import { SquareButton } from '../ui/SquareButton';
import { ShortLine } from '../ui/ShortLine';
import { ModalPlantsNavigation } from './ModalPlantsNavigation';
import { AddNewPlants } from './AddNewPlants';
import { Heart } from "../ui/Heart"


import {Button} from "../ui/Button"
import AntDesign from "react-native-vector-icons/AntDesign"



export const ProfilePlants = (props) => {
  const {isVisible, onPressButtonSquare, src, name, profile, addNewPlantsToCollecton} = props
  const [addPlants, setAddPlants] = useState(false)


  const resetState = () => {
    setAddPlants(false)
  }

  const onPressBtnHandler = () => {
    setAddPlants(true)
    if (addPlants) {
      setAddPlants(false)
      addNewPlantsToCollecton()
    }
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
            <SquareButton styleContainer={styles.btnSqure} reset={resetState} onPress={onPressButtonSquare} type={"arrow"}/>
            <Heart bottomPosition={-25}/>
        </View>

        <View style={styles.profileInfo}>

            <ShortLine style={{marginTop: 14}}/>
            <Text style={styles.textName}>{name}</Text>

            {!addPlants && <ModalPlantsNavigation profile={profile}/>}
            {addPlants && <AddNewPlants care={profile.care} src={src}/>}
            
            
            <Button
            onPress={onPressBtnHandler}
            icon={<AntDesign name='plus' style={styles.iconStyle}/> }
            styleContainer={styles.btnStyle}
            >
              {addPlants ? "Zapisz do mojej kolekcji" : "Dodaj do moich roślin"}
            </Button>
        </View>
    </Modal>
    
    </>
}

const styles = StyleSheet.create({
      bgcContainer: {
        width: "100%",
        height: "35%",
        borderRadius: 17,
    },
    background: {
        height: "100%",
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 30
    },
    img: {
      borderRadius: 17,
    },
    textName: {
      fontFamily: "NunitoBold",
      marginLeft: 24,
      marginTop: 10,
      marginBottom: 15,
      fontSize: 24,
    },
    profileInfo: {
      flex: 1,
      backgroundColor: "#FBFBFB",
      height: "75%",
      marginHorizontal: 10,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      overflow: "hidden"
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
    marginVertical: 20,
  }
    });
    