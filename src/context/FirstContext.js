import {useContext,useState,createContext} from 'react';
export const AppContext=createContext(null);
export function useAppCont(){
    return useContext(AppContext)
}

export default function AppProvider({children}){
    const [selectedImage, setSelectedImage] = useState(null);


    return(
<AppContext.Provider value={{selectedImage,setSelectedImage}}>
    {children}
</AppContext.Provider>
    );
}