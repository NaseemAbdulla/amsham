import * as React from "react";
import { StyleSheet, Text, View,Button,TouchableOpacity,Image ,Link,TextInput} from 'react-native';
import ImageViewer from "../src/components/ImageViewer";
import { useAppCont } from "../src/context/FirstContext";



function Displays({children}){
    const {selectedImage}=useAppCont();

 

return(
<View alignItems='center' style={{marginTop:50}} >
<ImageViewer placeholderImageSource={null} selectedImage={selectedImage}/>

<View style={{margin:10}}>
          <TouchableOpacity >
          <Button color='blue' margin={50} title="Convert" size={40} onPress={()=>alert("Converted")}/>
          </TouchableOpacity>
         
        </View>
        <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Type something"
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
    />
  </View> 
  

  <TouchableOpacity >
          <Button color='blue' margin={50} title="Translate" size={40} onPress={()=>alert("Translated")}/>
          </TouchableOpacity>
  <View >
    
    {/* <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Type something"
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
    /> */}
  </View>
</View>
);
}
const styles = StyleSheet.create({
    textAreaContainer: {
      borderWidth: 2,
      padding: 5,
      margin:10,
    },
    textArea: {
      height: 100,
      backgroundColor:"#808080",
      width:300,
      justifyContent: "flex-start"
    }
  })
  export default Displays