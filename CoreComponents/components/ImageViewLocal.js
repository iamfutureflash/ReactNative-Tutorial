import { View, Text, Image, ImageBackground } from 'react-native';
const logoImg = require('../assets/adaptive-icon.png')
export default function ImageViewLocal() {
    return (
            <View>
                <Image source={logoImg} style={{ width: 200, height: 200 }} />
                <Image source={{ uri: 'https://picsum.photos/300' }} style={{ width: 200, height: 200 }} />
                <ImageBackground source={logoImg} style={{ flex: 1 }}>
                    <Text>IMAGE TEXT</Text>
                </ImageBackground >
            </View>
    )
}