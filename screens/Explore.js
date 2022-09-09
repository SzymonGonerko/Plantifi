import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList, ScrollView} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Header } from '../components/ui/Header';
import { SearchInput } from '../components/ui/SearchInput';
import { SquareButton } from '../components/ui/SquareButton';
import { plantsCategory } from '../plantsData';
import { CategoryCard } from '../components/ui/CategoryCard';
import { LongLineSeparator } from '../components/ui/LongLineSeparator';
import { Card } from "../components/ui/Card"
import { likedPlants } from '../plantsData';
import { dailyPlants } from '../plantsData';

const windowWidth = Dimensions.get('window').width;

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
        <Text style={styles.plantsCategory}>
            Użytkownicy lubią:
        </Text>
        <FlatList
            keyExtractor={(item) => item}
            horizontal
            data={likedPlants}
            style={{marginTop: 24}}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => 
            <Card
                name={item[1].name}
                liked={item[1].liked}
                src={item[0]}/>}
        />
        <Text style={styles.plantsCategory}>
            Poznaj roślinę dnia
        </Text>
        <FlatList
            keyExtractor={(item) => item}
            horizontal
            data={dailyPlants}
            style={{marginTop: 24}}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => 
            <Card
                cardStyle={{width: windowWidth - 40}}
                name={item[1].name}
                liked={item[1].liked}
                src={item[0]}/>}
        />
        <Text style={styles.plantsCategory}>
            Czy wiesz, że...
        </Text>
        <Text style={styles.defaultText}>
            W polsce na terenach bagnistych i rozlewiskach rosną 3 gatunki rosiczki, a roślina ta żyje do 50 lat !
        </Text>
        <Text style={styles.knowMoreText}>
            Dowiedz się więcej
        </Text>
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
    defaultText: {
        marginLeft: 20,
        fontFamily: "NunitoRegular",
        paddingRight: 5,
        fontSize: 13,
        marginTop: 8
    },
    knowMoreText: {
        marginLeft: 20,
        fontFamily: "NunitoBold",
        fontSize: 15,
        marginTop: 8,
        color: "#54795E"
    }
})