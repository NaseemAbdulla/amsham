import React,{ useState } from 'react'
import { Text, View } from 'react-native'
import Scan from './scan';
import { StatusBar } from 'expo-status-bar';
import AnimatedSplash from "react-native-animated-splash-screen";


function Anime(){
    const [loading, setloading] = useState(false);
    setTimeout(()=>{
        setloading(true);
      },3000);
   
     return (
      <AnimatedSplash
        translucent={true}
        isLoaded={loading}
        logoImage={require("../assets/images/amsham.png")}
        backgroundColor={"#fff"}
        logoHeight={300}
        logoWidth={300}
      >
       <View>
         <Scan/>
         <StatusBar style='dark' backgroundColor='#add8e6'/>
       </View>
      </AnimatedSplash>
     )

     }
export default Anime


