import { StyleSheet, Text, View, TouchableOpacity, Image ,ScrollView,Alert } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import styles from './productDetail.style'
import { Ionicons , SimpleLineIcons, MaterialCommunityIcons , Fontisto} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES} from "../../constants";
import { useState } from 'react'
import axios from "axios";
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { useToast } from 'react-native-toast-notifications'




const ProductDetail = ({navigation}) => {
    const route = useRoute();
    const {item} = route.params;
    const toast = useToast();
  
   
    
    const [count , setcount] = useState(1);

    const addtocart = async()=>{
        setcount((count) => count + 1)
        let id = item._id
        let quantity = count;
        let usersid = await AsyncStorage.getItem('id')
        const data ={
            userId:JSON.parse(usersid),
            cartItem:id,
            quantity:quantity,
            
        }
        console.log(data)
        const endpoint ='http://192.168.1.40:3000/v1/api/cart/add';
        try {
            const response = await axios.post(endpoint,data);
            if(response.status === 200){
                console.log(('item is added to cart'))
                toast.show("Task finished successfully", {
                  type: " success ",
                  placement: "top",
                  duration: 2000,
                  offset: 30,
                  animationType: "slide-in",
                });
               }else{
                 Alert.alert(
                   "Error while logging in",
                   "Please provide all valid field",
                   [
                     {
                       text:"Cancel", onPress:() => console.log("cancle pressed")
                     },
                     {
                       text:"Continue", onPress:() => console.log("Continue pressed")
                     },
                   ]
                 )
                 return;
         
               }
        } catch (error) {
            console.log('Errror ', error)
            
        }

    }

    const deletecartitem = async()=>{ 
        setcount((count) => count - 1)
        let id = item._id
        let usersid = await AsyncStorage.getItem('id')
        const data ={
            userId:JSON.parse(usersid),
            cartItem:id,
            
        }
        console.log(data)
        const endpoint ='http://192.168.1.40:3000/v1/api/cart/decrement';
        try {
            const response = await axios.post(endpoint,data);
            if(response.status === 200){
                console.log(('item is removed from cart'))
               }else{
                 Alert.alert(
                   "Error while logging in",
                   "Please provide all valid field",
                   [
                     {
                       text:"Cancel", onPress:() => console.log("cancle pressed")
                     },
                     {
                       text:"Continue", onPress:() => console.log("Continue pressed")
                     },
                   ]
                 )
                 return;
         
               }
        } catch (error) {
            console.log('Errror ', error)
            
        }

    }

  

   

    
  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.upperRow}>
     <TouchableOpacity onPress={()=> navigation.goBack() }>
        <Ionicons name='chevron-back-circle' size={30}/>
      
     </TouchableOpacity>   
     <TouchableOpacity onPress={()=>{}}>
        <Ionicons name='heart' size={30} color={COLORS.primary}/>
      
     </TouchableOpacity> 
    </View>
    <Image 
    source={{uri:item?.imageUrl}}
    style={styles.image}
    >

    </Image>
    <View style={styles.details}>
        <View style={styles.titleRow}>
            <Text style={styles.title}>{item?.title}</Text>
            <View  style={styles.priceWrapper}>
            <Text style={styles.price}>₹{item?.Price}</Text>
            </View>
        </View >
        <View style={styles.RatingRow}>
            <View style={styles.rating}>
                {[1,2,3,4,5].map((index) => (
                    <Ionicons key={index} name='star' size={25} color='gold'/>
                ))}
                <Text>(4.9)</Text>

            </View>
            <View style={styles.rating}>
                <TouchableOpacity onPress={() =>addtocart()}>
                    <SimpleLineIcons name='plus' size={20} />
                </TouchableOpacity>
                <Text style={styles.ratingText}>{count}</Text>
                <TouchableOpacity onPress={() => deletecartitem()}>
                    <SimpleLineIcons name='minus' size={20} />
                </TouchableOpacity>

            </View>

        </View>
  
        <View style={styles.descriptionWrapper}>
        <Text style={styles.designertitle}>Description</Text>
            <Text style={styles.description}>
            {item?.description}
            </Text>
            </View>
            <View style={{marginBottom: SIZES.small}}>
                <View style={styles.location}>
                    <View style={{flexDirection:'row'}}>
                    <Ionicons name='location-outline' size={20}></Ionicons>
                    <Text>{item?.product_location}</Text>
                   </View> 
                   <View style={{flexDirection:'row'}}>
                    <MaterialCommunityIcons name='truck-delivery-outline' size={20}></MaterialCommunityIcons>
                    <Text style={{marginLeft:2}}>Free Delivery</Text>
                   </View> 
                </View>
            </View>
       
        <View style={styles.cartRow}>
            <TouchableOpacity onPress={()=>({})} style={styles.cartBtn}>
                <Text style={styles.cartTitle}>BUY NOW</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>(navigation.navigate('Cart'))} style={styles.addCart}>
               <Fontisto name='shopping-bag' size={20}  ></Fontisto>
            </TouchableOpacity>
        </View>
       
        </View>

    </View>
    </ScrollView>


  
  )
}

export default ProductDetail

