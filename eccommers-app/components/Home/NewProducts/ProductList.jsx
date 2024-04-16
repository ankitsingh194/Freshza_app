import { StyleSheet, Text, View,ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import { SIZES,COLORS } from '../../../constants';
import useFetch from '../../../Hooks/useFetch';
import ProductCart from '../ProductCart';


const ProductList = () => {
  const  {data,isLoading,error} = useFetch();
  if(isLoading){
    return (
        <View style={styles.loadingContainer}>
         <ActivityIndicator size={SIZES.xxLarge} 
         color={COLORS.secondary}/>
        </View>
       );
  }

  return (
    <View style={styles.container}>
      <FlatList 
      data={data}
      numColumns={2}
      renderItem={({item}) => (<ProductCart item={item} />)} 
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={()=> <View style={styles.separator} />}
      />
        
    </View>
    
  )
}

export default ProductList

const styles = StyleSheet.create({
  loadingContainer:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      alignContent:"center"
  },
  container:{
      alignItems:"center",
      backgroundColor:COLORS.green,
      marginTop:SIZES.xxLarge,
      marginRight:SIZES.small/2,
     
  
  },
  separator:{
      height:16,
  
  }
  

})

