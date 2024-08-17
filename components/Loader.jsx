import { View, ActivityIndicator, StyleSheet,Text } from 'react-native'


export default function Loader() {
    return ( 
        <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.textLoader}>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLoader: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    }
});