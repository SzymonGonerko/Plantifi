import React from 'react';
import { Pressable, StyleSheet, Text, View, Image, Alert} from 'react-native';
import { Slider } from "@miblanchard/react-native-slider";
import { SliderContainer } from '../ui/SliderContainer';
import { PlantsSeparator } from '../ui/PlantsSeparator';



export const RecommendedCare = ({profile}) => {

    const onPressHandler = () => {
        Alert.alert("Pracuję nad tym...", "aplikacja jest w fazie testowej", [{text: "okey", style: "default"}])
    }



    return <>
            <View style={styles.squareContainer}>
                <Text style={styles.header}>Rekomendowana częstostliwość</Text>
                {Object.entries(profile).map(([key, val], i) => {
                    return (
                    <View key={i} style={{flexDirection: "row", alignItems: "center"}}>
                        <View style={{width: 48}}>
                            <View  style={styles.squareIcon}>
                                {key === "watering" ? <Image style={styles.innerIcon} source={require("../../assets/icons/careIcons/Watering.png")}/>: null}
                                {key === "transplanting" ? <Image style={styles.innerIcon} source={require("../../assets/icons/careIcons/Transplanting.png")}/>: null}
                                {key === "cutting" ? <Image style={styles.innerIcon} source={require("../../assets/icons/careIcons/Cutting.png")}/>: null}
                                {key === "fertilizating" ? <Image style={styles.innerIcon} source={require("../../assets/icons/careIcons/Fertilizating.png")}/>: null}
                            </View>
                            <View style={styles.mainLine}>
                                <View style={[styles.currentValueLine, {width: `${val.inPercentage}%`}]}/>
                            </View>
                        </View>
                        <View style={styles.sliderWrapper}>
                            <SliderContainer
                                sliderValue={[val.step]}
                                type={key}
                                trackMarks={[0, 1, 2, 3, 4]}>
                                <Slider 
                                    maximumValue={4} 
                                    minimumValue={0}
                                    value={0}
                                    step={1}
                                    thumbTintColor={"#495566"}
                                    trackStyle={{height: 6}}
                                    minimumTrackTintColor={"#54795E"} />
                            </SliderContainer>
                            <Pressable onPress={onPressHandler}>
                                <Text style={styles.textDifferentRange}>Inny zakres</Text>
                            </Pressable>
                        </View>
                    </View>
                    )
                })}
            </View>
            <PlantsSeparator styleContainer={styles.sepStyles} styleText={{fontSize: 18}} onlyText={true}>
                Pamiętaj!
            </PlantsSeparator>
            <Text style={styles.rememberText}>
                Nasze rekomendacje dotyczące przypomnień oparte są na wiedzy ekspertów i danych encyklopedycznych. Powinieneś jednak obserwować swoją roślinę, czy na pewno spełnia to jej potrzeby!
            </Text>
            
    </>
}

const styles = StyleSheet.create({
    header: {
        color: "#495566",
        fontSize: 16,
        fontFamily: "NunitoRegular"

    },
    squareContainer: {
        flexDirection: "column", 
        justifyContent: "space-between", 
        marginTop: 20, 
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
    },
    textDifferentRange: {
        fontFamily: "NunitoBold",
        color: "#54795E",
        fontSize: 16,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#54795E",
        textAlign: "right"
    },
    rememberText: {
        fontSize: 12,
        fontFamily: "NunitoRegular",
    },
    sliderWrapper: {
        width: "75%", 
        height: "100%", 
        marginLeft: 20
    },
    sepStyles:{
        marginTop: 20, 
        marginBottom: 10
    }
    
})