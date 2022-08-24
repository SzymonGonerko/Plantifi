import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable, Alert } from 'react-native';

const windowWidth = Dimensions.get('window').width + 200;
const windowHeight = Dimensions.get('window').height + 200;

export const Plants = () => {
    return (
        <View style={{backgroundColor: "red", flex: 1, width: windowWidth, height: windowHeight}}>
        <Text>Plants Screen</Text>
        </View>
    )

 
}