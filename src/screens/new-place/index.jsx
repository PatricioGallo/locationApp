import { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import colors from "../../utils/colors";
import { addPlace } from "../../store/place.slice";
import { styles } from "./styles";
import ImageSelector from "../../Components/ImageSelector/ImageSelector";
import LocationSelector from "../../Components/LocationSelector/LocationSelector";


const NewPlace = ({ navigation }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const[location, setLocation] = useState("");

  const handdleChange = (value) =>{
    setTitle(value);
  } 

  const onPressButton = () =>{
    dispatch(addPlace({title: title ,image: image, address: location}))
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
          title="Save Place"
          onPress={onPressButton}
          color={colors.primary}
          styles={styles.button}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
