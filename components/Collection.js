import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated} from 'react-native';
import { useEffect, useRef } from 'react';
import { PlantsNeeded } from './PlantsNeeded';
import { AddNew } from './AddNew';

export const Collection = () => {


    return <>
    <View style={[styles.container]}>
        <PlantsNeeded
            userName={"Karolina"}
            howManyPlants={3}/>
        <AddNew/>
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        top: 45, 
        marginHorizontal: 24,
    }
})