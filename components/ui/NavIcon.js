import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable } from 'react-native';
import * as Animatable from 'react-native-animatable';

export const NavIcon = ({source, text}) => {
    return <>
    <View style={styles.container} >
        <Image style={styles.plantsIcon} resizeMode="contain" source={source}/>
        <Animatable.Text animation="bounceIn" easing="ease-out" iterationCount="infinite" style={styles.text}>{text}</Animatable.Text>
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    plantsIcon: {
        width: 30,
        height: 30,
    },
    text: {
        fontSize: 12,
        fontFamily: "NunitoRegular",
        color: "#54795E"
    }
})