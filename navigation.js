import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Import Screens
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createStackNavigator();
const screenOptions = {
    headerShown: false,
};

const SignedInStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Home" screenOptions = {screenOptions}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default SignedInStack;