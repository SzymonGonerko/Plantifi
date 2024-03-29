import React from "react";
import { StyleSheet, Text, View, Pressable, Alert, Image, ScrollView } from 'react-native';
import { LongLineSeparator } from '../ui/LongLineSeparator';
import { toDoListPlants } from '../../mainDataPlants';
import { globalStyles } from "../globalStyles";
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import { RightSwipeSquare } from "../ui/RightSwipeSquare"
import { useState } from 'react';


export const ToDoList = () => {
    const [plantsData, setPlantsData] = useState(toDoListPlants)
    const [itemHeight, setItemHeight] = useState([])

    const onPressHandler = () => {
        Alert.alert("Pracuję nad tym...", "aplikacja jest w fazie testowej", [{text: "okey", style: "default"}])
    }

    const onSwipeHandler = (key) => {
        setTimeout(() => {
            setItemHeight(prev => {
                prev[key] = 0
                const newState = [...prev]
                return newState
            })
        }, 1000)

    }



    return <>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Text style={styles.header}>Zadania na dziś!</Text>
        <View style={styles.btnsContainer}>
            <View style={styles.btnFirst}>
                <Text style={{color: "#54795E", fontFamily: "NunitoBold"}}>Dla Każdej Rośliny</Text>
            </View>
            <View style={styles.btnSec}>
                <Text style={{color: "#9EA09E", fontFamily: "NunitoRegular"}}>Ta sama czynność</Text>
            </View>
        </View>
        <Text style={styles.isDoneText}>Zrobione? Przesuń w lewo!</Text>
        <LongLineSeparator style={{marginBottom: 0}}/>
        <View style={{flexDirection: "column"}}>
            <GestureHandlerRootView>
                {plantsData.map((item, i) => { 
                    return <Swipeable
                    onSwipeableWillOpen={onSwipeHandler.bind(this, i)}
                    childrenContainerStyle={{backgroundColor: "#F2F2F2"}} 
                    key={i} 
                    renderRightActions={RightSwipeSquare}>
                        <View style={{paddingHorizontal: 24, height: itemHeight[i], overflow: "hidden" }} key={i}>
                            <View style={{flexDirection: "row", paddingTop: 10}}>
                                <Image source={item[0]} style={{width: 67, height: 80, borderRadius: 8}}/>
                                <View style={{flexDirection: "column", justifyContent: "space-around", marginLeft: 20}}>
                                    <View>
                                        <Text style={styles.title}>{item[1].name}</Text>
                                        <View style={{flexDirection: "row", alignItems: "center"}}>
                                            {item[1].whatNeed === "Potrzebuje Wody! (15ml)" && <Image resizeMode='contain' style={styles.icons} source={require("../../assets/icons/toDoListIcons/Can.png")}/>}
                                            {item[1].whatNeed === "Potrzebuje przesadzenia!" && <Image resizeMode='contain' style={styles.icons} source={require("../../assets/icons/toDoListIcons/Transplanting.png")}/>}
                                            {item[1].whatNeed === "Potrzebuje drenażu doniczki!" && <Image resizeMode='contain' style={styles.icons} source={require("../../assets/icons/toDoListIcons/Pot.png")}/>}
                                            <Text style={styles.itemListText}>{item[1].whatNeed}</Text>
                                        </View>
                                    </View>
                                    <Pressable onPress={onPressHandler}>
                                        <Text style={styles.instruction}>Zobacz instrukcję</Text>
                                    </Pressable>
                                    
                                </View>
                                
                            </View>
                            <LongLineSeparator style={{marginBottom: 0, marginTop: 10,}}/>
                    </View>
                </Swipeable>
                })}
                </GestureHandlerRootView>
                    
              
        </View>
        <Text style={styles.headerSec}>Zadania na jutro</Text>
        <Text style={styles.taskDescription}>Brak zadań! Twoje rośliny potrzebują jedynie ... cieszyć oko!</Text>
        <View style={{height: 200}}/>
    </ScrollView>
    </>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
    header: {
        marginTop: 20,
        fontFamily: "NunitoBold",
        fontSize: 20,
        marginBottom: 12,
        marginHorizontal: 24
    },
    headerSec: {
        fontFamily: "NunitoBold",
        fontSize: 20,
        marginBottom: 12,
        marginTop: 20,
        marginHorizontal: 24
    },
    btnsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 24
    },
    btnFirst: {
        width: 153,
        height: 36,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: globalStyles.mainColor,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    btnSec: {
        width: 153,
        height: 36,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: globalStyles.background,
        justifyContent: "center",
        alignItems: "center"
    },
    isDoneText: {
        marginTop: 10,
        fontFamily: "NunitoRegular",
        marginHorizontal: 24
    },
    title: {
        fontFamily: "NunitoBold",
        fontSize: 18,
    },
    icons: {
        width: 17,
        height: 17
    },
    itemListText: {
        fontFamily: "NunitoRegular",
        color: globalStyles.accentFontColor,
        fontSize: 16,
        marginLeft: 6,
        marginTop: 2
    },
    instruction: {
        fontFamily: "NunitoBold",
        color: globalStyles.mainColor,
        fontSize: 16
    },
    taskDescription: {
        fontSize: 16,
        fontFamily: "NunitoRegular",
        marginHorizontal: 24
    }

})
