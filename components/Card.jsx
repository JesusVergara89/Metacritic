import { View, Text, Image, StyleSheet, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Score } from './Score'

export default function Card({ game }) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{game.title}</Text>
            <Image source={{ uri: game.image }} style={styles.image} />
            <Score score={game.score} maxScore={100} />
            <Text style={styles.description}>{game.description.slice(0,150)}...</Text>
        </View>
    )
}


export function AnimatedCard({ game, index }) {
    const opacity = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index * 250,
            useNativeDriver: true,
        }).start()
    }, [opacity,index])

    return (
        <Animated.View style={{ opacity }} >
            <Card game={game}  /> 
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "95%",
        backgroundColor: '#2c2c2e',
        borderRadius: 20,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        margin: "auto",
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 12,
    },
    title: {
        color: '#f0f0f0',
        fontWeight: '600',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 15,
    },
    description: {
        color: '#a0a0a0',
        fontSize: 14,
        textAlign: 'justify',
        marginBottom: 12,
    },
    score: {
        color: '#4cd137',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 15,
    },
});
