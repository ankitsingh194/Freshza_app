import React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './navigation/BottomNavigation';
import { ProductDetail, Cart, NewRivales ,LoginPage, SignUppage, Home, PaymentScreen } from './screens';



   
const Stack = createNativeStackNavigator();


export default function App() {
  const [fontLoaded] = useFonts({
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    
  })

const onLayoutRootView = useCallback( async () => {
  if(fontLoaded){
    await SplashScreen.hideAsync();
  }
},[fontLoaded]);


 if(!fontLoaded){
  return null;
 }

 


  return (
  
 
   <NavigationContainer>
   
    <Stack.Navigator>
   
      <Stack.Screen
      name='Bottom Navigation'
      component={BottomNavigation} 
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='Cart'
      component={Cart} 
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='ProductDetail'
      component={ProductDetail} 
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='NewRivals'
      component={NewRivales} 
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='Login'
      component={LoginPage} 
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='SignUp'
      component={SignUppage} 
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='Home'
      component={Home} 
      options={{headerShown:false}}
      />
   
   
    </Stack.Navigator>

   </NavigationContainer>



  );
}


