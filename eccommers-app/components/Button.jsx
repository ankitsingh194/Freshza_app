import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';


           
export  const Button =({title , onPress , isValid,loader})  => {
  return (
   <TouchableOpacity onPress={onPress} style={style.backStyle(isValid === false ? COLORS.gray : COLORS.primary)}>
   {loader ? <ActivityIndicator/>  :<Text style={style.btnText}>{title}</Text>}
   </TouchableOpacity >
  )
}




const style = StyleSheet.create({
    backStyle:(backgroundColor)=>({
       height:50,
       width:'98%',
       marginVertical:20,
       backgroundColor:backgroundColor,
       justifyContent:'center',
       alignItems:"center",
       borderRadius:12

    }),
    btnText:{
        fontFamily:"bold",
        color:COLORS.white,
        fontSize:20

    }
})