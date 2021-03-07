import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator,Button } from 'react-native';
import { Camera } from 'expo-camera';
import AnimatedLoader from "react-native-animated-loader";
import axios from 'axios';
import config from '../config';
import NutritionDisplayPage from './NutritionDisplayPage';
import CameraPage from './CameraPage';



function DashBoard() {

  const [startCamera,setStartCamera] = useState(false);


  const __startCamera = async () =>{
    const {status} = await Camera.requestPermissionsAsync()

    if (status === 'granted') {
      // start the camera
      setStartCamera(true)
    } else {
      Alert.alert('Access denied')
    }
  }
  return (
    <View style={styles.container}>
      { startCamera ? (
        <CameraPage/>
      )
         : (
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          width: "100%"
        }}
      >
        <TouchableOpacity
          onPress={__startCamera}
          style={styles.buttontext}
        ><Text style={{color: 'white', fontSize: 20, }}>What am I eating ?</Text>
            </TouchableOpacity>
      </View>
        )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      justifyContent:"center", 
      alignItems: 'center'
    },
    buttontext: {    
      width: 300,
      borderRadius: 50,
      backgroundColor: '#14274e',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 300,
      color: 'white'
    },
    lottie: {
      width: 100,    height: 100, 
    }
}); 


export default DashBoard;