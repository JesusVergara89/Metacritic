import { Link, Stack } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Logo } from "../components/Logo";
import { CircleInfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View style={[styles.container]}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          //headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable style={styles.goAbout}>
                <CircleInfoIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },

  goAbout: {
    fontSize: 30,
    color: "white",
  },
});
