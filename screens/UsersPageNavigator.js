import React from 'react'
import {StyleSheet} from 'react-native'
import {View, Text, Button, TouchableOpacity} from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
// import StackNavigator from "@react-navigation/stack";
import Users from "../components/Users";
import UserDetails from "./UserDetails";


let StackNavigator = createStackNavigator()
const UsersPageNavigator = (props) => {
  return (
      <StackNavigator.Navigator>
          <StackNavigator.Screen name={'users'} component={Users}/>
          <StackNavigator.Screen name={'uDetails'} component={UserDetails}/>
      </StackNavigator.Navigator>
  )
}

export default UsersPageNavigator

let styles = StyleSheet.create({})
