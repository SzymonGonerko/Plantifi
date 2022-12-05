import React from "react";
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { CalendarList, LocaleConfig} from 'react-native-calendars';
import { 
    polishMonthNames, 
    polishDayNamesShort, 
    polishMonthNamesShort, 
    polishDayNames,
} from '../../dateSetup';

import {toDoListPlants, calendarPlants} from "../../mainDataPlants"

LocaleConfig.locales['pl'] = {
    monthNames: [...polishMonthNames],
    monthNamesShort: [...polishMonthNamesShort],
    dayNames: [...polishDayNames],
    dayNamesShort: [...polishDayNamesShort],
    today: "Dziś"
  };
  LocaleConfig.defaultLocale = 'pl';

  const today = new Date()
  const fewDaysLater = new Date()
  fewDaysLater.setDate(today.getDate() + 3)
  const fewDaysLaterDate = fewDaysLater.toISOString().slice(0, 10)
  const todayDate = today.toISOString().slice(0, 10)

  export const CustomCalendar = ({onPressDayHandler, lastClicked}) => {
    return <>
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
            [todayDate]: {marked: true, tasks: toDoListPlants, isToday: true},
            [fewDaysLaterDate]: {marked: true, tasks: calendarPlants},
          }}
        renderHeader={(date) => {
        const month = LocaleConfig.locales.pl.monthNames[parseInt(date.toISOString().slice(5, 7)) -1]
        return <Text style={styles.header}>{month} {date.getFullYear()}</Text>
        }}
        dayComponent={({marking,date,state}) => {
            return (
                <Pressable onPress={() => onPressDayHandler(date.dateString, marking?.tasks, marking?.isToday)}>
                    <View style={(state ? (date.dateString === lastClicked ? [styles.today, styles.clickedDay] : styles.today) : (date.dateString === lastClicked ? styles.clickedDay : styles.defaultDay))}>
                        <Text style={(state ? (date.dateString === lastClicked ? styles.todaySelectedText : styles.todayNotSelectedText) : (date.dateString === lastClicked ? styles.selectedText : styles.defaultText))}>
                            {date.day}
                        </Text>
                        {marking?.marked && <View style={(date.dateString === lastClicked ? styles.selectedDot : styles.dot)}/>}
                    </View>
                </Pressable>
            );
          }}
    />
    </>
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
    todaySelectedText: {
        color: "white",
        fontFamily: "Inter",
        fontWeight: "bold",
        fontSize: 12
    },
    todayNotSelectedText: {
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
    taskDescription: {
        fontSize: 16,
        fontFamily: "NunitoRegular",
        marginHorizontal: 24
    },
    tagDate: {
        marginBottom: 10
    }
    
})