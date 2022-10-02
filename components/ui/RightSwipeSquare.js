import { StyleSheet, Text, View, Animated, Dimensions, ImageBackground, Pressable, Alert, FlatList, Image, ScrollView } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


    export const RightSwipeSquare = () => {
        return <View style={styles.container}>
            <MaterialCommunityIcons name='check-circle-outline' style={styles.checkedIcon}/>
            <Text style={styles.text}>Zrobione!</Text>
        </View>
        
    }
    const styles = StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#54795E",
            width: 109,
            height: 90,
            borderRadius: 7
        },
        checkedIcon: {
            fontSize: 35,
            color: "white"
        },
        text: {
            fontFamily: "NunitoBold",
            color: "white",
            fontSize: 16
        }
    })