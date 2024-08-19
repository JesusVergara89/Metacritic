import { StyleSheet, View, SafeAreaView } from "react-native";
import { Main } from "./components/Main";
import { StatusBar } from "expo-status-bar";

export default function App() {
  //console.log(games)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  headerContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
    marginBottom: 10,
    gap: 9,
    marginTop: 15,
  },
  headerText: {
    color: "#4cd137",
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 20,
  },
  footerText: {
    color: "#4cd137",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15,
  },
});
