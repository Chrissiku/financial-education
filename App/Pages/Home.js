import { View } from "react-native";
import React from "react";
import WelcomeHeader from "../Components/WelcomeHeader";
import SearchBar from "../Components/SearchBar";
import Slider from "../Components/Slider";
import VideoCourseList from "../Components/VideoCourseList";
import CourseList from "../Components/CourseList";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <StatusBar />
      <SafeAreaView>
        <View className="flex flex-col space-y-4">
          <View>
            <WelcomeHeader />
          </View>
          <View>
            <SearchBar />
          </View>
          <View>
            <Slider />
          </View>
          <View>
            <VideoCourseList />
          </View>
          <View>
            <CourseList type={"basic"} />
            <CourseList type={"advance"} />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
