import { StyleSheet, Text, View } from "react-native"

const StyleSheetApi = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>STYLE SHEET API</Text>
        </View>
    )
}

export default StyleSheetApi

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "plum", padding: 60, },
    title:{}
})