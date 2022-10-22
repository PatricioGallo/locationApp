import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        height: '35%',
        width: "100%",
        minHeight: 300,
    },
    location:{
        marginTop:20,
        width: "90%",
        marginLeft:"5%",
        backgroundColor: "white",
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    addressContainer:{
        padding: 20,
    },
    address:{
        color: colors.black,
        textAlign: "center",
        color: colors.secondary,
    },
    map:{
        height:300,
    }
});