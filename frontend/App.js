//StAuth10244: I Seo James, 000872976 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import UserNavigator from './app/navigators/UserNavigator';

export default function App() {
  return (
    <NavigationContainer>
        <UserNavigator/>
    </NavigationContainer>
  );
}
