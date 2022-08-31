import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated} from 'react-native';
import { useEffect, useRef } from 'react';
import { PlantsNeeded } from './PlantsNeeded';

export const Collection = () => {

    useEffect(() => {console.log(5)}, [])

    return <>
    <View style={[styles.container]}>
        <PlantsNeeded
            userName={"Karolina"}
            howManyPlants={3}/>

    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        top: 45, 
        // width: 100, 
        height: 500, 
        backgroundColor: "violet"
    }
})