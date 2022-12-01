import React from "react";
import { StyleSheet, View, FlatList} from 'react-native';
import { useState } from 'react';
import { searchPlants } from '../mainDataPlants';
import { Card } from './ui/Card';
import { SearchInput } from './ui/SearchInput';

export const Favourite = () => {
    const [plants, setPlants] = useState(searchPlants)
    const [searchingPlants, setSearchingPlants] = useState(searchPlants)
    const [textInput, setTextInput] = useState("")

    const onChangeTextHandler = (e) => {
        setTextInput(e)
        const filteredPlants = plants.filter((el) => (el[1].name).toUpperCase().search(e.toUpperCase()) >= 0)
        setSearchingPlants(filteredPlants)
    }

    return <>
    <View style={styles.container}>
        <SearchInput onChange={onChangeTextHandler}/>

    </View>
    <FlatList
                    keyExtractor={(item) => item}
                    numColumns={2}
                    data={(textInput === "" ? plants  : searchingPlants)}
                    style={{marginTop: 50, width: "100%"}}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={<View style={{ height: 0, marginBottom: 200 }}></View>}
                    renderItem={({ item, _ }) => 
                        <Card
                            cardStyle={{width: "40%"}}
                            name={item[1].name}
                            profile={item[1].profile}
                            description={item[1].description}
                            src={item[0]}/>}
                />
    </>
}

const styles = StyleSheet.create({
    container: {
        top: 45,
        marginHorizontal: 24
    },
    searchInputContainer: {
        height: 48 , 
        backgroundColor: "white",
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 8,
    },
    searchIcon: {
        color: "black", 
        fontSize: 21, 
        marginBottom: 2,
    },
    iconButton: {
        position: "absolute", 
        right: 10, 
        width: 38, 
        height: 38, 
        top: 4
    },
})