import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList, ScrollView} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { lostPlants } from '../plantsData';
import { LostPlantsCard } from './ui/LostPlantsCard';
import { Button } from './ui/Button';



export const Lost = () => {


    return <>
    <View style={styles.container}>
        <Text style={styles.userNameText}>Karolina,</Text>
        <Text style={styles.defaultText}>
            To historia Twoich roślin, które odeszły do zielonego nieba. Pamiętaj o nich aby nie popełnić tych samych błędów!
        </Text>
        <FlatList
            keyExtractor={(item) => item}
            horizontal
            style={styles.list}
            data={lostPlants}
            renderItem={({ item, _ }) => <LostPlantsCard src={item[0]} name={item[1].name}/>}
        />
        <View style={styles.btnContainer}>
            <Button styleContainer={{height: 46}}>Zapal znicz</Button>
        </View>
       
        
        

    </View>
    
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 45,
        paddingTop: 22,
        paddingHorizontal: 26,
        backgroundColor: "white"
    },
    userNameText: {
        fontFamily: "NunitoBold",
        fontSize: 20,
        lineHeight: 27,
        marginBottom: 5
    },
    list: {
        marginTop: 32
    },
    defaultText: {
        lineHeight: 19,
        fontSize: 14,
        fontFamily: "NunitoRegular"
    },
    btnContainer: {
        position: "absolute", 
        top: 270, 
        left: 26, 
        right: 26
    }

})