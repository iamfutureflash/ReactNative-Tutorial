import { Text, View, Image, ImageBackground, ScrollView, Button, Pressable, } from "react-native"
const logoImage = require("./assets/adaptive-icon.png")
const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 30, }}>
      <ScrollView>
        <Pressable
          onPress={() => { console.log("Text on pressed") }}
          onPressIn={() => { console.log("Text on PressIn") }}
          onLongPress={() => { console.log("Text on long press pressed") }}
          onPressOut={() => { console.log("Text on press out pressed") }}
        >
          <Text>
            Hello World
            Hello World
            Hello World
            Hello World
            Hello World
            Hello World
            Hello World
            Hello World
            Hello World
            Hello World
            Hello World
            Hello World
            Hello World
            Hello World
            Hello World
          </Text>
        </Pressable>

        <Pressable
          onPressIn={() => { console.log("Image onPressIn") }}
          onPress={() => { console.log("Image on pressed") }}
          onLongPress={() => { console.log("Image on long press pressed") }}
          onPressOut={() => { console.log("Image on press out pressed") }}
        >
          <Image source={logoImage} style={{ width: 300, height: 300, }} />
        </Pressable>

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