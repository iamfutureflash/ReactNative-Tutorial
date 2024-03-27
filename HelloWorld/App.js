import { Text, View, Image, ImageBackground, ScrollView, Button, } from "react-native"
const logoImage = require("./assets/adaptive-icon.png")
const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 30, }}>
      <ScrollView>
        <Text><Text style={{ color: "white" }}>Hello</Text> World</Text>
        <Image source={logoImage} style={{ width: 300, height: 300, }} />
        <Image source={{ uri: "https://picsum.photos/200" }} style={{ width: 300, height: 300, }} />
        <ImageBackground source={{ uri: "https://picsum.photos/200" }} style={{ width: 300, height: 300, }} >
          <Text style={{ color: "white" }}>hi</Text>
        </ImageBackground>
        <ImageBackground source={logoImage} style={{ width: 300, height: 300, }} >
          <Text style={{ color: "white" }}>hi</Text>
        </ImageBackground>
        <Button
          title="Press"
          onPress={() => { console.log("Button Pressed") }}
          color="midnightblue"
          disabled={true}
        />
      </ScrollView>
    </View>
  )
}

export default App