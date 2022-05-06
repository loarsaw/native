import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
const StackNavigator = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="Home">
        <StackNavigator.Screen name="Home" component={Home} options={{title:"Dashboard"}}/>
        <StackNavigator.Screen name="Profile" component={Profile} options={{title:"User Settings"}} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};
export default App;
