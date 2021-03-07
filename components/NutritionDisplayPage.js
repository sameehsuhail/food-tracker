import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Card, Text, View , FlatList, SafeAreaView} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import React, { useState, useEffect } from 'react';



function NutritionDisplayPage ({food, foodNutrients}) {
    
    const [foodname,setFood] = useState(food);
    const [id, setId] = useState(null);
    const [data,setdata] = useState(foodNutrients)
    const Item = ({ title, value}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title} : {value}</Text>
        </View>
      );
      

      const renderItem = ({ item }) => (
        <Item title={item.nutrientName} value={item.value} />
      );
    
      return (
        <SafeAreaView style={styles.container}>
          <Text style={{ fontSize: 25, color: 'black'}}>{foodname}</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.nutrientId}
            extraData={id}
          />
        </SafeAreaView>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 22,
    },
  });
export default NutritionDisplayPage; 