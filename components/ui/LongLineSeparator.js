import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList, ScrollView} from 'react-native';
import { useEffect, useRef, useState } from 'react';

export const LongLineSeparator = ({style}) => {
return <View style={[styles.line, style]}/>
}

const styles = StyleSheet.create({
    line: {
        height: 1,
        width: "100%",
        backgroundColor: "#64768E",
        marginTop: 21,
        marginBottom: 15,
        opacity: 0.1
    }
})