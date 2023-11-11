import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../Shared/GlobalApi";
import { FlatList } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function VideoCourseList() {
  const [videoList, setVideoList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getVideoCourse();
  }, []);
  const getVideoCourse = async () => {
    const resp = (await GlobalApi.getVideoCourse()).data;
    const result = resp.data.map((item) => ({
      id: item.id,
      name: item.attributes.title,
      description: item.attributes.description,
      image: item.attributes.image.data.attributes.url,
      Topic: item.attributes.VideoTopic,
    }));
    setVideoList(result);
  };
  const onPressCourse = (course) => {
    navigation.navigate("course-detail", {
      courseData: course,
      courseType: "video",
    });
  };
  return (
    <View className="flex flex-col gap-3">
      <View>
        <Text className="text-[18px] font-semibold">Video Course</Text>
      </View>
      <View>
        <FlatList
          data={videoList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onPressCourse(item)}>
              <Image
                source={{ uri: item.image }}
                style={{
                  width: 210,
                  height: 120,
                  marginRight: 10,
                  borderRadius: 7,
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
