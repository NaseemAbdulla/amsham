import React, { useCallback, useState,createContext ,useContext} from "react";
import { StyleSheet, Text, View,Button,TouchableOpacity,Image ,Link,TextInput} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from "expo-router";
import { useAppCont } from "../src/context/FirstContext";

export default function Scan({children}){

 
  const router = useRouter();
  const {setSelectedImage}=useAppCont();
  
  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
        allowsEditing:true,
        quality:1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      router.push("/display");
    } else {
      alert("You did not take any image.");
    }
  };

    const pickImageAsync = async () => {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        alert("You've refused to allow this appp to access your camera!");
        return;
      }
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });
  
      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      } else {
        alert("You did not select any image.");
      }
    };

  return(
     <View alignItems='center' style={{marginTop:130}} >
        <View style={{marginBottom:5, margin:150}}>
          <TouchableOpacity>
          <Button color='blue' margin={50} title="Scan" size={40} onPress={openCamera}/>
          </TouchableOpacity>   
        </View>
        <View >
          <TouchableOpacity>
        <Button color='blue' margin={50} title="Upload" size={40} onPress={pickImageAsync}/>
         </TouchableOpacity>
        </View>
         </View> 
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
