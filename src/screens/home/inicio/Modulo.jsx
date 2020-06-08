import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  BackHandler,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../../constants/constants";
import Icon from "react-native-vector-icons/FontAwesome";

const Modulo = ({ route, navigation }) => {
  useEffect(() => {
    const backAction = () => {
      if (navigation.dispatch.length > 0) {
        navigation.pop();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  const { clase, indice } = route.params;

  return (
    <View>
      <ScrollView>
        <View style={styles.screen}>
          {/* TÍTULO */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Clase {indice}</Text>
          </View>

          {/* VIDEOS */}
          {clase.videos ? (
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-start",
                paddingHorizontal: 20,
              }}
            >
              {clase.videos.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.videoContainer}
                    onPress={() =>
                      navigation.navigate("Video", { video: item })
                    }
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignSelf: "center",
                        padding: 5,
                      }}
                    >
                      <Text style={styles.videoText}>Video {index + 1}</Text>
                    </View>
                    <View style={styles.iconVideo}>
                      <Icon
                        name="play-circle"
                        size={50}
                        style={{
                          padding: 10,
                          color: colors.ttblue,
                          alignSelf: "center",
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : (
            <View />
          )}

          {/* TEXTO */}
          {clase.textClass.map((item, index) => {
            return (
              <View key={index}>
                <StyleTextClass
                  item={item.item}
                  title={item.title}
                  text={item.text}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const StyleTextClass = ({ item, title, text }) => {
  return (
    <View style={styles.textClassContainer}>
      {title ? (
        <Text style={styles.textTitle}>{text}</Text>
      ) : item ? (
        <View style={{ flexDirection: "row" }}>
          <Icon name="circle" size={14} style={{ marginTop: 10 }} />
          <Text style={styles.textItem}>{text}</Text>
        </View>
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 10,
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 24,
    color: colors.ttblue,
    fontWeight: "bold",
  },
  textClassContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  textTitle: {
    fontSize: 16,
    textAlign: "center",
    color: colors.ttred,
    fontWeight: "bold",
  },
  textItem: {
    paddingHorizontal: 20,
  },
  text: {},
  videoContainer: {
    margin: 5,
    borderWidth: 0.1,
    borderColor: colors.textColor,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: colors.background,
    alignSelf: "center",
  },
  videoText: {
    textAlign: "center",
    color: colors.ttblue,
    fontWeight: "bold",
    padding: 5,
  },
});

export default Modulo;
