import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Image
} from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

export default function Detail() {
  const { id } = useLocalSearchParams();

  const [game, setGame] = useState([]);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGame);
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: id,
          headerRight: () => {},
        }}
      />
      <View>
        {game === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View style={styles.card}>
              <View style={styles.header}>
                <Text style={styles.title}>{game.title}</Text>
              </View>
              <Image source={{ uri: game.img }} style={styles.image} />
              <Score score={game.score} />
              <Text style={styles.description}>
                {game.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1c1c1c', // Fondo oscuro, similar al estilo Xbox
        borderRadius: 15,           // Bordes redondeados
        padding: 20,                // Padding interno
        marginVertical: 12,         // Margen vertical
        shadowColor: '#000',        // Sombra negra
        shadowOffset: { width: 0, height: 5 }, // Desplazamiento de la sombra
        shadowOpacity: 0.3,         // Opacidad de la sombra
        shadowRadius: 10,           // Radio de la sombra
        elevation: 6,               // Sombra en Android
      },
      header: {
        flexDirection: 'row',       // Organiza título y puntuación en una fila
        justifyContent: 'space-between', // Espacio entre el título y la puntuación
        alignItems: 'center',       // Alineación centrada verticalmente
        marginBottom: 10,           // Espacio debajo del header
      },
      title: {
        fontSize: 30,               // Tamaño de fuente del título
        fontWeight: 'bold',         // Fuente en negrita
        color: '#fff',              // Color blanco para el título
      },
      image: {       
        width: '100%',
        height: 350,              // Altura de la imagen
        borderRadius: 10,           // Bordes redondeados para la imagen
        marginBottom: 10, 
        resizeMode: 'contain', 
      },
      description: {
        fontSize: 18,               // Tamaño de fuente de la descripción
        color: '#ccc',              // Color gris claro para la descripción
        lineHeight: 25,             // Altura de línea para mejor legibilidad
      },
});
