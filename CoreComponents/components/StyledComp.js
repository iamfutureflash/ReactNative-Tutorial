import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const StyledComp = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>StyledComp</Text>
            <Button title='StyledComp' style={styles.heading} />
            <View style={styles.lightBlueBox}><Text>LightBlue Box</Text></View>
            <View style={styles.lightGreenBox}><Text>LightGreen Box</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { backgroundColor: 'lightyellow', padding: 30, borderRadius: 30, },
    heading: { fontSize: 30, textAlign: 'center', fontWeight: '700', },
    lightBlueBox: { backgroundColor: 'lightblue', width: 100, height: 100, padding: 10, },
    lightGreenBox: { backgroundColor: 'lightgreen', width: 100, height: 100, padding: 10, },
})
export default StyledComp