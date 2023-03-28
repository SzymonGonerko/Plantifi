import { useState, useEffect} from 'react';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Slider } from "@miblanchard/react-native-slider";
import { globalStyles } from '../globalStyles';


const borderWidth = 3;

export const SliderContainer = (props) => {
    const {sliderValue, trackMarks, type} = props;
    const [textContent, setTextContent] = useState("")
    const [value, setValue] = useState(sliderValue);
    let renderTrackMarkComponent;

    if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
        renderTrackMarkComponent = (index) => {
            const currentMarkValue = trackMarks[index];
            const currentSliderValue = value || (Array.isArray(value) && value[0]) || 0;
            const style = currentMarkValue > Math.max(currentSliderValue) ? trackMarkStyles.activeMark: trackMarkStyles.inactiveMark;
            return <View style={style} />;
        };
    }

    useEffect(() => {
        let val = value[0]
        if (type === "watering") {
            setTextContent(() => {
                if (val === 0) return "codzinnie"
                if (val === 1) return "Co 3 dni"
                if (val === 2) return "Co 1 tyg."
                if (val === 3) return "Co 2 tyg."
                if (val === 4) return "Co miesiąc"
            })
        }
        if (type === "transplanting") {
            setTextContent(() => {
                if (val === 0) return "Co 6 miesięcy"
                if (val === 1) return "Co 1 rok"
                if (val === 2) return "Co 3 lata"
                if (val === 3) return "Co 4 lata"
                if (val === 4) return "Co 5 lat"
            })
        }
        if (type === "cutting") {
            setTextContent(() => {
                if (val === 0) return "Co 1 tyg."
                if (val === 1) return "Co 2 tyg."
                if (val === 2) return "Co 1 miesiąc"
                if (val === 3) return "Co 6 miesięcy"
                if (val === 4) return "Co 1 rok"
            })
        }
        if (type === "fertilizating") {
            setTextContent(() => {
                if (val === 0) return "codzinnie"
                if (val === 1) return "Co 3 dni"
                if (val === 2) return "Co 1 tyg."
                if (val === 3) return "Co 2 tyg."
                if (val === 4) return "Co 1 miesiąc"
            })
        }
    }, [value])


    const renderChildren = () => {
        return React.Children.map(
            props.children,
            (child) => {
                if (!!child && child.type === Slider) {
                    return React.cloneElement(child, {
                        onValueChange: setValue,
                        renderTrackMarkComponent,
                        trackMarks,
                        value,
                    });
                }
                
                
                return child;
            },
        );
    };
    return (
        <View style={styles.sliderContainer}>
                <Text style={styles.title}>
                    {textContent}
                </Text>
            {renderChildren()}
        </View>
    );
};


const trackMarkStyles = StyleSheet.create({
    activeMark: {
        borderColor: globalStyles.greyColor,
        borderWidth,
        borderRadius: 30,
        left: "100%",
        top: 15
    },
    inactiveMark: {
        borderColor: globalStyles.mainColor,
        borderWidth,
        borderRadius: 30,
        left: "100%",
        top: 15
    },
});

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        margin: 16,
        paddingBottom: 32,
    },
    sliderContainer: {
        paddingVertical: 10,
    },
    title: {
        fontFamily: "NunitoBold",
        color: globalStyles.accentFontColor,
        fontSize: 16,
        left: "0%"
    }
});