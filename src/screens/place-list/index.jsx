import { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlaceItems from "../../Components/PlaceItems/PlaceItems";
import { styles } from "./styles";
import { loadPlaces } from "../../store/place.slice";


const PlaceList = ({ navigation }) => {

  const listaPlace = useSelector(state => state.place.places)
  const dispatch = useDispatch();

  const onSelect = (id) => {
    navigation.navigate("PlaceDetail",{placeID: id})
  };

  const renderItem = ({item}) =>(
    <PlaceItems 
      {... item}
      onSelect={()=>onSelect(item.id)}
    />
  );

    useEffect(()=>{
      dispatch(loadPlaces());
    },[dispatch])

  return (
    <View style={styles.container}>
      <FlatList 
        data={listaPlace}
        renderItem={renderItem}
        keyExtractor= {(item) => item.id}
        style={styles.container}
        ListEmptyComponent={()=> <Text style={styles.text}>No hay lugares subidos.</Text>}
      />
    </View>
  );
};

export default PlaceList;
