import React from "react";
import { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Animated, Alert, ScrollView} from 'react-native';
import { SquareButton } from '../ui/SquareButton';
import { ShortLine } from '../ui/ShortLine';
import AntDesign from "react-native-vector-icons/AntDesign";
import { Button } from '../ui/Button';
import { LongLineSeparator } from "../ui/LongLineSeparator";
import { PopUpSuccess } from "../ui/PopUpSuccess";
import { Pagination } from "../ui/Pagination";
import { SlideItem } from "../ui/SlideItem";
import { Heart } from "../ui/Heart"
import { globalStyles } from "../globalStyles";
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;



export const PlantDetails = ({onPressSquare, data, setCorrectGrammar}) => {
  const [addedNew, setAddedNew] = useState(false)
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    Alert.alert("Świetnie!", `rozpoznaliśmy Twoją roślinę! ${setCorrectGrammar(data.howManyReuqestLeft)}`)
  }, [])

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnItemsChanged = useRef(({viewableItems}) => {
    setIndex(viewableItems[0].index);
  }).current;



  const addPlantsToCollection = () => {
    setAddedNew(true)
    setTimeout(() => {onPressSquare()}, 2000)
}
  
    return <>
        <View style={styles.bgcContainer}>
            <FlatList
              data={data.img}
              style={{}}
              renderItem={({item}) => <SlideItem item={item} />}
              horizontal
              pagingEnabled
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              onScroll={handleOnScroll}
              onViewableItemsChanged={handleOnItemsChanged}
            />
            <Pagination data={data.img} scrollX={scrollX} index={index} />
            <Heart onPress={null} bottomPosition={-8}/>

            <SquareButton onPress={onPressSquare} styleContainer={styles.btnSqure} type={"arrow"}/>
        </View>

        <View style={styles.profileInfo}>

            <ShortLine style={{marginTop: 14}}/>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.latin}>łac. {data.latin}</Text>
            <Text style={styles.probability}>{data.probability}% trafności</Text>
            
            <LongLineSeparator style={{marginTop: 10}}/>
            
            <ScrollView showsVerticalScrollIndicator={false} style={{height: "23%"}}>
              <Text style={styles.textTitleDescription}>OPIS</Text>
                <Text style={styles.textDescription}>
                {data.description}
                {"\n"}
              </Text>
              <Text style={styles.textTitleDescription}>NAWODNIENIE</Text>
                <Text style={styles.textDescription}>
                  {data.watering === 1 ? `Ostrożnie z wodą! ${data.name} wymaga rzadkiego podlewania. Roślinkę nawadniaj tylko wtedy gdy ziemia jest bardzo sucha. Zbyt częste nawadnianie może prowadzić do choroby.`: null}
                  {data.watering === 2 ? `${data.name} wymaga umiarkowanego podlewania. Zadbaj aby ziemia była lekko wolgotna. Zbyt rzadkie nawodnienie może powodować, że roślina nie będzie rosnąć, a jej przelanie może prowadzić do choroby.`: null}
                  {data.watering === 3 ? `Nie żałuj wody! ${data.name} wymaga częstego podlewania. Najlepiej czuje się w wilgotnym otoczeniu. Zbyt rzadkie nawodnienie może powodować że roślina nie będzie rosnąć.`: null}
                  {"\n"}
              </Text>
            </ScrollView>
            <LinearGradient
                colors={['transparent', 'rgba(200,200,200,0.8)']}
                style={[{height: 20}, {transform: [{translateY: -20}]}]}
            />
            
            <Button
            onPress={addPlantsToCollection}
            icon={<AntDesign name='plus' style={styles.iconStyle}/> }
            styleContainer={styles.btnStyle}
            >
              Dodaj do moich roślin
            </Button>
        </View>
        {addedNew && <PopUpSuccess onPressClose={() => setAddedNew(false)}/>}
    </>
}

const styles = StyleSheet.create({
    bgcContainer: {
      marginTop: 25,
      width: "100%",
      height: "40%",
      borderRadius: 17
  },
  background: {
      height: "100%",
      width: windowWidth - 20,
      marginHorizontal: 10,
      marginTop: 10,
      zIndex: -2
  },
  img: {
    borderRadius: 17,
  },
  name: {
    fontFamily: "NunitoBold",
    marginLeft: 24,
    marginTop: 15,
    fontSize: 24,
  },
  latin: {
    fontFamily: "NunitoItalic",
    marginLeft: 24,
    fontSize: 18,
  },
  probability: {
    fontFamily: "NunitoItalic",
    marginLeft: 24,
    marginBottom: 10,
    fontSize: 16,
  },

  profileInfo: {
    backgroundColor: globalStyles.backgroundLightGrey ,
    marginHorizontal: 10,
    marginTop: -20,
    borderRadius: 20,
  },
  btnSqure: {
    position: "absolute",
    left: "10%",
    top: "20%"
  },
  iconStyle: {
    position: "absolute", 
    top: "45%", 
    right: 25, 
    color: "white", 
    fontSize: 18
},
btnStyle: {
  height: 50,
},
textTitleDescription:{
  fontFamily: "NunitoBold",
  fontSize: 14,
  marginBottom: 10,
  marginLeft: 7,
},
textDescription: {
  fontFamily: "NunitoRegular",
  marginLeft: 7,
  lineHeight: 19,
  fontSize: 14,
  color: globalStyles.accentFontColor,
  letterSpacing: 0.5,
},
  });
  