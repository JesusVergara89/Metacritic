import { Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";

export default function about() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <Pressable>
            {({ pressed }) => (
              <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />
            )}
          </Pressable>
        </Link>
        <Text style={styles.title}>About project</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
  },
  text: {
    fontSize: 16,
    textAlign: "justify",
    color: "white",
    marginBottom: 20,
    marginTop: 20,
  },
  goAbout: {
    fontSize: 20,
    color: "white",
  },
});
