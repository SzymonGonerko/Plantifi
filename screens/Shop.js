import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { Header } from "../components/ui/Header"

export const Shop = (props) => {
    const {onPressArrowBack, navigation, showMenu} = props
    return <>
    <Header 
        showMenu={showMenu} 
        navigation={navigation} 
        onPressArrowBack={onPressArrowBack}
        >
            Sklep
    </Header>
    <View style={styles.container}>
        <Text style={styles.title}>Tu może być Twój sklep!</Text>
        <Text style={styles.infoText}>
            Plantifi czeka na inwestora. Jeżeli zajmujesz się sprzedażą roślin lub artykułów z nimi zawiaznych, to napisz do nas !
        </Text>
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 200,

    },
    title: {
       fontFamily: "NunitoBold",
       fontSize: 20
    },
    infoText: {
        fontFamily: "NunitoRegular",
        fontSize: 14,
        marginHorizontal: 25,
        marginTop: 10
    }

})