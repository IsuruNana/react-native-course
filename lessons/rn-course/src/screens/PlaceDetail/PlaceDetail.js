import React from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';

import { deletePlace } from '../../store/actions/places';

class PlaceDetail extends React.Component {
  state = {
    viewMode: 'portrait'
  }

  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', this.updateStyles)
  }

  componentWillMount() {
    Dimensions.removeEventListener('change', this.updateStyles)
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
    })
  }

  placeDeletedHandler = key => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop()
  }

  render(){
    return (
      <View style={[
          styles.container, 
          this.state.viewMode === 'portrait'
            ? styles.portContainer
            : styles.landContainer
      ]}>
        <View style={styles.subContainer}>
          <Image source={this.props.selectedPlace.image} style={styles.placeImage}/>
        </View>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={this.placeDeletedHandler}>
              <View style={styles.deleteButton}>
                <Icon 
                  size={30} 
                  name={Platform.OS === 'android' ? "md-trash" : "ios-trash" }
                  color="red" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22,
    flex: 1
  },
  portContainer: {
    flexDirection: "column"
  },
  landContainer: {
    flexDirection: "row"
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  },
  subContainer: {
    flex: 1
  }
})

const mapDispatchToProps = dispatch => ({
  onDeletePlace: (key) => dispatch(deletePlace(key))
})

export default connect(null ,mapDispatchToProps)(PlaceDetail);