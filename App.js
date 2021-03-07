import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground,
SafeAreaView, Platform, TouchableOpacity} from 'react-native';

export default function App() {
     
  return (

    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />

      <Image style={styles.appLogo}
        source = {require('./assets/nutrologo.png')}
      />
      
      <Text style = {styles.greetingsText}>
        Welcome!
      </Text>

      <Image style={styles.homeShape}
        source = {require('./assets/weirdblueshape.png')}>
      </Image>

      <TouchableOpacity
        style = {styles.profileButton}>
        <Text style = {styles.buttonText}>
          Profile
        </Text>
      </TouchableOpacity>

      <View style = {styles.buttonRow}>

      <TouchableOpacity
        style = {styles.ScanButton}>
        <Text style = {styles.buttonText}>
          Scan
        </Text>
      </TouchableOpacity>
      
      

      </View>
      
    </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff845e', 
    alignItems: 'center',
    justifyContent: 'center',
  },

  appLogo: {
    position: 'absolute',
    top: "5%", //30
    left: "5%", //10
    width: "40%", //200
    height: "20%", //100
    paddingTop: Platform.OS === "android" ? statusbar.currentHeight : 0
  },

  greetingsText: {
    position: 'absolute',
    fontSize: 30,
    top: 200
  },

  homeShape: {
    position: 'absolute', 
    bottom: "0%",
    right: "0%", 
    width: "90%", //350
    height: "70%" //350
  },

  buttonText: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: "bold"
  },

  profileButton: {
    marginTop: "70%",
    left: "25%",
    width: "40%",
    height: "20%",
    justifyContent: 'center',
    alignItems: 'center',
    padding: "5%",
    borderRadius: 100,
    backgroundColor: 'rgb(91, 157, 255)',
  },

  ScanButton: {
    marginTop: "35%",
    right: "15%",
    width: "40%",
    height: "40%",
    justifyContent: 'center',
    alignItems: 'center',
    padding: "5%",
    paddingTop: "5%",
    paddingBottom: "5%",
    borderRadius: 100,
    backgroundColor: 'rgb(91, 157, 255)',
  },

  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between' 
  }

});


