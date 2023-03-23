import { Slot } from 'expo-router';
import React from 'react';
import AppProvider from '../src/context/FirstContext';

export default function Layout(){
  return (
    <AppProvider>
        <Slot/>
    </AppProvider>
  );
}
