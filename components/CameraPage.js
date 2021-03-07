import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import AnimatedLoader from "react-native-animated-loader";
import axios from 'axios';
import config from '../config';
import NutritionDisplayPage from './NutritionDisplayPage';

let camera = new Camera;

function CameraPage() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [food,setFood] = useState(null)
  const [foodNutrients,setFoodNutrients] = useState(null)
  const [visible, setVisible] = useState(false);

  const __takePicture = async () => {
    if (!camera) return
    const photo = await camera.takePictureAsync()
    console.log("Cameraaaa")
    const formData = new FormData();
    formData.append('image', {
      uri: photo.uri, //Your Image File Path
      type: 'image/jpeg', 
      name: "imagename.jpg",
    })
    setVisible(true);
    await axios({
      url    : `${config["backend"]}/detect`,
      method : 'POST',
      data   : formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(function (response) {
              setFood(response.data.food);
              setFoodNutrients(response.data.foodNutrients);
    })
    .catch(function (error) {
      console.log("error from image :");
    })
    setVisible(false);
  }

  return (
    <>
    {
    food && foodNutrients ? (<NutritionDisplayPage food={food} foodNutrients={foodNutrients} />) :(
    <Camera
    style={{flex: 1,width:"100%"}}
    ref={(r) => {
      camera = r
    }}
    >
              <View
        style={{
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          flex: 1,
          width: '100%',
          padding: 20,
          justifyContent: 'space-between'
        }}
        >
        <View
        style={{
          alignSelf: 'center',
          flex: 1,
          alignItems: 'center'
        }}
        >

          <TouchableOpacity
            onPress={__takePicture}
            style={{
              width: 70,
              height: 70,
              bottom: 0,
              borderRadius: 50,
              backgroundColor: '#fff'
            }}
            />

        <AnimatedLoader
          visible={visible}
          overlayColor="rgba(255,255,255,0.75)"
          source={require("../assets/scan.json")}
          animationStyle={styles.lottie}
          speed={1}
          >
        </AnimatedLoader>
      </View>
      </View>
        </Camera>)
  }
  </>
  )}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent:"center", 
    alignItems: 'center'
  },
  lottie: {
    width: 100,    height: 100, 
  }
}); 

export default CameraPage;