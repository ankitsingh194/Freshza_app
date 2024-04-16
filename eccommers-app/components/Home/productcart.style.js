import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";


const styles = StyleSheet.create({
    container:{
        width:184,
        height:260,
        marginEnd:2,
        marginLeft:SIZES.small-5,
        marginRight:SIZES.small-5,
        borderRadius:SIZES.medium,
        backgroundColor:COLORS.secondary,
        marginBottom:SIZES.small*2
    },
    imageContainer:{
        flex:1,
        width:170,
        marginLeft:SIZES.small/2.5,
        marginTop:SIZES.small/2.5,
        borderRadius:SIZES.small,
        overflow:'hidden'
    },
    image:{
        aspectRatio:1,
        resizeMode:'cover',
        width:200,
        height:200
    },
    details:{
        padding:SIZES.small
    },
    title:{
        fontFamily:'bold',
        fontSize:SIZES.large,
        marginBottom:2

    },
    suplier:{
        fontFamily:'regular',
        fontSize:SIZES.small,
        color:COLORS.gray,
        marginBottom:2

    },
    price:{
        fontFamily:'bold',
        fontSize:SIZES.medium,
       
    },
    addbtn:{
        position:'absolute',
        bottom:SIZES.xSmall,
        right:SIZES.xSmall
    }
})



export default styles