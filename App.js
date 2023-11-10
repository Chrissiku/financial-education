import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BankMain from "./src/Screens/BankMain";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Text>test code</Text> */}
      <BankMain />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
