
import {Text,TouchableOpacity, StyleSheet } from 'react-native';
export default function ButtonX({ onPress, title }){ 
    return(
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

  const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#add8e6",
      borderRadius: 100,
      paddingVertical: 10,
      paddingHorizontal: 40
    },
    appButtonText: {
      fontSize: 24,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });