import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraPage from './CameraPage';
import DashBoard from './DashBoard';
import NutritionDisplayPage from './NutritionDisplayPage';
import Landing from './LoginPage';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard">
        {/* <Stack.Screen name="Camera" component={CameraPage} options={{title: 'Camera'}} /> */}
        <Stack.Screen
          name="Dashboard"
          component={DashBoard}
          options={{ title: 'NutraScan' }}
        />
        <Stack.Screen
          name="NutritionDisplayPage"
          component={NutritionDisplayPage}
        />
        <Stack.Screen
          name="Login"
          component={Landing}
          options={{ title: 'NutraScan' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;