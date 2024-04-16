import { SafeAreaView, ScrollView, TouchableOpacity , StyleSheet, Text, View, Image,Alert ,TextInput} from 'react-native'
import React, { useState } from 'react'
import styles from './loginpage.style'
import {  Backbtn } from '../components/Backbtn'
import { COLORS, SIZES } from '../constants'
import { Button } from '../components/Button'
import {Formik} from 'formik';
import * as Yup from 'yup';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import axios from "axios";
import AsyncStorage  from '@react-native-async-storage/async-storage';





const validationSchema = Yup.object().shape({
  password:Yup.string().min(8, "Must be More then 8 character ").required('Required'),
  email:Yup.string().email('Invalid email address').required('Required'),
  
 });


const LoginPage = ({navigation}) => {
  const Key = 'USER_KEY';
  const [loader, setLoadder] = useState(false);
  const [obsecureText, setobsecureText] = useState(false);

  const redirectto =()=>{
    return navigation.navigate('Bottom Navigation')
  }

  const OnsubmitForm = async(value)=>{
    setLoadder(true)
    try {
      const endpoint ='http://192.168.1.40:3000/v1/api/auth/login';
      const data = value;
      const email = 'ankit123@gmail.com'
     // const response = 200;
     const response = await axios.post(endpoint,data);

      console.log(response.status)
      if(response.status === 200){
       const responseData = response.data
        setLoadder(false)

      await AsyncStorage.setItem(`user${responseData._id}`,JSON.stringify(responseData))
      await AsyncStorage.setItem('id',JSON.stringify(responseData._id))
        return redirectto();

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
      Alert.alert(
        "Opp's Error while logging in",
        "Opp's Error while logging in",
        [
          {
            text:"Cancel", onPress:() => console.log("cancle pressed")
          },
          {
            text:"Continue", onPress:() => console.log("Continue pressed")
          },
        ]
      )
      return

      
    } finally{
      setLoadder(false)
      return;
    }
   

  }

  const invalidForm =  () => {
  Alert.alert(
      "Invalid Form",
      "Please provide all required field",
      [
        {
          text:"Cancel", onPress:() => console.log("cancle pressed")
        },
        {
          text:"Continue", onPress:() => console.log("Continue pressed")
        },
      ]
    )
  }
 
 
  return (
    <ScrollView>
      <SafeAreaView style={{marginHorizontal:20}}>
        <View style={{margin:SIZES.small}}>
          <Backbtn onPress={() => navigation.goBack()} />
          <Image source={require('../assets/images/bk.png')}
          style={styles.cover}
            />
            <Text style={styles.title}>Best Luxurious Furniture</Text>
            <Formik
             initialValues={{email:'', password:''}}
            // validationSchema={validationSchema}
             onSubmit={(values) => OnsubmitForm(values)}
             >
        {({ handleChange, handleBlur,touched, handleSubmit, values,errors,isValid, setFieldTouched }) => (
       <View>
           <View style={styles.wrapper}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper( touched.email ? COLORS.primary  : COLORS.offwhite)}><MaterialCommunityIcons name='email-outline'
          size={20}
          color={COLORS.gray}
          style={styles.iconStyle}
           /><TextInput placeholder='Enter your Email' value={values.email} onChangeText={handleChange('email')} onFocus={() =>{setFieldTouched('email')}}
             onBlur={() => {setFieldTouched('email','')}}

              autoCapitalize="none"
              style={{flex:1}}
           />
            </View>
            {touched.email && errors.email && (
              <Text style={styles.errorMessage}>{errors.email}</Text>
            )}
           

        </View>

        <View style={styles.wrapper}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper( touched.password ? COLORS.primary  : COLORS.offwhite)}><MaterialCommunityIcons name='lock-outline'
          size={20}
          color={COLORS.gray}
          style={styles.iconStyle}
           /><TextInput secureTextEntry={obsecureText} placeholder='Enter your Password' value={values.password} onChangeText={handleChange('password')} onFocus={() =>{setFieldTouched('password')}}
             onBlur={() => {setFieldTouched('password','')}}

              autoCapitalize="none"
              autoCorrect={false}
              style={{flex:1}}
           />
           <TouchableOpacity onPress={()=> {setobsecureText(!obsecureText)}} >
            <MaterialCommunityIcons size={20} name={obsecureText ? 'eye-outline' : 'eye-off-outline'} />
           </TouchableOpacity>
            </View>
            {touched.password && errors.password && (
              <Text style={styles.errorMessage}>{errors.password}</Text>
            )}
           

        </View>

    
     
   




            <Button title={'L O G I N'}   onPress={handleSubmit} isValid={isValid} loader={loader} />
                
       </View>
     )}

          
           


            </Formik>

            <Text onPress={()=>{navigation.navigate('SignUp')}} style={styles.registration}>Register</Text>

          
        </View>

      </SafeAreaView>
    </ScrollView>
  
  )
}

export default LoginPage

