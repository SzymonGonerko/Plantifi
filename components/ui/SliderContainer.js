import { useState, useEffect} from 'react';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import { Slider } from "@miblanchard/react-native-slider";


const borderWidth = 3;

export const SliderContainer = (props) => {
    const {sliderValue, trackMarks, type} = props;
    const [textContent, setTextContent] = useState("")
    const [value, setValue] = useState(sliderValue ? sliderValue : DEFAULT_VALUE);
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
            {/* <View style={styles.titleContainer}> */}
                <Text style={styles.title}>
                    {textContent}
                </Text>
            {/* </View> */}
            {renderChildren()}
        </View>
    );
};


const trackMarkStyles = StyleSheet.create({
    activeMark: {
        borderColor: '#C4C4C4',
        borderWidth,
        borderRadius: 30,
        left: "100%",
        top: 15
    },
    inactiveMark: {
        borderColor: '#54795E',
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
        paddingVertical: 16,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: "NunitoBold",
        color: "#495566",
        fontSize: 16,
        left: "0%"
    }
});