import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList, ScrollView} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Header } from '../components/ui/Header';
import { SearchInput } from '../components/ui/SearchInput';
import { SquareButton } from '../components/ui/SquareButton';
import { plantsCategory } from '../plantsData';
import { CategoryCard } from '../components/ui/CategoryCard';



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

    return (
    <View style={styles.container}>
        <Header>Odkrywaj</Header>
        
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
            renderItem={({ item, index }) => 
                <CategoryCard
                    name={item[1].name}
                    onPress={onPressHandler}
                    index={index}
                    isSelected={selectedCard[index]}
                    src={item[0]}/>}
        />
        
        
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    plantsCategory: {
        fontFamily: "NunitoBold",
        fontSize: 18,
        marginLeft: 30,
        marginTop: 8
    }
})