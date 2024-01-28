import { View, Text, Modal, Button } from 'react-native'
import React, { useState } from 'react'

export default function ModelComp() {
    const [isModelVisible, setIsModelVisible] = useState(false);
    return (
        <>
            <Button
                onPress={() => { setIsModelVisible(true); }}
                title='Open Model'
                color='green'
            />
            <Modal
                visible={isModelVisible}
                onRequestClose={() => { setIsModelVisible(false); }}
                animationType='slide'
                presentationStyle='pageSheet'
            >
                <View style={{ flex: 1, backgroundColor: 'lightblue', }}>
                    <Text>ModelComp</Text>
                    <Button
                        onPress={() => { setIsModelVisible(false); }}
                        title='Close Model'
                        color='green'
                    />
                </View>
            </Modal>
        </>
    )
}