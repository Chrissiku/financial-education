import { View, Text, Image, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function WelcomeHeader() {
  const { userData, setUserData } = useContext(AuthContext);
  return (
    <View className="flex flex-row items-center justify-between">
      <View className="flex flex-row gap-2">
        <Text className="text-gray-600 font-bold text-[18px]">Hello,</Text>
        <Text className="text-gray-600 font-bold text-[18px]">
          {userData?.name}
        </Text>
      </View>
      <View className="border border-gray-300 overflow-hidden rounded-full h-10 w-10">
        <Image source={{ uri: userData?.picture }} className="w-full h-full" />
      </View>
    </View>
  );
}
