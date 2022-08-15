import { StyleSheet, Text, View, Pressable } from 'react-native';

export const Separator = ({style}) => {
    return <>
    <View style={[styles.container, style]}>
        <View style={styles.lineLeft}/>
        <View>
            <Text style={styles.text}>
                Nie masz jeszcze konta?
            </Text>
        </View>
        <View style={styles.lineRight}/>
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontFamily: "NunitoRegular",
    },
    lineLeft: {
        backgroundColor: "#737578",
        width: "50%",
        height: 1,
        marginRight: 10
    },
    lineRight: {
        backgroundColor: "#737578",
        width: "50%",
        height: 1,
        marginLeft: 10
    }
})