import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import CommentsScreen from "./screens/CommentsScreen";
import ScreenChange from "./screens/ScreenChange";
import FriendsScreen from "./screens/FriendsScreen";
import StoreScreen from "./screens/StoreScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="ScreenChange"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="ScreenChange" component={ScreenChange} />
      <Stack.Screen name="StoreScreen" component={StoreScreen} />
      <Stack.Screen name="FriendsScreen" component={FriendsScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
      <Stack.Screen name="CommentsScreen" component={CommentsScreen} />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
