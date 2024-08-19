import { View, StyleSheet } from "react-native";


export function Screen({ children }) {
    return <View style={styles.container} >{children}</View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop: 18,
        paddingLeft: 2,
        paddingRight: 2
    }
})