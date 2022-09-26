import { useState} from 'react';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import { Slider } from "@miblanchard/react-native-slider";
import { SliderContainer } from './ui/SliderContainer';



export const RecommendedCare = ({profile}) => {
    return <>
            <View style={styles.squareContainer}>
                {Object.entries(profile).map(([key, val], i) => {
                    return (
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent:"space-between"}}>
                        <View key={i} style={{width: 48}}>
                            <View  style={styles.squareIcon}>
                                {key === "watering" ? <Image style={styles.innerIcon} source={require("../assets/icons/careIcons/Watering.png")}/>: null}
                                {key === "transplanting" ? <Image style={styles.innerIcon} source={require("../assets/icons/careIcons/Transplanting.png")}/>: null}
                                {key === "cutting" ? <Image style={styles.innerIcon} source={require("../assets/icons/careIcons/Cutting.png")}/>: null}
                                {key === "fertilizating" ? <Image style={styles.innerIcon} source={require("../assets/icons/careIcons/Fertilizating.png")}/>: null}
                            </View>
                            <View style={styles.mainLine}>
                                <View style={[styles.currentValueLine, {width: `${val.inPercentage}%`}]}/>
                            </View>
                        </View>
                        <View style={{width: "80%", height: "100%"}}>

                            <SliderContainer
                                sliderValue={[1]}
                                type={key}
                                trackMarks={[0, 1, 2, 3, 4]}>
                                <Slider 
                                    maximumValue={4} 
                                    minimumValue={0} 
                                    step={1}
                                    thumbTintColor={"#495566"}
                                    trackStyle={{height: 6}}
                                    minimumTrackTintColor={"#54795E"} />
                        </SliderContainer>


                        </View>
                    </View>
                    )
                })}
            </View>
    </>
}

const styles = StyleSheet.create({
    squareContainer: {
        flexDirection: "column", 
        justifyContent: "space-between", 
        marginTop: 20, 
        marginHorizontal: 10
    },
    squareIcon: {
        width: 48, 
        height: 48, 
        borderRadius: 8, 
        backgroundColor: "white", 
        justifyContent: "center", 
        alignItems: "center"
    },
    innerIcon: {
        width: 21,
        height: 21
    },
    mainLine: {
        position: "relative", 
        width: "100%", 
        height: 4, 
        backgroundColor: "#ECEEF0", 
        borderRadius: 10, 
        marginTop: 5
    },
    currentValueLine: {
        position: "absolute",
        height: 4, 
        backgroundColor: "#495566", 
        borderRadius: 10
    },
    titleList: {
        fontFamily: "NunitoBold",
        fontSize: 16,
        color: "#495566",
        marginLeft: 11
    },
    defaultText: {
        fontFamily: "NunitoRegular",
        fontSize: 14,
        color: "#495566",
        letterSpacing: 0.1
    }
    
})