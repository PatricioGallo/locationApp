import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchable:{
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: colors.secondary,
        marginVertical: 10,
        padding: 20,
        borderRadius: 10,
    },
    image:{
        width: 80,
        height: 80,
        borderRadius: 10,
        
    },
    info:{
        flex: 1,
        alignItems: "center",
    },
    title:{
        fontSize: 18,
        fontStyle: "italic",
        marginVertical:10
    },
    address:{
        fontSize: 15
    }
    
})