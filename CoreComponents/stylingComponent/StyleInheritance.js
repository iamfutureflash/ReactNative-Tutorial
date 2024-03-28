import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const StyleInheritance = () => {
    return (
        <View style={styles.container}>

            <View style={[styles.dakMode]}>
                <Text style={[styles.dakModeText]}>
                    Style Inheritance  
                    <Text style={styles.boldText}>  bold Text</Text>
                </Text>
            </View>

            <View style={[styles.box, styles.lightbluebox, styles.boxShadow]}>
                <Text style={{ borderRadius: 5, backgroundColor: 'red' }}>Lightblue box</Text>
            </View>

            <View style={[styles.box, styles.lightgreenbox, , styles.androidShadow]}>
                <Text>Light green box</Text>
            </View>

        </View>
    )
}

export default StyleInheritance

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "plum", padding: 60, },
    dakMode: {
        backgroundColor: "black",
        color: 'white',
    },
    dakModeText: {
        color: 'white',
    },
    boldText: {
        fontWeight: 'bold'
    },
    box: {
        width: 250,
        height: 250,
        // padding: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: 'purple',
        borderRadius: 5,
    },
    lightbluebox: { backgroundColor: 'lightblue', },
    lightgreenbox: { backgroundColor: 'lightgreen', },
    boxShadow: {
        shadowColor: 'blue',
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: .6,
        shadowRadius: 4
    },
    androidShadow: {
        elevation: 10,
    }
})