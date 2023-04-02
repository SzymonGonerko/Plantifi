import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import { useState } from 'react';
import { Header } from '../components/ui/Header';
import { SearchInput } from '../components/ui/SearchInput';
import { SquareButton } from '../components/ui/SquareButton';
import { plantsCategory } from '../mainDataPlants';
import { CategoryCard } from '../components/ui/CategoryCard';
import { LongLineSeparator } from '../components/ui/LongLineSeparator';
import { ExploreStartSection } from '../components/Explore/ExploreStartSection';
import { EasyCare } from '../components/Explore/EasyCare';


export const Explore = (props) => {
    const {onFocus, onBlur, onPressArrowBack, navigation, showMenu, onPressProfilePlant} = props
    const [textInput, setTextInput] = useState("")
    const [selectedCard, setSelectedCard] = useState([false, false, false, true, false, false])

    const onChangeTextHandler = (e) => {
        setTextInput(e)
    }

    const onPressHandler = (index) => {
        setSelectedCard(prev => prev.map((el, i) => {
            if (i === index) el = true 
            else el = false
            return el
        }))
        }


    return (<>
    <Header 
        showMenu={showMenu} 
        navigation={navigation} 
        onPressArrowBack={onPressArrowBack}
        >
            Odkrywaj
    </Header>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        
        <View style={styles.inputContainer}>
            <SearchInput onFocus={onFocus} onBlur={onBlur} style={{minWidth: 270, borderColor: "#5964768E"}} onChange={onChangeTextHandler}/>
            <SquareButton styleButton={{backgroundColor: "#F2F2F2"}} styleContainer={{marginTop: 20, marginLeft: 10}} type={'slider'}/>
        </View>
        <Text style={styles.plantsCategory}>
            Kategorie roślin
        </Text>
        <FlatList
            keyExtractor={(item) => item}
            horizontal
            data={plantsCategory}
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 15}}
            renderItem={({ item, index }) => 
                <CategoryCard
                    name={item[1].name}
                    onPress={onPressHandler}
                    index={index}
                    isSelected={selectedCard[index]}
                    src={item[0]}/>}
        />

        <LongLineSeparator style={{marginTop: 15}}/>
        {selectedCard[3] === false ? 
            <ExploreStartSection onPressProfilePlant={onPressProfilePlant}/>:
            <EasyCare onPressProfilePlant={onPressProfilePlant}/>}
        <View style={{width: 50, height: 200}}/>
    </ScrollView>

    </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    plantsCategory: {
        fontFamily: "NunitoBold",
        fontSize: 18,
        marginLeft: 20,
        marginTop: 8
    },
})