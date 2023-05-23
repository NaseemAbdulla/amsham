import React,{ useEffect, useState } from 'react'
import {  View } from 'react-native'
import Scan from './scan';
import { StatusBar } from 'expo-status-bar';
import AnimatedSplash from "react-native-animated-splash-screen";


function Anime(){
    const [loading, setloading] = useState(false);

    useEffect(() => {
      let timeout = setTimeout(()=>{
          setloading(true);
        },3000);
    
      return () => {
        clearTimeout(timeout)
      }
    }, [])
    
   
     return (
      // <AnimatedSplash
      //   translucent={true}
      //   isLoaded={loading}
      //   logoImage={require('../assets/images/amsham.png')}
      //   backgroundColor={"#fff"}
      //   logoHeight={300}
      //   logoWidth={300}
      // >
       <View>
         <Scan/>
         <StatusBar style='dark' backgroundColor='#add8e6'/>
       </View>
      // </AnimatedSplash> 
     )

     }
export default Anime


