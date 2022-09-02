import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated, FlatList} from 'react-native';


export const Card = ({src}) => {
    return <>
    <View style={styles.container}>
        <View style={styles.tagContainer}>
            <Text style={styles.tagText}>Something</Text>
        </View>
        
        <ImageBackground source={src} style={styles.imgs}/>
    </View>
    
    </>
}

const styles = StyleSheet.create({
    tagContainer: {
        position: 'absolute',
        top: 8,
        right: 0,
        zIndex: 2,
        backgroundColor: "#ffffff73",
        paddingTop: 4,
        paddingBottom: 3,
        paddingLeft: 11,
        paddingRight: 10,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30
    },
    tagText: {
        fontSize: 12,
        fontFamily: "NunitoRegular"

    },
    container: {
        position: 'relative',
        width: 144,
        height: 204,
        borderRadius: 8,
        marginRight: 20,
        elevation: 4,
        marginBottom: 16,
    },
    imgs: {
        width: "100%",
        height: "100%",
    },
})