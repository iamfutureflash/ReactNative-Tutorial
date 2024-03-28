import { View, Text, Button, Alert } from 'react-native'
import React from 'react'

export default function AlertComp() {
    return (
        <View >
            <Text>AlertComp</Text>
            <Button title='Alert' onPress={() => { Alert.alert('Invalid data!') }} />
            <Button title='Alert' onPress={() => { Alert.alert('Invalid data!', 'DOB incorrect') }} />
            <Button title='Alert' onPress={() => {
                Alert.alert(
                    'Invalid data!',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => { console.log('cancel'); },
                        },
                        {
                            text: 'apply',
                            onPress: () => { console.log('ok'); }
                        },
                        {
                            text: 'next',
                            onPress: () => { console.log('ok'); }
                        },
                        {
                            text: 'ok',
                            onPress: () => { console.log('ok'); }
                        },
                        
                    ]
                )
            }} />
        </View>
    )
}