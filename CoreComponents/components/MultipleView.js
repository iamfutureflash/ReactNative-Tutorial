import React from 'react'
import { Text, View } from 'react-native'

const MultipleView = () => {
    return (
        <>
            <View style={{ backgroundColor: 'lightblue', width: 200, height: 200, borderRadius: 8 }}></View>
            <View style={{ backgroundColor: 'lightgreen', width: 200, height: 200, borderRadius: 8 }}></View>
            <View style={{ backgroundColor: 'lightgreen', width: 200, height: 200, borderRadius: 8, padding: 60 }}>
                <Text>
                    <Text style={{ color: 'white' }}>Hello</Text>
                    World
                </Text>
            </View>
        </>
    )
}

export default MultipleView