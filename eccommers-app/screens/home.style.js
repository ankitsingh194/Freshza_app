import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants";

const styles = StyleSheet.create({
    textStyle:{
        fontFamily:"bold",
        fontSize:40

    },
    appBarwrapper:{
        marginHorizontal:22,
        marginTop:SIZES.small*4.5
    },
    appBar:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"

    },
    location:{
        fontFamily:'semibold',
        fontSize:SIZES.medium,
        color:COLORS.gray
    },
    cartCount:{
        position:"absolute",
        bottom:16,
        width:16,
        height:16,
        borderRadius:8,
        alignItems:"center",
        backgroundColor:"green",
        justifyContent:"center",
        zIndex:999
    },
    countNumber:{
        fontFamily:'regular',
        fontSize:10,
        fontWeight:'600',
        color:COLORS.lightWhite
    }

})

export default styles
