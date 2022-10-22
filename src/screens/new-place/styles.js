import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin:20
  },
  title:{
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },
  textInput:{
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    padding: 5,
    marginBottom:10,
  },
});
