// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { connect } from 'react-redux';

// import PlaceInput from './src/components/PlaceInput/PlaceInput';
// import PlaceList from './src/components/PlaceList/PlaceList';
// import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// //import placeImage from './src/assets/beatiful-place.jpg';

// import { addPlace, deselectPlace, deletePlace, selectPlace } from './src/store/actions';

// class App extends React.Component {

//   placeAddedHandler = placeName => {
//     this.props.onAddPlace(placeName);
//   }

//   placeDeletedHandler = () => {
//     this.props.onDeletePlace();
//   }

//   modalClosedHandler = () => {
//     this.props.onDeselectPlace();
//   }

//   placeSelectedHandler = key => {
//     this.props.onSelectPlace(key);
//   }

//   render() {
    
//     return (
//       <View style={styles.container}>
//         <PlaceDetail
//           selectedPlace={this.props.selectedPlace}
//           onItemDeleted={this.placeDeletedHandler}
//           onModalClosed={this.modalClosedHandler} />
//         <PlaceInput onPlaceAdded={this.placeAddedHandler} />
//         <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     padding: 20
//   }
// });

// const mapStateToProps = state => ({
//   places: state.places.places ,
//   selectedPlace: state.places.selectedPlace
// })

// const mapDispatchToProps = dispatch => ({
//   onAddPlace: (name) => dispatch(addPlace(name)),
//   onDeletePlace: () => dispatch(deletePlace()),
//   onSelectPlace: (key) => dispatch(selectPlace(key)),
//   onDeselectPlace: () => dispatch(deselectPlace()),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);

import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceSceen from './src/screens/FindPlace/FindPlace';
import PlaceDetailsScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

import configureStore from './src/store/configureStore';

const store = configureStore();


//Register Screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.FindPlaceSceen", () => FindPlaceSceen, store, Provider);
Navigation.registerComponent("awesome-places.PlaceDetailsScreen", () => PlaceDetailsScreen, store, Provider);
Navigation.registerComponent("awesome-places.SideDrawer", () => SideDrawer);

//Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
});