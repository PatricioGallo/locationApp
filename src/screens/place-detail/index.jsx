import { View, Text } from "react-native";
import Detail from "../../Components/Detail/Detail";
import { styles } from "./styles";

const PlaceDetail = ({ navigation, route}) => {
  const {placeID} = route.params;
  return (
    <View style={styles.container}>
      <Detail placeID={placeID} />
    </View>
  );
};

export default PlaceDetail;
