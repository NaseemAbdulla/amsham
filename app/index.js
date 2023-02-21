import { Text, View,StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { AppBar } from '@react-native-material/core';
import Scan from './scan';

export default function Home() {
  return (
    <View style={{color: 'red'}}>
      <View>
      <AppBar title="AMSHAM"/>
      </View>
      <Scan/>
      <StatusBar style='auto'/>
    </View>
  );
}
