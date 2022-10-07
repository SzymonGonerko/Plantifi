import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable, Alert, Image } from 'react-native';
import { useRef, useState } from 'react';
import { CalendarList, LocaleConfig} from 'react-native-calendars';
import { LongLineSeparator} from "../components/ui/LongLineSeparator"
import { ScrollView } from 'react-native-gesture-handler';

import {toDoListPlants, calendarPlants} from "../mainDataPlants"

LocaleConfig.locales['pl'] = {
    monthNames: [
      'Styczeń',
      'Luty',
      'Marzec',
      'Kwiecień',
      'Maj',
      'Czerwiec',
      'Lipiec',
      'Sierpień',
      'Wrzesień',
      'Październik',
      'Listopad',
      'Grudzień'
    ],
    monthNamesShort: ['Sty.', 'Lu.', 'Mar.', 'Kwi.', 'Maj', 'Cze.', 'Lip.', 'Sie.', 'Wrz.', 'Paź.', 'Lis.', 'Gru.'],
    dayNames: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'],
    dayNamesShort: ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sb', 'Nd'],
    today: "Dziś"
  };
  LocaleConfig.defaultLocale = 'pl';

export const DataSection = () => {
    const [lastClicked, setLastClicked] = useState("")
    const [todayTasks, setTodayTasks] = useState(toDoListPlants)

    const today = new Date()
    const fewDaysLater = new Date()
    fewDaysLater.setDate(today.getDate() + 3)
    const fewDaysLaterDate = fewDaysLater.toISOString().slice(0, 10)
    const todayDate = today.toISOString().slice(0, 10)

    const handlePress = (date, currentTasks) => {
        setLastClicked(date)
        // setTodayTasks(currentTasks)
        setTodayTasks(currentTasks)
    } 

    return <ScrollView>
    <View style={{height: 45}}/>
    <CalendarList
        horizontal={true}
        pagingEnabled={true}
        pastScrollRange={12} 
        futureScrollRange={12}
        theme={{
            textDayHeaderFontFamily: 'NunitoBold',
            textSectionTitleColor: 'black',
            calendarBackground: 'transparent',
        }}
        markedDates={{
            [todayDate] : {marked: true, tasks: toDoListPlants},
            [fewDaysLaterDate]: {marked: true, tasks: calendarPlants},
          }}

        renderHeader={(date) => {
        const month = LocaleConfig.locales.pl.monthNames[parseInt(date.toISOString().slice(5, 7)) -1]
        return <Text style={styles.header}>{month} {date.getFullYear()}</Text>
        }}
        dayComponent={({marking,date,state}) => {
            return (
                <Pressable onPress={() => handlePress(date.dateString, marking?.tasks)}>
                    <View style={(state ? (date.dateString === lastClicked ? [styles.today, styles.clickedDay] : styles.today) : (date.dateString === lastClicked ? styles.clickedDay : styles.defaultDay))}>
                        <Text style={(state ? styles.todayText : (date.dateString === lastClicked ? styles.selectedText : styles.defaultText))}>
                            {date.day}
                        </Text>
                        {marking?.marked && <View style={(date.dateString === lastClicked ? styles.selectedDot : styles.dot)}/>}
                    </View>
                </Pressable>
            );
          }}
    />
    <LongLineSeparator style={styles.separator}/>

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
    defaultDay: {
        width: 40, 
        height: 40, 
        borderWidth: 1,
        borderColor: "#DFDFDF",
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 4
    },
    today: {
        width: 40, 
        height: 40, 
        borderWidth: 1,
        borderColor: "#54795E",
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 4,
    },
    defaultText: {
        color: "black",
        fontFamily: "Inter",
        fontSize: 12
    },
    todayText: {
        color: "black",
        fontFamily: "Inter",
        fontWeight: "bold",
        fontSize: 12
    },
    clickedDay: {
        width: 40, 
        height: 40, 
        borderWidth: 1.2,
        borderColor: "#54795E",
        backgroundColor: "#54795E",
        justifyContent: "center",
        alignItems: "center", 
        borderRadius: 4
    },
    selectedText: {
        color: "white",
        fontFamily: "Inter",
        fontSize: 13
    },
    dot: {
        width: 5,
        height: 5,
        borderRadius: 50,
        backgroundColor: "#54795E"
    },
    selectedDot: {
        width: 5,
        height: 5,
        borderRadius: 50,
        backgroundColor: "white"
    },
    separator: {
        backgroundColor: "#54795E",
        height: 2,
        marginTop: 0
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
    
})