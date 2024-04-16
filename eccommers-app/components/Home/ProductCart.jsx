import { StyleSheet, Text, View ,TouchableOpacity, ScrollView , Image} from 'react-native'
import React from 'react'
import styles from './productcart.style'
import {Ionicons} from '@expo/vector-icons'
import { COLORS, SIZES } from "../../constants";
import { useNavigation } from '@react-navigation/native';

const ProductCart = ({item}) => {
    const navigation = useNavigation();
  
  return (
    <ScrollView>
    <TouchableOpacity onPress={()=> navigation.navigate("ProductDetail",{item})}>
        
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                source={{ uri:item.imageUrl}} 
                style={styles.image} />
            </View>
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.suplier} numberOfLines={1}>{item.supplier}</Text>
                <Text style={styles.price}>₹{item.Price}</Text>
            </View>
            <TouchableOpacity style={styles.addbtn}>
                <Ionicons name='add-circle' size={35} color={COLORS.primary} />

            </TouchableOpacity>

        </View>
        


    </TouchableOpacity>
    
    </ScrollView>
  )
}

export default ProductCart

