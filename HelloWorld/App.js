import { useState } from "react"
import { Text, View, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, } from "react-native"
const logoImage = require("./assets/adaptive-icon.png")
const App = () => {
  const [isModelVisible, setIsModelVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 30, }}>
      <ScrollView>
        <StatusBar 
          backgroundColor='black'
          barStyle="light-content"
          hidden
        />
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
          onPress={() => {
            console.log("Button Pressed");
            setIsModelVisible(true);
          }}
          color="midnightblue"
        />





        <Modal
          visible={isModelVisible}
          onRequestClose={() => {
            setIsModelVisible(false);
          }}
          animationType="slide"
          presentationStyle="formSheet"
        >
          <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
            <Text>Modal content</Text>
            <Button
              title="Close"
              color="midnightblue"
              onPress={() => {
                console.log("Button Pressed");
                setIsModelVisible(false);
              }}
            />
          </View>
        </Modal>










      </ScrollView>
    </View>
  )
}

export default App