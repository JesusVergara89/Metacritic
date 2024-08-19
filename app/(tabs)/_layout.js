import { Tabs } from "expo-router";
import { View } from "react-native";
import { HomeIcon, InfoIcon } from "../../components/Icons";

export default function tabsLayout() {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "black"},
        tabBarActiveTintColor: "yellow"
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <InfoIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
