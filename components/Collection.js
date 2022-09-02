import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { PlantsNeeded } from './PlantsNeeded';
import { AddNew } from './AddNew';
import { PlantsSeparator } from './ui/PlantsSeparator';
import { data } from '../plantsData';
import { Card } from './ui/Card';

export const Collection = () => {



    return <>

    <View style={[styles.container]}>
        <PlantsNeeded
            userName={"Karolina"}
            howManyPlants={3}/>
        <AddNew/>
    </View>

    <View style={styles.imgCollection}>
        <PlantsSeparator styleContainer={{marginTop: 23, marginBottom: 6}}>
            W salonie
        </PlantsSeparator>
        <FlatList
            keyExtractor={(item) => item}
            horizontal
            data={data}
            renderItem={({ item, _ }) => (console.log(), <Card src={item[0]}/>)   }
        />

    </View>


    </>
}

const styles = StyleSheet.create({
    container: {
        top: 45, 
        marginHorizontal: 24,
    },
    imgCollection: {
        top: 45
    },
    imgs: {
        width: 144,
        height: 204,
        borderRadius: 8,
        marginRight: 20,
        elevation: 4,
        marginBottom: 16,
    },
})