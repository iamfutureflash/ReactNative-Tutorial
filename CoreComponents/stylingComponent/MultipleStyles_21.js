import { StyleSheet, Text, View } from "react-native"


const MultipleStyles_21 = () => {
    return (
        <View style={styles.container}>
            <Text>MultipleStyles_21</Text>

            <View style={[styles.box, styles.lightbluebox,]}>
                <Text>Lightblue box</Text>
            </View>

            <View style={[styles.box, styles.lightgreenbox,]}>
                <Text>Light green box</Text>
            </View>

        </View>
    )
}

export default MultipleStyles_21

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "plum", padding: 60, },
    box: { width: 100, height: 100, padding: 10, },
    lightbluebox: { backgroundColor: 'lightblue', },
    lightgreenbox: { backgroundColor: 'lightgreen', },
})