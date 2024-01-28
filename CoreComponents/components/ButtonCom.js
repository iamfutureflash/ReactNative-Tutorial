import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import ModelComp from './ModelComp';

const ButtonCom = () => {
    const [sate, setState] = useState(false);
    return (
        <View style={{ marginBottom: 100 }}>
            <Button onPress={() => { setState(!sate); }} title='click' />
            <Button
                title='log in'
                onPress={() => { console.log('button pressed'); }}
                color={'midnightblue'}
                disabled={sate}
            />
            <ModelComp />
        </View>
    )
}

export default ButtonCom