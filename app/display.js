import { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";
import ImageViewer from "../src/components/ImageViewer";
import { useAppCont } from "../src/context/FirstContext";
import { decode } from "html-entities";

function Display() {
    const router = useRouter();
    const { selectedImage, selectedImageBase64 } = useAppCont();

    const [data, setdata] = useState(null);

    async function predict() {
        try {
            const res = await axios.post(
                "https://ba9e-2409-4073-399-ae96-59a2-687e-4cbc-1635.ngrok-free.app/upload",
                { image: selectedImageBase64 }
            );
            const d = {
                symbol: decode(res?.data?.symbol),
                fraction: res?.data?.fraction,
            };
            setdata(d);
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <View alignItems="center" style={{ marginTop: 50 }}>
            <ImageViewer
                placeholderImageSource={null}
                selectedImage={selectedImage}
            />

            <View style={{ margin: 10 }}>
                <TouchableOpacity>
                    <Button
                        color="blue"
                        margin={50}
                        title="Convert"
                        size={40}
                        onPress={predict}
                    />
                </TouchableOpacity>
            </View>
            {data && (
                <View>
                    <View style={styles.textAreaContainer}>
                        <Text style={styles.textArea}>{data?.symbol}</Text>
                    </View>
                    <View style={styles.textAreaContainer}>
                        <Text style={styles.textArea}>{data?.fraction}</Text>
                    </View>
                    {/* 
                    <TouchableOpacity>
                        <Button
                            color="blue"
                            margin={50}
                            title="Translate"
                            size={40}
                            onPress={() => alert("Translated")}
                        />
                    </TouchableOpacity> */}
                </View>
            )}
            <TouchableOpacity>
                <Button
                    color="red"
                    margin={50}
                    title="Home"
                    size={40}
                    onPress={() => router.push("/")}
                />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    textAreaContainer: {
        borderWidth: 2,
        padding: 5,
        margin: 10,
    },
    textArea: {
        height: 100,
        backgroundColor: "#808080",
        width: 300,
        justifyContent: "flex-start",
    },
});
export default Display;
