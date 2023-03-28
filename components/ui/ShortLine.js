import React from "react";
import { View } from 'react-native';
import { globalStyles } from "../globalStyles";

export const ShortLine = ({style}) => {
    return <>
            <View style={[{flexDirection: "row", justifyContent: "center", width: "100%", marginTop: 14}, style]}>
                <View style={{width: "15%", height: 4, backgroundColor: globalStyles.mainColor, borderRadius: 6}}/>
            </View>
    </>
}