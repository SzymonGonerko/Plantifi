import React from "react";
import { StyleSheet } from 'react-native';
import { View, Text } from "react-native-animatable";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Title = ({visibility}) => {
    return (
    <View style={[{flexDirection: "row", justifyContent: "center"}, {opacity: visibility}]}>
        <Text style={styles.title}>
            Plantifi
        </Text>
        <View style={{paddingTop: 20}}>
            <FontAwesome name="copyright" size={13} color="#ffffff" />
        </View>
    </View>
    )
}
    
const styles = StyleSheet.create({
    title: {
        color: "white", 
        fontSize: 70, 
        textAlign: "center", 
        fontFamily: "PlayfairDisplayBold", 
        letterSpacing: -2,
    }
})
    



