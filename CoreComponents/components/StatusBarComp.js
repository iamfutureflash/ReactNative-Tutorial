import { View, Text, StatusBar, ActivityIndicator } from 'react-native'
import React from 'react'

export default function StatusBarComp() {
    return (
        <View>
            <StatusBar
                animated
                backgroundColor='lightgreen'
                barStyle='dark-content'
            />
            <ActivityIndicator size='large' />
            <ActivityIndicator size='large' color='midnightblue' />
            <ActivityIndicator size='large' color='midnightblue' animating />
            <ActivityIndicator size='large' color='midnightblue' animating={false} />
            <ActivityIndicator size='large' color='midnightblue' animating={true} />
            <Text>StatusBarComp</Text>
        </View>
    )
}