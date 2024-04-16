import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants";


const styles = StyleSheet.create({
    searchContainer:{
        marginTop:SIZES.medium*4.5,
        width:"95%",
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        marginVertical:SIZES.medium,
        height:50,
        marginLeft:10


    },
    searchIcon:{
        marginHorizontal:10,
        color:COLORS.gray,
        marginTop:SIZES.small,
        borderColor:COLORS.gray,


    },
    searchWrapper:{
        flex:1,
        backgroundColorC:COLORS.secondary,
        marginRight:SIZES.small,
        borderRadius:SIZES.small
    },
    searchInput:{
        fontFamily:"regular",
        width:"100%",
        height:"100%",
        paddingHorizontal:SIZES.small



    },
    searchBtn:{
        width:50,
        marginTop:SIZES.small,
        paddingLeft:10

    },
    searchImage:{
        resizeMode:'contain',
        marginTop:SIZES.medium,
        marginLeft:-20,
        width:SIZES.large*20,
        height:SIZES.large*20,
    
    }

})

export default styles