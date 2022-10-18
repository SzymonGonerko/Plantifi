import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable, Alert, Image } from 'react-native';
import { useRef, useState } from 'react';
import { CalendarList, LocaleConfig} from 'react-native-calendars';
import { LongLineSeparator} from "./ui/LongLineSeparator"
import { ScrollView } from 'react-native-gesture-handler';

import { CustomCalendar } from './CustomCalendar';

import {toDoListPlants, calendarPlants} from "../mainDataPlants"


const today = new Date()
const todayDate = today.toISOString().slice(0, 10)
const todayDateText = todayDate.split("-").reverse().join(".")

export const DateSection = () => {
    const [lastClicked, setLastClicked] = useState("")
    const [todayTasks, setTodayTasks] = useState(toDoListPlants)
    const [selectedDate, setSelectedDate] = useState(todayDateText)


    const handlePress = (date, currentTasks, isToday) => {
        const formatedDate = date.split("-").reverse().join(".")
        setLastClicked(date)
        setTodayTasks(currentTasks)
        if (isToday) {
            setSelectedDate("Dzisiaj, " + formatedDate)
        } else {
            setSelectedDate(formatedDate)
        }
    }

    return <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{height: 45}}/>
                <CustomCalendar 
                onPressDayHandler={handlePress}
                lastClicked={lastClicked}
                />
                <LongLineSeparator style={styles.separator}/>
                <View style={styles.tagDate}>
                    <Text style={styles.headerSec}>
                        {selectedDate}
                    </Text>
                    {todayTasks === undefined && <Text style={styles.taskDescription}>
                        Brak zadań! Twoje rośliny potrzebują jedynie ... cieszyć oko!
                    </Text>}
                </View>

                {todayTasks && todayTasks.map((item, i) => { 
                                return <View style={{paddingHorizontal: 24, overflow: "hidden"}} key={i}>
                                        <View style={{flexDirection: "row"}}>
                                            <Image source={item[0]} style={{width: 67, height: 80, borderRadius: 8}}/>
                                            <View style={{flexDirection: "column", justifyContent: "center", marginLeft: 20}}>
                                                    <Text style={styles.title}>{item[1].name}</Text>
                                                    <View style={{flexDirection: "row", alignItems: "center"}}>
                                                        {item[1].whatNeed === "Potrzebuje Wody! (15ml)" && <Image resizeMode='contain' style={styles.icons} source={require("../assets/icons/toDoListIcons/Can.png")}/>}
                                                        {item[1].whatNeed === "Potrzebuje przesadzenia!" && <Image resizeMode='contain' style={styles.icons} source={require("../assets/icons/toDoListIcons/Transplanting.png")}/>}
                                                        {item[1].whatNeed === "Potrzebuje drenażu doniczki!" && <Image resizeMode='contain' style={styles.icons} source={require("../assets/icons/toDoListIcons/Pot.png")}/>}
                                                        <Text style={styles.itemListText}>{item[1].whatNeed}</Text>
                                                    </View>
                                            </View>
                                            
                                        </View>
                                        <LongLineSeparator/>
                                </View>
                            })}

                            <View style={{height: 300}}/>
            </ScrollView>
}

const styles = StyleSheet.create({
    separator: {
        backgroundColor: "#54795E",
        left: 20,
        width: "90%",
        height: 1,
        marginTop: 0,
        opacity: 0.5,
    },
    header: {
        width: "100%",
        fontFamily: "NunitoBold",
        fontSize: 18,
        marginTop: 15,
        marginBottom: 15
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
        color: "#495566",
        fontSize: 16,
        marginLeft: 6,
        marginTop: 2
    },
    headerSec: {
        fontFamily: "NunitoExtraBold",
        fontSize: 18,
        marginBottom: 12,
        marginHorizontal: 24
    },
    taskDescription: {
        fontSize: 16,
        fontFamily: "NunitoRegular",
        marginHorizontal: 24
    },
    tagDate: {
        marginBottom: 10
    }
    
})