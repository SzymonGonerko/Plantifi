import React from "react";
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { lostPlants } from '../../mainDataPlants';
import { LostPlantsCard } from '../ui/LostPlantsCard';
import { Button } from '../ui/Button';



export const Lost = () => {

    return <>
    <View style={styles.container}>
        <Text style={styles.userNameText}>Anna,</Text>
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
            <Button styleContainer={{height: 46}}>Upamiętnij</Button>
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