import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";
import ProfileScreen from "./ProfileScreen";
import SettingScreen from "./SettingScreen";
import HeartScreen from "./HeartScreen";
import Icon from "react-native-vector-icons/Ionicons";
import {
  Fontisto,
  AntDesign,
  Feather,
  Entypo,
  SimpleLineIcons,
} from "@expo/vector-icons";

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#e91e63"
    style={{ backgroundColor: "tomato" }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#8CC0FF",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Detail"
      component={DetailStackScreen}
      options={{
        tabBarLabel: "Details",
        tabBarColor: "#694fad",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-folder-open" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Heart"
      component={HeartScreen}
      options={{
        tabBarLabel: "Heart",
        tabBarColor: "#00c8c8",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-heart" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Setting"
      component={SettingScreen}
      options={{
        tabBarLabel: "Setting",
        tabBarColor: "#8CC0FF",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-settings" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "white",
      },
      headerTitleStyle: {
        fontSize: 25,
        fontWeight: "bold",
        marginHorizontal: 50,
        marginBottom: 10,
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Discover",
        headerLeft: () => (
          <Fontisto
            name="nav-icon-grid-a"
            size={27}
            color="black"
            backgroundColor="white"
            style={{ marginLeft: 15 }}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
          /*<Icon.Button
            name="ios-menu"
            size={28}
            color="black"
            backgroundColor="white"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>*/
        ),
        headerRight: () => (
          <Icon.Button
            name="ios-search"
            size={25}
            color="black"
            backgroundColor="white"
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailStackScreen = ({ navigation }) => (
  <DetailStack.Navigator
    screenOptions={{
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailStack.Screen
      name="Detail"
      component={DetailScreen}
      options={{
        title: "DetailScreen",
      }}
    />
  </DetailStack.Navigator>
);
