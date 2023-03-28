import React from "react";
import { StyleSheet, Text, Dimensions, FlatList} from 'react-native';
import { Card } from '../ui/Card';
import { globalStyles } from "../globalStyles";

import { dailyPlants } from '../../mainDataPlants';
import { likedPlants } from '../../mainDataPlants';


const windowWidth = Dimensions.get('window').width;

export const ExploreStartSection = () => {
    return <>
        <Text style={styles.plantsCategory}>
            Użytkownicy lubią:
        </Text>
        <FlatList
            keyExtractor={(item) => item}
            horizontal
            data={likedPlants}
            style={{marginTop: 24}}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => 
            <Card
                name={item[1].name}
                liked={item[1].liked}
                profile={item[1].profile}
                src={item[0]}/>}
        />
        <Text style={styles.plantsCategory}>
            Poznaj roślinę dnia
        </Text>
        <FlatList
            keyExtractor={(item) => item}
            horizontal
            data={dailyPlants}
            style={{marginTop: 24}}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => 
            <Card
                cardStyle={{width: windowWidth - 40}}
                name={item[1].name}
                profile={item[1].profile}
                liked={item[1].liked}
                src={item[0]}/>}
        />
        <Text style={styles.plantsCategory}>
            Czy wiesz, że...
        </Text>
        <Text style={styles.defaultText}>
            W polsce na terenach bagnistych i rozlewiskach rosną 3 gatunki rosiczki, a roślina ta żyje do 50 lat !
        </Text>
        <Text style={styles.knowMoreText}>
            Dowiedz się więcej
        </Text>
    </>
}


const styles = StyleSheet.create({
    plantsCategory: {
        fontFamily: "NunitoBold",
        fontSize: 18,
        marginLeft: 20,
        marginTop: 8
    },
    defaultText: {
        marginLeft: 20,
        fontFamily: "NunitoRegular",
        paddingRight: 5,
        fontSize: 13,
        marginTop: 8
    },
    knowMoreText: {
        marginLeft: 20,
        fontFamily: "NunitoBold",
        fontSize: 15,
        marginTop: 8,
        color: globalStyles.mainColor
    }
})