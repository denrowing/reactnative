import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Users from "./components/Users";
import Home from "./components/Home";
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import UserDetails from "./screens/UserDetails";

let StackNavigator = createStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
          <StackNavigator.Navigator initialRouteName="Users page">
              <StackNavigator.Screen name={'Home'} component={Home}/>
              <StackNavigator.Screen name={'Users page'} component={Users}/>
              <StackNavigator.Screen name={'uDetails'} component={UserDetails}/>
          </StackNavigator.Navigator>
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
