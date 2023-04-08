import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, ImageBackground, Animated, PanResponder, Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { SquareButton } from '../ui/SquareButton';
import { ShortLine } from '../ui/ShortLine';
import { ModalPlantsNavigation } from './ModalPlantsNavigation';
import { AddNewPlants } from './AddNewPlants';
import { Heart } from "../ui/Heart"
import { InfoLike } from "../ui/InfoLike";
import { globalStyles } from "../globalStyles";
import { Button } from "../ui/Button"
import AntDesign from "react-native-vector-icons/AntDesign"


const {width, height} = Dimensions.get('screen');
const sheetMaxHeight = height;
const sheetMinHeight = 100;

const MAX_BGC_Y = sheetMinHeight - sheetMaxHeight;
const MID_BGC_Y = MAX_BGC_Y / 3;
const MIN_BGC_Y = 0;

const TOP_PROFILE_Y = MID_BGC_Y + 40;
const MID_PROFILE_Y = 0;
const BOTTOM_PROFILE_Y = height / 1.9;

const MAX_PROFILE_HEIGHT = height/1.6
const MID_PROFILE_HEIGHT = height/1.15

const threshold = 70;

export const ProfilePlants = (props) => {
  const {onPressButtonSquare, src, name, profile, onSuccesAddedPlant} = props
  const [addPlants, setAddPlants] = useState(false)
  const [infoAddedToFavourite, setAddedToFavourite] = useState(false)
  const [start, setStart] = useState(false)

  const InfoLikeOpacity = useRef(new Animated.Value(0)).current;
  const profileHeight = useRef(new Animated.Value(MAX_PROFILE_HEIGHT)).current

  const initBackgroundRef = useRef(MID_BGC_Y);
  const backgroundRef = useRef(new Animated.Value(MID_BGC_Y)).current;

  const initProfileRef = useRef(MID_PROFILE_Y)
  const profileRef = useRef(new Animated.Value(MID_PROFILE_Y)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        backgroundRef.setOffset(initBackgroundRef.current);
        profileRef.setOffset(initProfileRef.current);
        setStart(true)
      },
      onPanResponderMove: (_, g) => {
        backgroundRef.setValue(-g.dy);
        profileRef.setValue(g.dy)
      },
      onPanResponderRelease: (_, g) => {
        backgroundRef.flattenOffset();
        profileRef.flattenOffset();
        setStart(false)
        if (Math.abs(g.dy) < 5) return
        if (g.dy > 0) {
          if (g.dy < threshold) {
            initBackgroundRef.current === MAX_BGC_Y ? 
              autoSpring(MAX_BGC_Y, BOTTOM_PROFILE_Y) : 
              autoSpring(MID_BGC_Y, MID_PROFILE_Y);
          } else if (initBackgroundRef.current === MIN_BGC_Y) {
            autoSpring(MID_BGC_Y, MID_PROFILE_Y);
          } else {
            autoSpring(MAX_BGC_Y, BOTTOM_PROFILE_Y);
          }
        } else {
          if (-g.dy > threshold) {
            initBackgroundRef.current === MAX_BGC_Y ? 
              autoSpring(MID_BGC_Y, MID_PROFILE_Y): 
              autoSpring(MIN_BGC_Y, TOP_PROFILE_Y);
          } else {
            initBackgroundRef.current === MIN_BGC_Y ? 
              autoSpring(MID_BGC_Y, MID_PROFILE_Y): 
              autoSpring(MIN_BGC_Y, TOP_PROFILE_Y);
          }
        }
      },
    }),
  ).current;

  const autoSpring = (bacVal, profVal) => {
    initBackgroundRef.current = bacVal;
    initProfileRef.current = profVal;
    Animated.spring(backgroundRef, {
      toValue: initBackgroundRef.current,
      useNativeDriver: false,
    }).start();
    Animated.spring(profileRef, {
      toValue: initProfileRef.current,
      useNativeDriver: false,
    }).start();
    if (profVal === TOP_PROFILE_Y) {
      Animated.timing(profileHeight, {
        toValue: MID_PROFILE_HEIGHT,
        duration: 150,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(profileHeight, {
        toValue: MAX_PROFILE_HEIGHT,
        duration: 150,
        useNativeDriver: false
      }).start()
    }
  };

  const animatedBackground = {
    height: backgroundRef.interpolate({
      inputRange: [MAX_BGC_Y, MIN_BGC_Y],
      outputRange: [sheetMaxHeight, sheetMinHeight],
      extrapolate: 'clamp',
    }),
  };


  const onPressHeart = () => {
    setAddedToFavourite(prev => !prev)
    Animated.timing(InfoLikeOpacity, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true
    }).start(() => {
      setTimeout(() => {
        Animated.timing(InfoLikeOpacity, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true
        }).start()
      }, 600)

    });
  }

  const resetState = () => {
    setAddPlants(false)
  }

  const onPressBtnHandler = () => {
    setAddPlants(true)
    if (addPlants) {
      setAddPlants(false)
      onSuccesAddedPlant()
    }
  }


    return <>
    <Animatable.View duration={300} animation={"pulse"} style={{height: "100%", width: "100%"}}>
        <Animated.View style={[styles.bgcContainer, animatedBackground]}>
            {infoAddedToFavourite && <InfoLike opacity={InfoLikeOpacity} name={name}/>}
            <ImageBackground
            source={src} 
            style={styles.background}
            imageStyle={styles.img}
            />
            <SquareButton styleContainer={styles.btnSqure} reset={resetState} onPress={onPressButtonSquare} type={"arrow"}/>
        </Animated.View>
        <Heart onPress={onPressHeart} style={{top: height/2.67 -27.5, transform: [{translateY: profileRef}]}}/>
        <Animated.View style={[styles.profileInfo, {transform: [{translateY: profileRef}], height: profileHeight}]}>
          <View {...panResponder.panHandlers}>
              <ShortLine active={start} style={{marginTop: 14}}/>
              <Text style={styles.textName} >{name}</Text>
          </View>


            {!addPlants && <ModalPlantsNavigation profile={profile}/>}
            {addPlants && <AddNewPlants care={profile.care} src={src}/>}
            
            
            <Button
            onPress={onPressBtnHandler}
            icon={<AntDesign name='plus' style={styles.iconStyle}/> }
            styleContainer={styles.btnStyle}
            >
              {addPlants ? "Zapisz do mojej kolekcji" : "Dodaj do moich roślin"}
            </Button>
        </Animated.View>
    </Animatable.View>
    </>
}

const styles = StyleSheet.create({
      bgcContainer: {
        position: "absolute",
        top: 33,
        left: 0,
        width,
        borderRadius: 17,
    },
    background: {
        height: "100%",
        marginHorizontal: 10,
    },
    img: {
      borderRadius: 17,
    },
    textName: {
      fontFamily: "NunitoBold",
      marginLeft: 24,
      marginVertical: 15,
      fontSize: 24,
    },
    profileInfo: {
      position: "absolute",
      top: height/2.7,
      left: "2%",
      width: "95.5%",
      backgroundColor: globalStyles.backgroundLightGrey,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      overflow: "hidden",
    },
    btnSqure: {
      position: "absolute",
      left: "10%",
      top: "10%"
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
    marginBottom: 20,
    marginHorizontal: 10
  }
    });
    