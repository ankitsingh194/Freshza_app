import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";


const styles = StyleSheet.create({
    cover:{
        height:SIZES.height/2.4,
        width:SIZES.width-60,
        resizeMode:"cover",
        marginBottom:SIZES.xxLarge
    },
    cover2:{
        height:SIZES.height/3,
        width:SIZES.width-80,
        resizeMode:"cover",
        marginBottom:SIZES.xLarge
    },
    title:{
        fontFamily:'bold',
        fontSize:SIZES.xLarge,
        color:COLORS.primary,
        alignItems:"center",
        marginBottom:SIZES.xLarge
    },
    wrapper:{
        marginBottom:20,
      

    },
    label:{
        fontFamily:"regular",
        fontSize:SIZES.medium,
        marginBottom:5,
        marginEnd:5,
        textAlign:"left"
    },
    inputWrapper:(borderColor)=> ({
        borderColor:borderColor,
        backgroundColor:COLORS.lightWhite,
        borderWidth:1,
        height:50,
        borderRadius:12,
        flexDirection:'row',
        paddingHorizontal:15,
        alignItems:"center",
       
        
        

    }),
    iconStyle:{
        marginRight:10

    },
    errorMessage:{
        color:COLORS.red,
        fontFamily:"regular",
        marginTop:5,
        marginLeft:5,
        fontSize:SIZES.xSmall

    },
    registration:{
        marginTop:10,
        textAlign:"center"

    }



})

export default styles