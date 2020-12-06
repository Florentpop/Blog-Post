import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./Screens/HomeScreen";
import DetailScreen from "./Screens/DetailScreen";
import Icon from "react-native-vector-icons/Ionicons";
import MainTabScreen from "./Screens/MainTabScreen";

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/*<Drawer.Screen name="Detail" component={DetailStackScreen} />*/}
      </Drawer.Navigator>

      {/*<Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
  </Stack.Navigator>*/}
    </NavigationContainer>
  );
}
