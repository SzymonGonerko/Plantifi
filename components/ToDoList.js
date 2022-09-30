import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable, Alert, FlatList, Image } from 'react-native';
import { LongLineSeparator } from './ui/LongLineSeparator';
import { toDoListPlants } from '../mainDataPlants';

export const ToDoList = () => {
    return <>
    <View style={styles.container}>
        <Text style={styles.header}>Zadania na dziś!</Text>
        <View style={styles.btnsContainer}>
            <View style={styles.btnFirst}>
                <Text style={{color: "#54795E", fontFamily: "NunitoBold"}}>Dla Każdej Rośliny</Text>
            </View>
            <View style={styles.btnSec}>
                <Text style={{color: "#9EA09E", fontFamily: "NunitoRegular"}}>Ta sama czynność</Text>
            </View>
        </View>
        <Text style={styles.isDoneText}>Zrobione? Przesuń w lewo!</Text>
        <LongLineSeparator/>
        <View style={{flexDirection: "column"}}>
                <FlatList
                    keyExtractor={(item) => item}
                    data={toDoListPlants}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, _ }) =>
                    <View>
                        <View style={{flexDirection: "row"}}>
                            <Image source={item[0]} style={{width: 67, height: 80, borderRadius: 8}}/>
                            <View style={{flexDirection: "column", justifyContent: "space-between", marginLeft: 20}}>
                                <View>
                                    <Text style={styles.title}>{item[1].name}</Text>
                                    <View style={{flexDirection: "row", alignItems: "center"}}>
                                        {item[1].whatNeed === "Potrzebuje Wody! (15ml)" && <Image resizeMode='contain' style={styles.icons} source={require("../assets/icons/toDoListIcons/Can.png")}/>}
                                        {item[1].whatNeed === "Potrzebuje przesadzenia!" && <Image resizeMode='contain' style={styles.icons} source={require("../assets/icons/toDoListIcons/Transplanting.png")}/>}
                                        {item[1].whatNeed === "Potrzebuje drenażu doniczki!" && <Image resizeMode='contain' style={styles.icons} source={require("../assets/icons/toDoListIcons/Pot.png")}/>}
                                        <Text style={styles.itemListText}>{item[1].whatNeed}</Text>
                                    </View>
                                </View>
                                <Pressable>
                                    <Text style={styles.instruction}>Zobacz instrukcję</Text>
                                </Pressable>
                                
                            </View>
                            
                        </View>
                        <LongLineSeparator/>
                    </View>
                        
                    }
                />
        </View>
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginHorizontal: 24
    },
    header: {
        marginTop: 20,
        fontFamily: "NunitoBold",
        fontSize: 20,
        marginBottom: 12
    },
    btnsContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    btnFirst: {
        width: 153,
        height: 36,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#54795E",
        justifyContent: "center",
        alignItems: "center",
    },
    btnSec: {
        width: 153,
        height: 36,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#9EA09E",
        justifyContent: "center",
        alignItems: "center"
    },
    isDoneText: {
        marginTop: 10,
        fontFamily: "NunitoRegular"
    },
    title: {
        fontFamily: "NunitoBold",
        fontSize: 18,
    },
    icons: {
        width: 17,
        height: 17
    },
    itemListText: {
        fontFamily: "NunitoRegular",
        color: "#495566",
        fontSize: 16,
        marginLeft: 6,
        marginTop: 2
    },
    instruction: {
        fontFamily: "NunitoBold",
        color: "#54795E",
        fontSize: 16
    }

})