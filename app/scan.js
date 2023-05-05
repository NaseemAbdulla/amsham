import React from "react";
import { StyleSheet,View} from 'react-native';
import ButtonX from '../src/components/ButtonX'
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from "expo-router";
import { useAppCont } from "../src/context/FirstContext";
import { StatusBar } from "expo-status-bar";
import ImageViewer from "../src/components/ImageViewer";
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
      await predict(result.assets[0].uri)
      router.push("/display");
    } else {
      alert("You did not take any image.");
    }
  };

    const pickImageAsync = async () => {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        alert("You've refused to allow this appp to access your device!");
        return;
      }
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });
  
      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
       await predict(result.assets[0].uri)
        router.push("/display");
      } else {
        alert("You did not select any image.");
      }
    };

   async function predict(image){
    const formData = new FormData();
formData.append("file", image);
console.log(formData);
    const res = await fetch('http://e6d9-14-139-184-226.ngrok-free.app/upload/', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: {
        file: formData,
      },
    });

    console.log(JSON.stringify(res));

    }

  return(
    <View alignItems='center' style={{marginTop:300}} >
     <StatusBar style="dark" backgroundColor="#add8e6" />
       <View>
         <View style={{ size: 100, height: 100, marginTop: 10 }}>
         <ButtonX title="Scan" onPress={openCamera}/>
         </View>
       </View>
       
       <View>
       <ButtonX title="Upload" onPress={pickImageAsync}/>
       
       </View>
       <ImageViewer placeholderImageSource={require('../assets/images/amsham.png')} selectedImage={null} />
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
