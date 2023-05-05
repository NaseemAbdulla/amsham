import {useContext,useState,createContext} from 'react';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import * as tf from '@tensorflow/tfjs'
export const AppContext=createContext(null);
export function useAppCont(){
    return useContext(AppContext)
}

export default function AppProvider({children}){
    const [selectedImage, setSelectedImage] = useState(null);
    // const modelJSON = require('/Users/ASHNA GOPI/ABcd/assets/model/model.json');
    //  const modelWeights = require('/Users/ASHNA GOPI/ABcd/assets/model/group1-shard1of1.bin');
    // const model= tf.loadGraphModel(bundleResourceIO(modelJSON, modelWeights)).catch((e)=>{
    //     console.log("[LOADING ERROR] info:",e)});
     


    return(
<AppContext.Provider value={{selectedImage,setSelectedImage}}>
    {children}
</AppContext.Provider>
    );
}