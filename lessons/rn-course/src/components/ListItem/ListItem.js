import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const listItem = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onItemPressed}>
      <View style={styles.listItem} >
        <Image source={props.placeImage} style={styles.placeImage}/>
        <Text>{props.placeName}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    margin: 5,
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    maximumHeight: 30,
    width: 30
  }
});

export default listItem;