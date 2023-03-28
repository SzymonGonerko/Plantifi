import React from "react";
import { StyleSheet, Keyboard} from 'react-native';
import { IconButton } from "@react-native-material/core";
import { OutlinedTextField } from 'rn-material-ui-textfield'
import AntDesign from "react-native-vector-icons/AntDesign"


export const SearchInput = ({onChange, style, onFocus, onBlur}) => {
    return <OutlinedTextField
    inputContainerStyle={[styles.searchInputContainer, style]}
    tintColor={"black"}
    contentInset={{input: 12}}
    placeholder="Jakiej rośliny szukasz?"
    activeLineWidth={0}
    onChangeText={(e) => onChange(e)}
    onFocus={onFocus}
    onBlur={onBlur}
    lineWidth={0}
    style={{fontFamily: "NunitoRegular"}}
    labelTextStyle={styles.searchLabel}
    renderRightAccessory={() => <IconButton onPress={() => Keyboard.dismiss()} style={styles.iconButton} icon={<AntDesign name='search1' style={styles.searchIcon}/>} />}
/>
}

const styles = StyleSheet.create({
    searchInputContainer: {
        height: 48, 
        backgroundColor: "white",
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 8,
    },
    searchIcon: {
        color: "black", 
        fontSize: 21, 
        marginBottom: 2,
    },
    iconButton: {
        position: "absolute", 
        right: 10, 
        width: 38, 
        height: 38, 
        top: 4
    },
})