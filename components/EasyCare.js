import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList, ScrollView} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Card } from './ui/Card';
import { easyCareCollectionPlants } from '../plantsData';
import { Slider } from './ui/Slider';

const sorted = easyCareCollectionPlants.sort((a,b) => a[1].name.localeCompare(b[1].name))


export const EasyCare = () => {
    const [sortedEasyCareCollectionPlants, setSortedEasyCareCollectionPlants] = useState(sorted)
    return <>
        <Text style={styles.plantsCategory}>
            Rośliny łatwe w pielęgnacji
        </Text>

        <View style={{flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap"}}>
            <View style={styles.cardContainer}>
                {sortedEasyCareCollectionPlants.map((item, i) => 
                        <Card
                        key={i}
                        name={item[1].name}
                        liked={item[1].liked}
                        src={item[0]}/>
                )}
            </View>
            <Slider/>
        </View>

    
    </>
}

const styles = StyleSheet.create({
    cardContainer: {
        // marginTop: 24,
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