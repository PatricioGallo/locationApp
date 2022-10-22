import { styles } from "./styles";
import MapView , {Marker} from "react-native-maps";
import { useLayoutEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import colors from "../../utils/colors";
import IonicIcons from "@expo/vector-icons/Ionicons"


const Maps = ({ navigation,route}) => {

  const [selectedLocation, setSelectedLocation] = useState();
  const {lat,lng} = route.params; 


  const initialRegion = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: 0.095,
    longitudeDelta: 0.095,
  }
  const picLocation = (event) =>{
    setSelectedLocation(
      {
        lat: event.nativeEvent.coordinate.latitude,
        lng: event.nativeEvent.coordinate.longitude,
      }
    )
  };

  const saveLocation = ()=>{
    if(selectedLocation) {
      navigation.navigate("NewPlace",{mapLocation: selectedLocation});
    }
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight: ()=>(
        <TouchableOpacity onPress={saveLocation}>
          <IonicIcons name="md-save-sharp" size={24} color={colors.black}/>
        </TouchableOpacity>
    )
    })

  },[navigation,saveLocation])


  return (
   <MapView 
    style={styles.container} 
    initialRegion={initialRegion}
    onPress={picLocation}
   >
    {
      selectedLocation? 
        <Marker 
          title="ubicacion seleccioanda"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      :
        null
    }
   </MapView>
  );
};

export default Maps;
