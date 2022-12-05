import React from "react";
import { StyleSheet, View} from 'react-native';

export const LongLineSeparator = ({style}) => {
return <View style={[styles.line, style]}/>
}

const styles = StyleSheet.create({
    line: {
        height: 1,
        backgroundColor: "#64768E",
        marginTop: 21,
        marginBottom: 15,
        opacity: 0.1
    }
})