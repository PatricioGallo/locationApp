import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import PlaceItems from "../../Components/PlaceItems/PlaceItems";
import { styles } from "./styles";

const PlaceList = ({ navigation }) => {

  const listaPlace = useSelector(state => state.place.places)

  const onSelect = (id) => {
    navigation.navigate("PlaceDetail",{placeId: id})
    console.log(id);
  };

  const renderItem = ({item}) =>(
    <PlaceItems 
      {... item}
      onSelect={()=>onSelect(item.id)}
    />
  );

  console.log(listaPlace)
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
