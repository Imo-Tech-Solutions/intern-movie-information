import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Tabs
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={() => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home"
              size={26}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
          headerTitle: "Home",
          tabBarShowLabel: false,
        })}
      />
      <Tabs.Screen
        name="Details"
        options={() => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="details" size={24} color={color} />
          ),
          tabBarShowLabel: false,
        })}
      />
    </Tabs>
  );
};

export default _layout;
