import { SafeAreaView, ScrollView, TouchableOpacity , StyleSheet, Text, View, Image,Alert ,TextInput} from 'react-native'
import React, { useState } from 'react'
import styles from './loginpage.style'
import {  Backbtn } from '../components/Backbtn'
import { COLORS, SIZES } from '../constants'
import { Button } from '../components/Button'
import {Formik} from 'formik';
import * as Yup from 'yup';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'
import axios from "axios";



const validationSchema = Yup.object().shape({
  password:Yup.string().min(8, "Must be More then 8 character ").required('Required'),
  email:Yup.string().email('Invalid email address').required('Required'),
  location:Yup.string().min(3,'Invalid location address').required('Required'),
  username:Yup.string().min(5,'Must be More then 5 character').required('Required')
  
 });

const  SignUppage = ({navigation})  => {

  const [loader, setLoadder] = useState(false);
  const [resposnseData , Setresponse] = useState(null);
  const [obsecureText, setobsecureText] = useState(false);


  const OnsubmitForm = async(value)=>{
    setLoadder(true)
    try {
      const endpoint ='http://192.168.1.40:3000/v1/api/auth/register';
      const data = value;
      console.log(data)
     // const response = 200;
     const response = await axios.post(endpoint,data)
     console.log(response)
     
      if(response.status === 200){
        setLoadder(false)
        navigation.navigate('Login')
        return;

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
          style={styles.cover2}
            />
            <Text style={styles.title}>Best Luxurious Furniture</Text>
            <Formik
             initialValues={{email:'', password:'', location:'', username:''}}
            // validationSchema={validationSchema}
             onSubmit={(values) => OnsubmitForm(values)}
             >
        {({ handleChange, handleBlur,touched, handleSubmit, values,errors,isValid, setFieldTouched }) => (
       <View>
           <View style={styles.wrapper}>
          <Text style={styles.label}>location</Text>
          <View style={styles.inputWrapper( touched.location ? COLORS.primary  : COLORS.offwhite)}><Ionicons name='location-outline'
          size={20}
          color={COLORS.gray}
          style={styles.iconStyle}
           /><TextInput placeholder='Enter your location' value={values.location} onChangeText={handleChange('location')} onFocus={() =>{setFieldTouched('location')}}
             onBlur={() => {setFieldTouched('location','')}}

              autoCapitalize="none"
              style={{flex:1}}
           />
            </View>
            {touched.location && errors.location && (
              <Text style={styles.errorMessage}>{errors.location}</Text>
            )}
           

        </View>
        <View style={styles.wrapper}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputWrapper( touched.username ? COLORS.primary  : COLORS.offwhite)}><MaterialCommunityIcons name='face-man-profile'
          size={20}
          color={COLORS.gray}
          style={styles.iconStyle}
           /><TextInput placeholder='Enter your username' value={values.username} onChangeText={handleChange('username')} onFocus={() =>{setFieldTouched('username')}}
             onBlur={() => {setFieldTouched('username','')}}

              autoCapitalize="none"
              style={{flex:1}}
           />
            </View>
            {touched.username && errors.username && (
              <Text style={styles.errorMessage}>{errors.username}</Text>
            )}
           

        </View>
        <View style={styles.wrapper}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper( touched.email ? COLORS.primary  : COLORS.offwhite)}><MaterialCommunityIcons name='email-outline'
          size={20}
          color={COLORS.gray}
          style={styles.iconStyle}
           /><TextInput  placeholder='Enter your Email' value={values.email} onChangeText={handleChange('email')} onFocus={() =>{setFieldTouched('email')}}
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
           /><TextInput  secureTextEntry={obsecureText} placeholder='Enter your Password' value={values.password} onChangeText={handleChange('password')} onFocus={() =>{setFieldTouched('password')}}
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

    
     
   




            <Button title={'S I G N U P'}   onPress={handleSubmit} isValid={isValid} loader={loader}/>
                
       </View>
     )}

          
           


            </Formik>

       
          
        </View>

      </SafeAreaView>
    </ScrollView>
  
  )
}

export default SignUppage