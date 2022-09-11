import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList, ScrollView, Alert} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Header } from '../components/ui/Header';
import { SearchInput } from '../components/ui/SearchInput';
import { SquareButton } from '../components/ui/SquareButton';
import { plantsCategory } from '../plantsData';
import { CategoryCard } from '../components/ui/CategoryCard';
import { LongLineSeparator } from '../components/ui/LongLineSeparator';
import { ExploreStartSection } from '../components/ExploreStartSection';
import { EasyCare } from '../components/EasyCare';


export const Explore = () => {
    const [textInput, setTextInput] = useState("")
    const [selectedCard, setSelectedCard] = useState([false, false, false, false, false, false])

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

        useEffect(() => {
            Alert.alert("Nawigacja", "w nawigacji możesz dotknąć kategorię łatwa pielęgnacja", [{text: "okey", style: "default"}])
        }, [])

    return (<>
    <Header>Odkrywaj</Header>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        
        <View style={styles.inputContainer}>
            <SearchInput style={{minWidth: 270, borderColor: "#5964768E"}} onChange={onChangeTextHandler}/>
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

        <LongLineSeparator/>
        {selectedCard[3] === false ? <ExploreStartSection/>:<EasyCare/>}
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