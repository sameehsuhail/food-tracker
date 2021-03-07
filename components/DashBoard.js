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
    console.log('cammemerere')
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
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          onPress={__startCamera}
          style={styles.buttontext}
        ><Text>Take photo</Text>
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
      width: 130,
      borderRadius: 4,
      backgroundColor: '#14274e',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40
    },
    lottie: {
      width: 100,    height: 100, 
    }
}); 


export default DashBoard;