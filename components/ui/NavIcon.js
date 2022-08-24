import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable } from 'react-native';

export const NavIcon = ({source}) => {
    return <>
    <View>
        <Image style={styles.plantsIcon} resizeMode="contain" source={source}/>
    </View>
    </>
}

const styles = StyleSheet.create({
    plantsIcon: {
        width: 30,
        height: 30,
    }
})