import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import LoginScreen from "./App/Education/Pages/LoginScreen";

export default function App() {
  return (
    <View>
      <StatusBar />
      <LoginScreen />
    </View>
  );
}
