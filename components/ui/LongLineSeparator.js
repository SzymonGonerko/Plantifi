import React from "react";
import { StyleSheet, View} from 'react-native';
import { globalStyles } from "../globalStyles";

export const LongLineSeparator = ({style}) => {
return <View style={[styles.line, style]}/>
}

const styles = StyleSheet.create({
    line: {
        height: 1,
        backgroundColor: globalStyles.accentColor,
        marginTop: 21,
        marginBottom: 15,
        opacity: 0.1
    }
})