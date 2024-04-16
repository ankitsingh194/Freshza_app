import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './product.style'
import { COLORS, SIZES } from '../../constants'
import ProductCart from './ProductCart'
import useFetch from '../../Hooks/useFetch'


const Product = () => {
  const {data,isLoading,error} = useFetch()
  return (
    <View style={{marginTop:SIZES.medium}}>
    {isLoading ? (
      <ActivityIndicator size={SIZES.large *2} color={COLORS.primary} />
    ) : error ? (
      <ActivityIndicator size={SIZES.large *2} color={COLORS.primary} />
     
    ):(
      <FlatList 
      data={data}
      keyExtractor={(item) => item._id}
      renderItem={({item})=> <ProductCart item={item}  />}
      horizontal
      contentContainerStyle={{columnGap:SIZES.medium}}
      />
    )}
    </View>

  )
}

export default Product