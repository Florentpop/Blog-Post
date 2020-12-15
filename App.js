import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./Screens/MainTabScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/*<Drawer.Screen name="Detail" component={DetailStackScreen} />*/}
      </Drawer.Navigator>

      {/*<Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
  </Stack.Navigator>*/}
    </NavigationContainer>
  );
};

export default App;
