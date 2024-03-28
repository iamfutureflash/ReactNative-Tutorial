import { View, Text, StatusBar, ActivityIndicator } from 'react-native'
import React from 'react'

export default function StatusBarComp() {
    return (
        <View>
            <StatusBar animated backgroundColor='lightgreen' barStyle='dark-content' hidden={false} />
            {/* <StatusBar animated backgroundColor='lightgreen' barStyle='dark-content' hidden={true} /> */}

        </View>
    )
}