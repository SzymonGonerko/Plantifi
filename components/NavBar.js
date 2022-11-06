import { useEffect, useState } from 'react';
import { StyleSheet, View, Modal, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { IconButton } from "@react-native-material/core";
import AntDesign from "react-native-vector-icons/AntDesign"

export const NavBar = ({isVisible, showMenu}) => {
    const [typeAnimation, setTypeAnimation] = useState("fadeInRight")


    const onPressHandler = () => {
        setTypeAnimation("fadeOutRight")
        setTimeout(() => {
            showMenu()
            setTypeAnimation("fadeInRight")
        }, 200)
    }


    return <>
            <Modal 
                animationType="fade"
                transparent={true}
                visible={isVisible}>
                    <View style={styles.container}>
                        <Animatable.View style={styles.nav} duration={200} easing="ease-out" iterationCount={1} animation={typeAnimation}>
                            <View style={styles.avatar}>
                                <IconButton onPress={onPressHandler} style={styles.closeIcon} icon={<AntDesign name={"close"} style={{fontSize: 25}}/>}/>
                                <View style={[styles.imgContainer, {transform: [{translateX: -36}, {translateY: -36}]}]}>
                                    <Image style={[styles.userImg]} resizeMode='cover' source={require("../assets/images/NavBar/User.png")}/>
                                </View>
                                
                                

                            </View>

                        </Animatable.View>
                    </View>

            </Modal>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#49556652",
    },
    nav: {
        backgroundColor: "white", 
        height: "100%",
        width: "60%",
        left: "40%"
    },
    avatar: {
        position: "relative",
        width: "100%",
        height: "20%"
    },
    closeIcon: {
        position: "absolute",
        top: 10,
        left: 10,
        width: 40, 
        height: 40
    },
    imgContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        padding: 5,  
        borderWidth: 1, 
        borderColor: "#54795E",
        borderRadius: 200
    },
    userImg: {
        width: 74,
        height: 74,
        borderRadius: 100
    },
})