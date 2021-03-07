import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground,
SafeAreaView, Platform, TouchableOpacity} from 'react-native';

export default function App() {
    
  return (

    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />
      
      <Text style = {styles.greetingsText}>
        Welcome!
      </Text>

      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', 
      alignItems: 'center',
      justifyContent: 'center',
},

greetingsText: {
    position: 'absolute',
    fontSize: 30,
    top: 170
}

});