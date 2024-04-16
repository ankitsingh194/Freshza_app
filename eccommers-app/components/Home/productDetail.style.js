import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightWhite

    },
    upperRow:{
        marginHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        position:'absolute',
        top:SIZES.xxLarge,
        width:SIZES.width-44,
        zIndex:999

    },
    image:{
        aspectRatio:1,
        resizeMode:"cover",
        
    },
    details:{
        marginTop: -SIZES.large,
        backgroundColor:COLORS.lightWhite,
        width:SIZES.width,
        borderTopLeftRadius:SIZES.medium,
        borderTopEndRadius:SIZES.medium
    },
    cartRow:{
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width -44,
        

    },
    cartBtn:{
        width:250,
        height:40,
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.large,
        alignItems:"center",
        padding:6,
        marginLeft:SIZES.small,
        marginTop:12,
        marginBottom:SIZES.medium

    },
    cartTitle:{
        fontFamily:"bold",
        fontSize:SIZES.large

    },
    addCart:{
        width:37,
        height:37,
        backgroundColor:COLORS.secondary,
        borderRadius: SIZES.large,
        alignItems:"center",
        justifyContent:"center"
        

    },
    titleRow:{
        marginHorizontal:20,
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width -44,
        top:20

    },
    title:{
        fontFamily:"bold",
        fontSize:SIZES.large
    },
    priceWrapper:{
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.large

    },
    price:{
        paddingHorizontal:10,
        fontFamily:"semibold",
        fontSize:SIZES.large
    },
    RatingRow:{
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width -10,
        top:5

    },
    rating:{
        top:SIZES.large,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        marginHorizontal:SIZES.large

    },
    ratingText:{
        color:COLORS.gray,
        fontFamily:"medium",
        paddingHorizontal:SIZES.xSmall
    },
    descriptionWrapper:{
        marginTop:SIZES.large*2,
        marginHorizontal:SIZES.large,
        

    },
    description:{
        fontFamily:'medium',
        fontSize:SIZES.large-6,
        marginBottom:SIZES.small
    },
    designertitle:{
        fontFamily:'bold',
        fontSize:15,
    
    },
    designername:{
        marginBottom:SIZES.small
    },
    location:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:COLORS.secondary,
        marginHorizontal:10,
        padding:5,
        marginRight:20,
        borderRadius:SIZES.large

    },
   
    
})

export default styles