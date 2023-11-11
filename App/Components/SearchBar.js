import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../Shared/Colors";
import { TextInput } from "react-native";
export default function SearchBar() {
  return (
    <View
      style={styles.container}
      className="flex flex-row bg-white items-center p-3 rounded-lg shadow-md"
    >
      <Ionicons
        name="search"
        size={26}
        color={Colors.gray}
        style={{ marginRight: 10 }}
      />
      <TextInput
        placeholder="Search . . . "
        className="text-[18px] placeholder:text-gray-300 text-black"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    elevation: 2,
  },
});
