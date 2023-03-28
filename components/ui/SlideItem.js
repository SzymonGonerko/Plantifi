import React from 'react';
import { Image, StyleSheet, View, Dimensions} from 'react-native';

  const {width} = Dimensions.get('screen');
  export const SlideItem = ({item}) => {
  
    return (
      <View style={styles.container}>
        <Image
          source={{uri: item}}
          style={styles.image}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      overflow: "hidden",
      width,
      paddingHorizontal: 10,
      marginTop: 10,
      alignItems: 'center',
    },
    image: {
      flex: 1,
      width: '100%',
      borderRadius: 20,
      marginHorizontal: 10,
    },
  });