import { View, Text, TouchableOpacity ,TextInput} from 'react-native'
import React from 'react'
import styles from './welocm.style'
import {Feather , Ionicons} from '@expo/vector-icons'
import { COLORS, SIZES } from '../../constants'
import { useNavigation } from '@react-navigation/native'



const Welcome = ({userData ,userLogin}) => {
    const navigation = useNavigation();
  return (
       <View>
      <View style={styles.container}>
      <Text style={styles.titleText}>{ userData? `Namaste ${userData.username}` :'Please login'}</Text>
        <Text style={styles.welcomeText}>Find The Most</Text>
        <Text style={styles.welcomeText2}>Luxurious Furniture</Text>


    </View>

    <View style={styles.searchContainer}>
        <TouchableOpacity>
            <Feather name="search" size={24} style={styles.searchIcon}/>

        </TouchableOpacity>
        <View style={styles.searchWrapper}>
            <TextInput 
            style={styles.searchInput}
            value=''
            onPressIn={() => navigation.navigate("Search")}
            placeholder='What are you looking for'>

            </TextInput>
        </View>
        <View>
        <TouchableOpacity  style={styles.searchBtn}>
            <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.gray}/>
        </TouchableOpacity>
    </View>

    </View>


    </View>

  
    
  )
}

export default Welcome