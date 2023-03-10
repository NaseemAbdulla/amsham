import { Text, View,StyleSheet } from 'react-native';
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { AppBar } from '@react-native-material/core';
import Scan from './scan';
import AnimatedSplash from "react-native-animated-splash-screen";

export default function Home() {

  const [loading, setLoading] = useState(false);
  
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  return (
    <AnimatedSplash
        translucent={true}
        isLoaded={loading}
        logoImage={require("../assets/images/fra.png")}
        backgroundColor={"#FEF9B0"}
        logoHeight={250}
        logoWidth={150}
      >
    <View style={{color: 'red'}}>
      <View>
      <AppBar title="AMSHAM"/>
      </View>
      <Scan/>
      <StatusBar style='auto'/>
    </View>
    </AnimatedSplash>
  );
}
