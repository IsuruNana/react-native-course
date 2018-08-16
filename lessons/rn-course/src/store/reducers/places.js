import { 
  ADD_PLACE,
  DELETE_PLACE
 } from '../actionTypes';

const initialState = {
  places: [],
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri: "https://www.w3schools.com/bootstrap/sanfran.jpg"
          }
        })
      }
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => place.key !== action.placeKey)
      }
    default:
      return state;
  }
};

export default reducer;