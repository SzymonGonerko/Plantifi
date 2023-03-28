import React from "react";
import { StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';
import { Card } from '../ui/Card';
import { easyCareCollectionPlants } from '../../mainDataPlants';
import { Slider } from '../ui/Slider';

const sorted = easyCareCollectionPlants.sort((a,b) => a[1].name.localeCompare(b[1].name))


export const EasyCare = () => {
    const [sortedEasyCareCollectionPlants, setSortedEasyCareCollectionPlants] = useState(sorted)


    const onPressLetterHandler = (letter, index) => {
        if (index === undefined) {
            setSortedEasyCareCollectionPlants(sorted)
        } else {
            setSortedEasyCareCollectionPlants(sorted)
            setSortedEasyCareCollectionPlants(prev => prev.filter(el => [...el[1].name][0] === letter))
        }
    }



    return <>
        <Text style={styles.plantsCategory}>
            Rośliny łatwe w pielęgnacji
        </Text>
        
        <View style={styles.easyCareContainer}>
            <View style={styles.cardContainer}>
                {sortedEasyCareCollectionPlants.map((item, i) => 
                        <Card
                        cardStyle={{marginLeft: 0, marginRight: 0}}
                        profile={item[1].profile}
                        key={i}
                        name={item[1].name}
                        liked={item[1].liked}
                        src={item[0]}/>
                )}
            </View>
            <Slider onPress={onPressLetterHandler}/>
        </View>

    
    </>
}

const styles = StyleSheet.create({
    easyCareContainer: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        flexWrap: "wrap",
        marginTop: 24
    },
    cardContainer: {
        flexDirection: "row", 
        flexWrap: "wrap",
        width: "90%",
        justifyContent: "space-around"
    },
    plantsCategory: {
        fontFamily: "NunitoBold",
        fontSize: 18,
        marginLeft: 20,
        marginTop: 8
    },
    sliderContainer: {
        width: "10%", 
        flexDirection: "column",
    }
})