import React from "react";
import { StyleSheet, View, FlatList, ScrollView} from 'react-native';
import { PlantsNeeded } from './PlantsNeeded';
import { AddNew } from './AddNew';
import { PlantsSeparator } from '../ui/PlantsSeparator';
import { livingroomPlants, bedroomPlants } from '../../mainDataPlants';
import { Card } from '../ui/Card';

export const Collection = () => {

    return <>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={[styles.container]}>
        <PlantsNeeded
            userName={"Karolina"}
            howManyPlants={3}/>
        <AddNew/>
    </View>

    <View style={styles.imgCollection}>
        <PlantsSeparator styleContainer={styles.plantsSep}>
            W salonie
        </PlantsSeparator>
        <View style={styles.listContainer}>
            <FlatList
                keyExtractor={(item) => item}
                horizontal
                data={livingroomPlants}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, _ }) => 
                    <Card 
                        name={item[1].name}
                        src={item[0]}
                        profile={item[1].profile}
                        takenCare={item[1].takenCare} 
                        needWater={item[1].needWater}
                        days={item[1].days}/>}
            />

        </View>
        <PlantsSeparator styleContainer={styles.plantsSep}>
            W sypialni
        </PlantsSeparator>
        <View style={styles.listContainer}>
            <FlatList
                    keyExtractor={(item) => item}
                    horizontal
                    data={bedroomPlants}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, _ }) => 
                        <Card 
                            name={item[1].name}
                            src={item[0]}
                            profile={item[1].profile}
                            takenCare={item[1].takenCare} 
                            needWater={item[1].needWater}
                            days={item[1].days}/>}
                />

        </View>
    </View>
    </ScrollView>
    </>
}

const styles = StyleSheet.create({
    container: {
        top: 45, 
        marginHorizontal: 24,
    },
    imgCollection: {
        top: 45,
        marginBottom: 250
    },
    imgs: {
        width: 144,
        height: 204,
        borderRadius: 8,
        marginRight: 20,
        elevation: 4,
        marginBottom: 16,
    },
    listContainer: {
        marginTop: 19,
    },
    plantsSep: {
        marginTop: 23, 
        marginBottom: 6
    }
})