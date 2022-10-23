import { createSlice } from "@reduxjs/toolkit";
import { URL_GEOCODING } from "../utils/maps";
import Place from "../Models/Place";
import { insertPlace } from "../db";
import { getPlaces } from "../db";

const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state,action)=>{
      const newPlace = new Place (action.payload.id, action.payload.title ,action.payload.image, action.payload.address, action.payload.lat , action.payload.lng);
      state.places.push(newPlace);
    },
    removePlace: (state,action)=>{
      const newPlace = state.places.filter(place => place.id !== action.payload)
      state.places = newPlace;
    },
    setPlaces: (state, action)=>{
      state.places = action.payload;
    }
  },
});

export const {addPlace, removePlace,setPlaces} = placeSlice.actions;


export const savePlace = (title,image,coords) =>{
  return async (dispatch)=>{

    const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));
    if(!response.ok) throw new Error("Something went wrong");
    const data = await response.json();

    if(!data.results) throw new Error("Something went wrong");

    const address = data.results[0].formatted_address;
    try{

      const lat = coords.lat;
      const lng = coords.lng;

      const result = await insertPlace(title,image,address,lat,lng);

      dispatch(addPlace({id: result.insertId, title,image,address,lat,lng}));


    }catch(err){console.warm(err); throw err;}

  }
};


export const loadPlaces = ()=>{
  return async (dispatch) => {
    try{

        const result = await getPlaces();
        dispatch(setPlaces(result.rows._array));

    }catch(err){
      console.log(err);
    }
  }
}

export default placeSlice.reducer;

