import React from "react";
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { LongLineSeparator } from '../ui/LongLineSeparator';
import { globalStyles } from "../globalStyles";
import { LinearGradient } from 'expo-linear-gradient';

export const Care = ({profile}) => {
    return <>
        <View style={{flex: 1}}>
            <View style={styles.squareContainer}>
                {Object.entries(profile).map(([key, val], i) => {
                    return (
                    <View key={i} style={{width: 48}}>
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
                    )
                })}
            </View>
            <LongLineSeparator style={{marginTop: 10, marginBottom: 10}}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                {Object.entries(profile).map(([key, val], i) => {
                        return (
                        <View key={i} style={styles.itemWrapper}>
                            <View style={styles.iconWrapper}>
                                {key === "watering" ? <Image style={styles.innerIcon} source={require("../../assets/icons/careIcons/Watering.png")}/>: null}
                                {key === "transplanting" ? <Image style={styles.innerIcon} source={require("../../assets/icons/careIcons/Transplanting.png")}/>: null}
                                {key === "cutting" ? <Image style={styles.innerIcon} source={require("../../assets/icons/careIcons/Cutting.png")}/>: null}
                                {key === "fertilizating" ? <Image style={styles.innerIcon} source={require("../../assets/icons/careIcons/Fertilizating.png")}/>: null}
                                <Text style={styles.titleList}>
                                    {key === "watering" ? "Podlewanie": null}
                                    {key === "transplanting" ? "Przesadzanie": null}
                                    {key === "cutting" ? "Podcinanie": null}
                                    {key === "fertilizating" ? "Nawożenie": null}
                                </Text>
                            </View>
                            <Text style={styles.defaultText}>
                                {val.inWords}
                            </Text> 
                        </View>
                        )
                    })}
            </ScrollView>
            <LinearGradient
                colors={['transparent', 'rgba(200,200,200,0.8)']}
                style={[{height: 20}, {transform: [{translateY: -20}]}]}
            />
            
    </View>
    
    </>
}


const styles = StyleSheet.create({
    squareContainer: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        marginTop: 15, 
        marginHorizontal: 10
    },
    itemWrapper: {
        flexDirection: "column", 
        marginLeft: 10, 
        marginBottom: 17
    },
    iconWrapper: {
        flexDirection: "row", 
        marginBottom: 6
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
        backgroundColor: globalStyles.lightGrey, 
        borderRadius: 10, 
        marginTop: 9
    },
    currentValueLine: {
        position: "absolute",
        height: 4, 
        backgroundColor: globalStyles.accentColor, 
        borderRadius: 10
    },
    titleList: {
        fontFamily: "NunitoBold",
        fontSize: 16,
        color: globalStyles.accentFontColor,
        marginLeft: 11
    },
    defaultText: {
        fontFamily: "NunitoRegular",
        fontSize: 14,
        color: globalStyles.accentFontColor,
        letterSpacing: 0.1
    }
    
})