import React from "react";
import MeritBadgeList from "./components/MeritBadgeList";
import MeritBadgeBook from "./components/MeritBadgeBook";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>

        <Screen 
        name="MeritBadgeList" 
        options={{ title: "Merit Badges"}}
        component={MeritBadgeList} />
        
        <Screen 
        name="MeritBadgeBook" 
        options={{ title: "NAME"}}
        component={MeritBadgeBook} />

      </Navigator>
    </NavigationContainer>
  )
}