import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import React, { useState, useEffect } from 'react';

function NutritionDisplayPage ({food, foodNutrients}) {

    return (
        <View>
            <Text>
                This is nutrition display for {food} 
            </Text>
        </View>
    );
}

export default NutritionDisplayPage; 