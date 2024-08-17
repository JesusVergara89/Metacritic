import { View, Text, StyleSheet } from 'react-native'

export function Score({ score, maxScore }) {

    const getColor = (score) => {
        if (score >= 98) {
            return '#00ce7a'
        } else if (score >= 97 && score < 98) {
            return '#ffbd3f'
        } else {
            return '#ff6874'
        }
    }

    return (
        <View style={[styles.cardScore, { backgroundColor: getColor(score) }]}>
            <Text style={styles.score}>{score}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    cardScore: {
        width: 90,
        borderRadius: 20,
        padding: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    score: {
        color: 'black',
        fontSize: 30,
        marginBottom: 10,
        marginTop: 10,
        fontWeight: "bold"
    },
});