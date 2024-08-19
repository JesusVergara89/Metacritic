import { useEffect, useState } from "react";
import { FlatList, View, ScrollView, ActivityIndicator } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import Card  from "./Card";
import { Screen } from "./Screen";

export function Main() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        getLatestGames().then((games) => {
            setGames(games);
        });
    }, []);

    return (
        <Screen>
            {games.length === 0 ? (
                <ActivityIndicator color={"#fff"} size={"large"} />
            ) : (
                <FlatList
                    data={games}
                    keyExtractor={(game) => game.slug}
                    renderItem={({ item, index }) => (
                        <Card game={item} index={index} />
                    )}
                />
            )}
        </Screen>
    );
}