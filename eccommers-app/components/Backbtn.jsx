import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';


export  const Backbtn =({onPress})  => {
  return (
   <TouchableOpacity onPress={onPress} style={style.backbtn}>
    <Ionicons name='chevron-back-circle' 
    size={30}
    
    color={COLORS.primary}
    />
   </TouchableOpacity>
  )
}




const style = StyleSheet.create({
    backbtn:{
        alignItems:"center",
        position:'absolute',
        zIndex:999,
        top:SIZES.large-10
    }
})