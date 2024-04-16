import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import slider1 from '../../assets/images/slider1.jpg'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/slider3.jpg'
import slider4 from '../../assets/images/slider4.jpg'
import { useScrollToTop } from '@react-navigation/native'
import { SIZES,COLORS } from '../../constants'

const slides =[
    "https://img.freepik.com/free-photo/gray-sofa-white-living-room-with-copy-space_43614-884.jpg",
    "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?w=900&t=st=1703063005~exp=1703063605~hmac=3811b6719e9d650ddfe4f27acbfe44b60e4f9b15ff8a994d707958b4bb34d48f",
    "https://img.freepik.com/premium-photo/sofa-wood-table-living-room_43614-325.jpg?w=900",
    "https://img.freepik.com/free-photo/sofa-yellow-living-room-interior-with-copy-space_43614-858.jpg?t=st=1703062878~exp=1703063478~hmac=1aa9d1fe96b2bfcfa44b1c7bd16f64ff6148d54c55869826b54d06dc76f394a5"

      
]



const Carousel = () => {
  const [imgActive, setimgActive] = useState(0);

  onchange  = (nativeEvent) => {
    if(nativeEvent) {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide != imgActive){
            setimgActive(slide);
        }
    }


  }


  return (
    <SafeAreaView>
    <View style={styles.carouseContainer}>
     <ScrollView
     onScroll={({nativeEvent}) => onchange(nativeEvent)} 
     showsHorizontalScrollIndicator={false}
     pagingEnabled
     horizontal
     style={styles.wrap}
     >
        {
            slides.map((e, index) => 
            <Image 
            key={e}
            resizeMode='stretch'
            style={styles.wrap}
            source={{uri: e}} />)
        }

     </ScrollView>
     <View style={styles.wrapDot}>
        {
            slides.map((e , index) => 
            <Text
            key={e}
            style={imgActive == index ? styles.dotActive : styles.dot}
            >
              ⬤
            </Text>
            )
        }

     </View>
    </View>
    </SafeAreaView>
  );
};

export default Carousel

const styles = StyleSheet.create({
    carouseContainer:{
        flex:1,
        alignItems:'center'
    },
    wrap:{
        width:SIZES.medium*22,
        height:SIZES.medium*12,
        borderRadius:10
        

    },
    wrapDot:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignSelf:'center'
    },
    dotActive:{
        margin:3,
        color:COLORS.gray

    },
    dot:{
        margin:3,
        color:'white'
       

    }

})