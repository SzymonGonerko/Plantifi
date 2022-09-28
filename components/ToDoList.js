import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable, Alert } from 'react-native';
import { LongLineSeparator } from './ui/LongLineSeparator';

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
    }

})