import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource =
    selectedImage !== null ? { uri: selectedImage } : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({  
  image: {
    paddingTop:30,
    marginTop: 50,
    width: 250,
    height: 250,
    borderRadius: 8,
  },
});