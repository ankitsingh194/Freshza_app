import { View, Text, TouchableOpacity , Image} from 'react-native';
import React,{useEffect} from 'react';
import { SafeAreaView } from 'react-native';
import styles from './cart.style';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants';
import { useToast } from 'react-native-toast-notifications';






const Cart = () => {
  const[loader, Setloader] = useState(false)
  const [CartResults, setCartResults] = useState([])
  const navigation = useNavigation();
  const toast = useToast();

  let quantity ;
  let item ;


  useEffect(()=>{
    handleSearch();
    
    
  },[])
  //================searchapi============//
  const handleSearch = async() => {
    Setloader(true)
    const id = await AsyncStorage.getItem('id')
    console.log(id)
      const resposne = await axios.get(`http://192.168.1.40:3000/v1/api/cart/find/${JSON.parse(id)}`)
      //setCartResults(()=> )
      console.log(resposne.data,'rrrrr')
      if(resposne.data.cartItem?.title){
        Setloader(false)
        setCartResults(resposne.data)
        console.log(resposne.data,'rrrrr')
      }


  }

  item = CartResults.cartItem
  quantity = CartResults.quantity



const deleteItemCart = async() =>{
  const id = await AsyncStorage.getItem('id')
  const respose = await axios.delete(`http://192.168.1.40:3000/v1/api/cart/delete/${JSON.parse(id)}`)
  navigation.navigate('Cart')
  toast.show("Task finished successfully", {
    type: " success ",
    placement: "top",
    duration: 2000,
    offset: 30,
    animationType: "slide-in",
  });
  
  

}

 



 

  return (
    <SafeAreaView>
      <View>
      <TouchableOpacity onPress={()=> navigation.goBack() }>
        <Ionicons name='chevron-back-circle' size={30}/>
      
     </TouchableOpacity> 
        
     
    {loader ? (
      <View style={styles.itemcart}>
        <Image
             source={require('../assets/images/cart.png')}
             style={styles.searchImage}
      
  
        />
        <Text  style={styles.itemcarttitle} >Add item in Cart!</Text>
      </View>

     ):  (
      <View style={styles.container}>
      <TouchableOpacity style={styles.wrapper}  onPress={()=> navigation.navigate("ProductDetail",{item})}  >
        <View style={styles.image}>
     { item?.imageUrl ?  <Image source={{ uri:item?.imageUrl}} style={styles.Productimage} /> : <Image source={require('../assets/images/fn1.jpg')} style={styles.Productimage} />  }
      
       </View>
       </TouchableOpacity>
        <View style={styles.details}>
          <View style={styles.contaier2}>
          <Text style={styles.title}>{item?.title}</Text>
          <TouchableOpacity onPress={deleteItemCart}>
          <Ionicons name='trash-outline' size={25} color={COLORS.red} />
          </TouchableOpacity>
          </View>
            <Text style={styles.price} >${item?.Price} * {quantity}</Text>
            <Text style={styles.supplier}>{item?.supplier}</Text>

            
        </View>

    
   
         </View>
         
  
 
     
      
     
    
      
              
 
    

     )}
     </View>
     <View style={styles.checkoutcontainer} >
      <View>
        <Text style={styles.texttitle}>Order info</Text>
        <View style={styles.checkout} >
          <Text style={styles.texttitle2}>SubTotal</Text>
          <Text  style={styles.texttitle2}>${item?.Price * quantity}</Text>
        </View>
        <View style={styles.checkout} >
          <Text style={styles.texttitle2}>Total</Text>
          <Text  style={styles.texttitle2}>${item?.Price * quantity}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=>{}}>
      <View style={styles.checkoutbtn}>
        <Text style={styles.texttitle}>Checkout ${item?.Price * quantity}</Text>
      </View>
      </TouchableOpacity>
     </View>
  
    
    </SafeAreaView>
  )
}

export default Cart