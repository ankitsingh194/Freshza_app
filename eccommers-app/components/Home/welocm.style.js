import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        width:"100%"
    },
    titleText:{
        fontFamily:"bold",
        fontSize:SIZES.xxLarge -28,
        marginLeft:SIZES.xSmall,
        marginTop:SIZES.small

    },
    welcomeText:{
        fontFamily:"bold",
        fontSize:SIZES.xxLarge -15,
        marginLeft:SIZES.small,
        marginTop:SIZES.small

    },
    welcomeText2:{
        fontFamily:"bold",
        fontSize:SIZES.xxLarge -10,
        marginLeft:SIZES.small,
        marginTop:SIZES.small -10,
        color:COLORS.primary



    },
    searchContainer:{
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
        marginTop:SIZES.small


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
        marginTop:SIZES.small

    }




})

export default styles