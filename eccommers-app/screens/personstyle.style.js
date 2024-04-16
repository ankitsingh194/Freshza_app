import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants";



const styles = StyleSheet.create({
    viewcontainer:{
    

    },
    view1:{

    },
    container:{
        flex:1,
        backgroundColor:COLORS.lightWhite
      
    },
    cover:{
        height:250,
        width:'100%',
        resizeMode:'cover'
   
    },
    profileContainer:{
        flex:1,
        alignItems:"center"
       


    },
    cover2:{
        width:150,
        height:150,
        borderRadius:999,
        borderColor:COLORS.primary,
        borderWidth:2,
        resizeMode:'cover',
        marginTop:-SIZES.medium*5
      
        
    },
    name:{
        fontFamily:'bold',
        color:COLORS.primary,
        marginVertical:5
       


    },
    loginBtn:{
        padding:8,
        alignContent:"center",
        backgroundColor:COLORS.secondary,
        borderRadius:40,
        margin:10
       
        
       
    },
    logintext:{
        fontFamily:'bold',
        fontWeight:"700",
        color:COLORS.primary,
        padding:6,
    
      
    


    },
    menutext:{
        marginLeft:20,
        fontFamily:"bold",
        fontWeight:"700",
        color:COLORS.primary
       

    },
    menuWrapper:{
        marginTop:SIZES.xLarge,
        width:SIZES.width-SIZES.large,
        backgroundColor:COLORS.lightWhite,
        borderRadius:12
      
    },
    menuItem:(borderBottomWidth) => ({
        borderBottomWidth:borderBottomWidth,
        flexDirection:"row",
        paddingVertical:15,
        paddingHorizontal:30,
        borderColor:COLORS.gray
        
}),




})

export default styles