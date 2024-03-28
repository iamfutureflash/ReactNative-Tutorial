import { ActivityIndicator, Text, View } from 'react-native'
const ActivityIndicatorComp16 = () => {
    return (
        <View>
            <ActivityIndicator size='small' />
            <ActivityIndicator size='large' color='midnightblue' />
            <ActivityIndicator size='large' color='midnightblue' animating />
            <ActivityIndicator size='large' color='midnightblue' animating={false} />
            <ActivityIndicator size='large' color='midnightblue' animating={true} />
            <Text>ActivityIndicatorComp</Text>
        </View>
    )
}

export default ActivityIndicatorComp16