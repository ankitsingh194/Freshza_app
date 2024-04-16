import React from 'react'
import { Text,View,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './NewRivales.style'
import {Ionicons} from '@expo/vector-icons'
import { COLORS } from '../constants'
import ProductList from '../components/Home/NewProducts/ProductList.jsx'

const NewRivales = ({navigation}) => {
  return (
    <SafeAreaView  style = {styles.container}>
        <View  style = {styles.wrapper}>
            <View style = {styles.uppeRow}>
            <TouchableOpacity onPress={()=> navigation.goBack() }>
        <Ionicons name='chevron-back-circle' size={30} color={COLORS.lightWhite}/>
      
     </TouchableOpacity> 
      <Text style={styles.heading}>Products</Text>

            </View>
            
       <ProductList/>
  
        </View>

    </SafeAreaView>
  
  )
}

export default NewRivales