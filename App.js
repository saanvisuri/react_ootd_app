import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Home from "./src/pages/home";
import Settings from "./src/pages/settings";
import Search from "./src/pages/search";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        />
            <Tab.Screen name="Settings" component={Settings} 
              options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-settings" color={color} size={size} />
              ),
            }}/>
            
      
        
        <Tab.Screen name="Search" component={Search} 
          options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => ( 
             <MaterialCommunityIcons name="account-search" color={color} size={size} />
          ),
        }}
      />
    
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});



