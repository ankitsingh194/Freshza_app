import { View, Text, TouchableOpacity ,TextInput, Image} from 'react-native';
import React,{useState} from 'react';
import { SafeAreaView } from 'react-native';
import {Feather , Ionicons} from '@expo/vector-icons';
import { COLORS,SIZES } from '../constants';
import styles from './Search.style';
import axios from 'axios';
import { FlatList } from 'react-native';
import SearchCard from '../components/Home/SearchList/SearchCard';



const Searchpage = () => {
  const [searchitem, SetSearchitem]= useState('')
  const [searchResults, setSearchResults] = useState([])

  //================searchapi============//
  const handleSearch = async() => {
    
      const resposne = await axios.get(`http://192.168.1.40:3000/v1/api/products/search/${searchitem}`)
      setSearchResults(resposne.data)
      
  


  }
  return (
    <SafeAreaView>
     <View style={styles.searchContainer}>
        <TouchableOpacity  style={styles.searchBtn}>
        <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.gray}/>

        </TouchableOpacity>
        <View style={styles.searchWrapper}>
            <TextInput 
            style={styles.searchInput}
            value={searchitem}
            onChangeText={SetSearchitem}
            placeholder='What are you looking for'>

            </TextInput>
        </View>
        <View>
        <TouchableOpacity  onPress={()=>handleSearch()}>
        <Feather name="search" size={24} style={styles.searchIcon} color={COLORS.offwhite}/>
          
        </TouchableOpacity>
    </View>
  
    </View>
    {searchitem.length === 0 ? (
      <View style={{flex:1}}>
        <Image
        source={require('../assets/images/Pose23.png')}
        style={styles.searchImage}
        />
      </View>

     ):  (
      <FlatList
      data = {searchResults}
      keyExtractor={(item) => item._id} 
      renderItem={({item}) => (<SearchCard  item={item} />)}
      />

     )}
  
    
    </SafeAreaView>
  )
}

export default Searchpage

