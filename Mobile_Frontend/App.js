import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import ApartmentList from "./components/ApartmentList";
import ApartmentDetail from "./components/ApartmentDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateApartment from "./components/CreateApartment";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ApartmentList" component={ApartmentList} />
        <Stack.Screen name="ApartmentDetail" component={ApartmentDetail} />
        <Stack.Screen name="CreateApartment" component={CreateApartment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
