import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Users from "./components/Users";
import Home from "./components/Home";
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import UserDetails from "./screens/UserDetails";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UsersPageNavigator from "./screens/UsersPageNavigator";

let BottomTabNavigator = createBottomTabNavigator()

export default function App() {
  return (
      <NavigationContainer>
          <BottomTabNavigator.Navigator>
                <BottomTabNavigator.Screen name={'users'} component={UsersPageNavigator}/>
                <BottomTabNavigator.Screen name={'home'} component={Home}/>
          </BottomTabNavigator.Navigator>
      </NavigationContainer>
  )

  //   (
  //   <View style={styles.container}>
  //     <StatusBar style="auto" />
  //     <Users/>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {},
});
