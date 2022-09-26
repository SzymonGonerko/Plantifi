import { useState} from 'react';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import { Slider } from "@miblanchard/react-native-slider";


const borderWidth = 3;

export const SliderContainer = (props) => {
    const {sliderValue, trackMarks, type} = props;
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
            <View style={styles.titleContainer}>
                <Text>
                    
                
                </Text>
            </View>
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
});