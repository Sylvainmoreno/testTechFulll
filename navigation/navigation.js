import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../Screens/login/logIn";
import Home from "../Screens/home/home"

//Navigatopn for LogIn Screen
const StackLogIn = createStackNavigator();
function LogIn() {
    return (
        <StackLogIn.Navigator screenOptions={{headerShown: false}}>
            <StackLogIn.Screen name="Login" component={Login}/>
        </StackLogIn.Navigator>
    )
}

//Navigatopn for Home Screen
const StackHomePage = createStackNavigator();
function Homepage() {
    return (
        <StackHomePage.Navigator screenOptions={{headerShown: false}}>
            <StackHomePage.Screen name="Home" component={Home}/>
        </StackHomePage.Navigator>
    )
}

const StackNavigation = createStackNavigator();
function Navigator() {
    return (
        <NavigationContainer>
        <StackNavigation.Navigator initialRouteName="LoginStack" screenOptions={{headerShown: false}}>
            <StackNavigation.Screen name="LoginStack" component={LogIn} />
            <StackNavigation.Screen name="HomeStack" component={Homepage} />
        </StackNavigation.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;