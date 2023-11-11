import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../Shared/Colors";
import { Image } from "react-native";
import CourseContent from "../Components/CourseContent";
import { TouchableOpacity } from "react-native";
import GlobalApi from "../Shared/GlobalApi";
import { AuthContext } from "../Context/AuthContext";
import { ScrollView } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
export default function CourseDetails() {
  const param = useRoute().params;
  const [course, setCourse] = useState([]);
  const navigation = useNavigation();
  const [userProgress, setUserProgress] = useState([]);
  const { userData, setUserData } = useContext(AuthContext);
  useEffect(() => {
    setCourse(param?.courseData);
    param.courseData.id ? getCourseProgress() : null;
  }, [param.courseContentId]);

  const getCourseProgress = () => {
    GlobalApi.getCourseProgress(userData.id, param?.courseData.id).then(
      (resp) => {
        if (resp.data.data) {
          const result = resp.data.data.map((item) => ({
            id: item.id,
            courseId: item.attributes.courseId,
            courseContentId: item.attributes.courseContentId,
          }));

          setUserProgress(result);
        }
      }
    );
  };

  return (
    <SafeAreaView className="flex flex-1 px-5 py-10 mt-10">
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()} className="mb-3">
          <Ionicons name="arrow-back-sharp" size={30} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {course.name}
          </Text>
          <Text style={{ color: Colors.gray }}>By Coding Geeks Team</Text>
          <Image
            source={{ uri: course.image }}
            style={{ height: 150, marginTop: 10, borderRadius: 10 }}
          />
          <Text
            style={{
              marginTop: 10,
              marginBottom: 10,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            About Course
          </Text>
          <Text numberOfLines={4} style={{ color: Colors.gray }}>
            {course.description}
          </Text>
        </View>
        <CourseContent
          course={course}
          userProgress={userProgress}
          courseType={param.courseType}
        />
      </View>
    </SafeAreaView>
  );
}
