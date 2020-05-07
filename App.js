// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AddButton from "./AddButton";

function Tela() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tela</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "A") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "B") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }

            // You can return any component that you like here!
            if (route.name === "C") {
              return <AddButton />;
            } else {
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "yellow",
          inactiveTintColor: "black",
          activeBackgroundColor: "black",
          inactiveBackgroundColor: "yellow",
        }}
      >
        <Tab.Screen name="A" component={Tela} />
        <Tab.Screen name="B" component={Tela} />
        <Tab.Screen name="C" component={Tela} />
        <Tab.Screen name="D" component={Tela} />
        <Tab.Screen name="E" component={Tela} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
