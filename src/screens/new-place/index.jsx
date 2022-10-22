import { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import colors from "../../utils/colors";
import { styles } from "./styles";
import ImageSelector from "../../Components/ImageSelector/ImageSelector";
import LocationSelector from "../../Components/LocationSelector/LocationSelector";
import { savePlace } from "../../store/place.slice";

const NewPlace = ({ navigation}) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const[location, setLocation] = useState("");
 

  const handdleChange = (value) =>{
    setTitle(value);
  } 

  const onPressButton = () =>{
    dispatch(savePlace(title,image,location))
    navigation.navigate("Places")
  }

  const onImage = (imageUri) =>{
    setImage(imageUri);
  }

  const onLocation = (loc) =>{
    setLocation(loc);
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Title</Text>
        <TextInput 
          placeholder="Nueva direccion"
          onChangeText={handdleChange}
          value={title}
          style={styles.textInput}
        />
        <ImageSelector onImage={onImage} />
        <LocationSelector onLocation={onLocation}/>
        <Button 
          title="Guardar lugar"
          onPress={onPressButton}
          color={colors.primary}
          styles={styles.button}
          disabled= {!image && !location && !title}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
