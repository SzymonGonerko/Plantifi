import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable, Alert } from 'react-native';
import { useRef, useState } from 'react';
import { CalendarList, LocaleConfig} from 'react-native-calendars';
import { LongLineSeparator} from "../components/ui/LongLineSeparator"
import { ScrollView } from 'react-native-gesture-handler';

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

    const today = new Date()
    const fewDaysLater = new Date()
    fewDaysLater.setDate(today.getDate() + 3)
    const fewDaysLaterDate = fewDaysLater.toISOString().slice(0, 10)
    const todayDate = today.toISOString().slice(0, 10)

    const handlePress = (date) => {
        setLastClicked(date)
    } 

    return <ScrollView>
    <View style={{height: 45}}/>
    <CalendarList
        horizontal={true}
        pagingEnabled={true}
        pastScrollRange={20} 
        futureScrollRange={20}
        theme={{
            textDayHeaderFontFamily: 'NunitoBold',
            textSectionTitleColor: 'black',
            calendarBackground: 'transparent',
        }}
        markedDates={{
            [todayDate] : {marked: true},
            [fewDaysLaterDate]: {marked: true},
          }}

        renderHeader={(date) => {
        const month = LocaleConfig.locales.pl.monthNames[parseInt(date.toISOString().slice(5, 7)) -1]
        return <Text style={styles.header}>{month} {date.getFullYear()}</Text>
        }}
        dayComponent={({marking,date,state}) => {
            return (
                <Pressable onPress={() => handlePress(date.dateString)}>
                    <View style={(state ? (date.dateString === lastClicked ? [styles.today ,styles.clickedDay] : styles.today) : (date.dateString === lastClicked ? styles.clickedDay : styles.defaultDay))}>
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
    }
    
})