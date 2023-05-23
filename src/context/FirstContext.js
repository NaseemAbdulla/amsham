import { useContext, useState, createContext } from "react";
export const AppContext = createContext(null);
export function useAppCont() {
    return useContext(AppContext);
}

export default function AppProvider({ children }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageBase64, setselectedImageBase64] = useState(null);

    return (
        <AppContext.Provider value={{ selectedImage, setSelectedImage, 
        selectedImageBase64, setselectedImageBase64 }}>
            {children}
        </AppContext.Provider>
    );
}
