import React from "react";
import { View } from 'react-native';
import { globalStyles } from "../globalStyles";

export const ShortLine = ({style, active}) => {
    return <>
            <View style={[{flexDirection: "row", justifyContent: "center", width: "100%", marginTop: 14}, style]}>
                <View style={{width: "15%", height: 4, backgroundColor: (active ? globalStyles.successColor : globalStyles.mainColor), borderRadius: 6}}/>
            </View>
    </>
}