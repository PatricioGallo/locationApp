import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
    },
    preview:{
        width: "100%",
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.primary,
        marginVertical: 20,
    },
    imageStyle:{
        width:"100%",
        height:"100%",
    },
    botoenes:{
        width:"100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }
});