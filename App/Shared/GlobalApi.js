import { create } from "apisauce";

const api = create({
  baseURL: "http://192.168.1.4:1337/api",
  headers: {
    "X-API-Key":
      "0931062bf36150cc8d6d0760bf5b280b88fb45062e316bcf8bb82b0aa5e1239699bad60ee3a4272cfbbab889f731a16492cef57f2a982197c1139319bcd2f76ef84e39023f2654dd9414fd600b11c23a1fb116931c0328e7343262721f5adff2e72a848380d3b7d716379105053af49baa5b4ada4843e5bca7efc140ae75bfe2",
  },
});

const getSlider = () => api.get("/sliders?populate=*");
const getVideoCourse = () => api.get("video-courses?populate=*");
const getCourseList = (type) =>
  api.get(
    "course-lists?filters[type][$eq]=" +
      type +
      "&populate[Topic][populate][0]=Content&populate[image][populate][0]=image"
  );

const setCourseProgress = (data) => api.post("/course-progresses", data);

const getCourseProgress = (uid, courseId) =>
  api.get(
    "/course-progresses?filters[uid][$eq]=" +
      uid +
      "&filters[courseId][$eq]=" +
      courseId
  );
export default {
  getSlider,
  getVideoCourse,
  getCourseList,
  setCourseProgress,
  getCourseProgress,
};
