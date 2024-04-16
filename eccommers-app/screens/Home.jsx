import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native'
import styles from './home.style'
import {Ionicons, Fontisto} from '@expo/vector-icons'
import { Welcome } from '../components'
import Carousel from '../components/Home/Carousel'
import Heading from '../components/Home/Heading'
import Product from '../components/Home/product'
import { useNavigation } from '@react-navigation/native'
import useFetch from '../Hooks/useFetch'
import AsyncStorage  from '@react-native-async-storage/async-storage';

const Home = () => {
  const navigation = useNavigation();
  const [userData , setUserData] = useState(null)
  const [userLogin , setUserLogin] = useState(false)

  useEffect(()=>{
    checkExistingUser();
  
  
  },[])

  const checkExistingUser = async()=>{
    const id = await AsyncStorage.getItem('id')
   
    const userid = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(userid);
     
      if(currentUser !== null){
        const paraData = JSON.parse(currentUser)
        setUserData(paraData)
        setUserLogin(true)
      }else{
        navigation.navigate('Login')
      }
    }catch(error){
      console.log("Error retreving the data ", error)
    

    }
  }
 

  return (
    <SafeAreaView>
      <ScrollView overScrollMode='auto'>
      <View style={styles.appBarwrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24} />

          <Text style={styles.location}>{userLogin? `${userData.location}` :'India'}</Text>

          <View style={{alignItems:"flex-end"}}>
            <View style={styles.cartCount}>
              <Text style={styles.countNumber}>4</Text>
            </View>
           <TouchableOpacity onPress={()=> navigation.navigate("Cart")}>
           <Fontisto name='shopping-bag' size={24}/>
           </TouchableOpacity>
          </View>

        </View>
     
      </View>
      <ScrollView>

      
 
        <Welcome userData={userData}  userLogin={userLogin} />
        <Carousel />
        <Heading />
        <Product />
        </ScrollView>

   
      </ScrollView>
    
    
   

    </SafeAreaView>
     
    
  )
}

export default Home

