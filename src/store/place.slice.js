import { createSlice } from "@reduxjs/toolkit";
import { URL_GEOCODING } from "../utils/maps";
import Place from "../Models/Place";

const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state,action)=>{
      const newPlace = new Place (Date.now(), action.payload.title ,action.payload.image, action.payload.address, action.payload.lat , action.payload.lng);
      state.places.push(newPlace);
    }
  },
});

export const {addPlace} = placeSlice.actions;


export const savePlace = (title,image,coords) =>{
  return async (dispatch)=>{

    const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));
    if(!response.ok) throw new Error("Something went wrong");
    const data = await response.json();

    if(!data.results) throw new Error("Something went wrong");

    const address = data.results[0].formatted_address;
    console.log(address);
    try{
      const lat = coords.lat;
      const lng = coords.lng;
      dispatch(addPlace({title,image,address,lat,lng}));

    }catch(err){console.warm(err); throw err;}

  }
};

export default placeSlice.reducer;
