import { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { getLatestGames } from "./lib/metacritic";
import Loader from "./components/Loader";
import { Logo } from "./components/Logo";
import { AnimatedCard } from "./components/Card";
import { Link } from "expo-router";

export default function App() {
  const [games, setGames] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const fetchData = () => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setRefresh(true);
    fetchData();
    setRefresh(false);
  };

  //console.log(games)
  return (
    <SafeAreaView style={styles.container}>
      <Link style={styles.goAbout} href="/about" >Go about</Link>
      {games.length === 0 ? (
        <Loader />
      ) : (
        <FlatList
          data={games}
          renderItem={({ item, index }) => (
            <AnimatedCard game={item} index={index} />
          )}
          keyExtractor={(item) => item.slug}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          ListEmptyComponent={<Text>No items found</Text>}
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <Logo />
              <Text style={styles.headerText}>Metacritic Games</Text>
            </View>
          }
          ListFooterComponent={<Text style={styles.footerText}>End</Text>}
          refreshing={refresh}
          onRefresh={handleRefresh}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
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
  },
  footerText: {
    color: "#4cd137",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15,
  },
  goAbout: {
    fontSize: 30,
    color: "white",
  }
});
