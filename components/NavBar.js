import { useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';

export const        NavBar = ({isVisible}) => {
    return <>
            <Modal 
                animationType="fade"
                transparent={true}
                visible={isVisible}>
                    <View style={styles.container}>

                    </View>

            </Modal>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#495566",
        opacity: 0.45
    }
})