import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { WebView } from "react-native-webview";

const { height, width } = Dimensions.get("window");

const VideoPlayerView = ({ route, navigation }) => {
  const { video } = route.params;

  return (
    <WebView
      source={{ uri: `${video}` }}
      style={styles.videoContainer}
      javaScriptEnabled={true}
      scrollEnabled={false}
      allowsFullscreenVideo={true}
    />
  );
};

const styles = StyleSheet.create({
  video: {
    width: width,
    height: 200,
  },
  videoContainer: {
    flex: 1,
  },
});

export default VideoPlayerView;
