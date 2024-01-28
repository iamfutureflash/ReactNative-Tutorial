import { View } from "react-native";
export default function App() {
  return (<>
    <View style={{ backgroundColor: 'plum', flex: 1, }}>
      <View style={{ backgroundColor: 'lightblue', width: 200, height: 200, borderRadius:8}}></View>
      <View style={{ backgroundColor: 'lightgreen', width: 200, height: 200, borderRadius:8}}></View>
    </View>
  </>)
}