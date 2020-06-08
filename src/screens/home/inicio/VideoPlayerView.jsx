import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Video } from "expo-av";

const { height, width } = Dimensions.get("window");

const VideoPlayerView = ({ route, navigation }) => {
  const { video } = route.params;
  console.log(video);

  return (
    <View>
      {/* <Video
        source={require("../../../data/videos/reciclarNivel1Clase1Video1.mp4")}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping={false}
        useNativeControls
        style={styles.video}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: width,
    height: 200
  },
});

export default VideoPlayerView;
