import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable, Alert, Button } from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height + 200;

export const Login = ({onPressHandlerPrev}) => {

    return <>
    <View style={styles.container}>
        <Text>fdssdfsd</Text>
        <Button onPress={onPressHandlerPrev} title='fdsfd'></Button>
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      zIndex: -2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  