import { StyleSheet, Text, View } from "react-native"

const BoxModel = () => {
    return (
        <View style={styles.container}>
            <Text>MultipleStyles_21</Text>

            <View style={[styles.box, styles.lightbluebox,]}>
                <Text style={{borderRadius:5,backgroundColor:'red'}}>Lightblue box</Text>
            </View>

            <View style={[styles.box, styles.lightgreenbox,]}>
                <Text>Light green box</Text>
            </View>

        </View>
    )
}

export default BoxModel

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "plum", padding: 60, },
    box: {
        width: 100,
        height: 100,
        // padding: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: 'purple',
        borderRadius:5,
    },
    lightbluebox: { backgroundColor: 'lightblue', },
    lightgreenbox: { backgroundColor: 'lightgreen', },
})