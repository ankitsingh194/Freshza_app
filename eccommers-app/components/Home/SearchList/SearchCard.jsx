import { View, Text, TouchableOpacity ,TextInput, Image} from 'react-native';
import React from 'react'
import styles from './searchcard.style'
import { useNavigation } from '@react-navigation/native';

const SearchCard = ({item, quantity}) => {
   const navigation = useNavigation();
   console.log(item,'j=j')
    
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.wrapper}  onPress={()=> navigation.navigate("ProductDetail",{item})}  >
        <View style={styles.image}>
       <Image source={{ uri:item?.imageUrl}} style={styles.Productimage}/>
       </View>
        <View style={styles.details}>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.price}>${item?.Price}</Text>
            <Text style={styles.supplier}>{item?.supplier}</Text>
            <Text style={styles.supplier}>quantity : {quantity ? quantity: 0 }</Text>
            
        </View>

    </TouchableOpacity>
    </View>
  )
}


export default SearchCard