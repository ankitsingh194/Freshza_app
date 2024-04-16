import { StatusBar, StyleSheet, Text, View ,Image, TouchableOpacity,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import styles from './personstyle.style'
import { COLORS } from '../constants'
import { useNavigation } from '@react-navigation/native'
import {AntDesign , MaterialCommunityIcons , SimpleLineIcons} from "@expo/vector-icons"
import AsyncStorage  from '@react-native-async-storage/async-storage';

const Person = () => {
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

  const userLogout = async()=>{
    const id = await AsyncStorage.getItem('id')
    const userid = `user${JSON.parse(id)}`;
    try {
      await AsyncStorage.multiRemove([userid, 'id'])
      setUserLogin(false)
      navigation.navigate('Bottom Navigation')

    } catch (error) {
      console.log("Error  logging out the user ", error)
      
    }

  };



  const logout =  () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout",
      [
        {
          text:"Cancel", onPress:() => console.log("cancle pressed")
        },
        {
          text:"Continue", onPress:() => userLogout()
        },
      ]
    )
  }
  return (
    
      <View style={styles.container} >
      <View style={  styles.container  }>
        <StatusBar backgroundColor={COLORS.gray} />

        <View style={{width:'100%'}}>
          <Image source={require('../assets/images/space.jpg')}
          style={styles.cover}
           />
        </View>
        <View style={styles.profileContainer}>
          <Image source={require('../assets/images/profile.jpeg')} 
          style={styles.cover2} />
           <Text style={styles.name}>{userLogin === true ? `${userData.username}`:'Please login to view Profile'}</Text>

           { userLogin === false ? (
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
              <View style={styles.loginBtn}><Text style={styles.logintext}>Login</Text></View>
            </TouchableOpacity>
          ):(
            <View style={styles.loginBtn}>
            <Text style={styles.logintext}>
              {userData.email}
            </Text>
            </View>
          

          )

          }

          {userLogin === false ? (
            <View></View>
          ):(
            <View style={styles.menuWrapper}>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem(0.5)} >
                  <MaterialCommunityIcons name='heart-outline'
                  color={COLORS.primary}
                  size={24} />
                  <Text style={styles.menutext} >favourate</Text>

                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem(0.5)} >
                  <MaterialCommunityIcons name='truck-delivery-outline'
                  color={COLORS.primary}
                  size={24} />
                  <Text style={styles.menutext} >Order</Text>

                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem(0.5)} >
                  <SimpleLineIcons name='bag'
                  color={COLORS.primary}
                  size={24} />
                  <Text style={styles.menutext} >Cart</Text>

                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem(0.5)} >
                  <MaterialCommunityIcons name='cached'
                  color={COLORS.primary}
                  size={24} />
                  <Text style={styles.menutext} >Clear cache</Text>

                </View>
              </TouchableOpacity>
       
              <TouchableOpacity onPress={() => logout()}>
                <View style={styles.menuItem(0.5)} >
                  <MaterialCommunityIcons name='logout'
                  color={COLORS.primary}
                  size={24} />
                  <Text style={styles.menutext} >Logout</Text>

                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem(0.5)} >
                  <AntDesign name='deleteuser'
                  color={COLORS.primary}
                  size={24} />
                  <Text style={styles.menutext} >Delete Account</Text>

                </View>
              </TouchableOpacity>
            </View>
          )}


           </View>

    
       
  
        
        </View>

      </View>

  
  )
  
}

export default Person

