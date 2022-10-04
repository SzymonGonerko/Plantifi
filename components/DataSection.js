import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable, Alert } from 'react-native';
import { useRef } from 'react';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';

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
    const myView = useRef(null)
    return <>
    <View style={{height: 45}}/>
    <CalendarList
        horizontal={true}
        pagingEnabled={true}
        pastScrollRange={30} 
        futureScrollRange={30}
        onDayPress={day => {
            console.log('selected day', day);
          }}
        theme={{
            textDayHeaderFontFamily: 'NunitoBold',
            textSectionTitleColor: 'black',
        }}
        dayComponent={({date, state, onLongPress, onPress }) => {
            return (
                <Pressable onPress={onPress}>
                    <View ref={myView} style={(state ? styles.today : styles.defaultDay)}>
                        <Text style={(state ? styles.todayText: styles.defaultText)}>{date.day}</Text>
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
        borderColor: "#DFDFDF",
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 4,
        backgroundColor: "#54795E"
    },
    defaultText: {
        color: "black",
        fontFamily: "Inter",
        fontWeight: "normal"
        
    },
    todayText: {
        color: "white",
        fontFamily: "Inter",
        fontWeight: "bold"
    }
    
})