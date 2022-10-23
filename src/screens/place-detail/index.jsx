import { View, Text, Alert, TouchableOpacity } from "react-native";
import Detail from "../../Components/Detail/Detail";
import { styles } from "./styles";
import IonicIcons from "@expo/vector-icons/Ionicons"
import { useEffect } from "react";
import colors from "../../utils/colors";
import { removePlace } from "../../store/place.slice";
import { useDispatch } from "react-redux";

const PlaceDetail = ({ navigation, route}) => {
  
  const {placeID} = route.params;
  const dispatch = useDispatch();

  useEffect(()=>{
    navigation.setOptions({
      headerRight: ()=>(
        <TouchableOpacity onPress={()=> Alert.alert("Borrar lugar","Seguro que desea borrar?",      [
          {
            text: "Cancelar",
            onPress: () => null,
            style: "cancel"
          },
          { text: "Borrar", onPress: ()=> {
            navigation.navigate("Places")
              dispatch(removePlace(placeID))              
            } 
          }
        ])}>
          <IonicIcons name="trash-outline" size={24} color={colors.black}/>
        </TouchableOpacity>
    )
    })

  },[])


  return (
    <View style={styles.container}>
      <Detail placeID={placeID} />
    </View>
  );
};

export default PlaceDetail;
