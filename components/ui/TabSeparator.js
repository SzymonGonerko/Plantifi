import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated} from 'react-native';

export const TabSeparator = ({animOpacity}) => {
    return <Animated.View style={[styles.tabSeparator, {opacity: animOpacity}]}/>
}

const styles = StyleSheet.create({
    tabSeparator: {
      position: "absolute",
      bottom: -33,
      width: 77,
      height: 4,
      backgroundColor: "#54795E",
      borderRadius: 20
    }
})