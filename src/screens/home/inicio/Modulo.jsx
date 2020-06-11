import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  BackHandler,
  TouchableOpacity,
  Image,
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
  console.log(clase);

  return (
    <View>
      <ScrollView>
        <View style={styles.screen}>
          {/* TÍTULO */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Clase {indice}</Text>
          </View>

          {/* TEXTO */}
          {clase.textClass ? (
            <View>
              <Text style={styles.titleModulo}>Información:</Text>
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
          ) : (
            <View />
          )}

          {/* VIDEOS */}
          {clase.videos ? (
            <View>
              <Text style={styles.titleModulo}>Videos:</Text>
              <View style={{ marginLeft: 20, flexDirection: "row" }}>
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
            </View>
          ) : (
            <View />
          )}

          {/* PDF */}
          {clase.pdf ? (
            <View>
              <Text style={styles.titleModulo}>Documentación:</Text>
              <View style={{ marginLeft: 20, flexDirection: "row" }}>
                {clase.pdf.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.pdfContainer}
                      onPress={() => navigation.navigate("Pdf", { pdf: item })}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignSelf: "center",
                          padding: 5,
                        }}
                      >
                        <Text style={styles.pdfText}>PDF {index + 1}</Text>
                      </View>
                      <View style={styles.iconPdf}>
                        <Icon
                          name="file-o"
                          size={50}
                          style={{
                            padding: 10,
                            color: colors.ttred,
                            alignSelf: "center",
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          ) : (
            <View />
          )}

          {/* IMÁGENES */}
          {clase.images ? (
            <View>
              <Text style={styles.titleModulo}>Imágenes:</Text>
              <View style={{ marginLeft: 20, flexDirection: "row" }}>
                {clase.images.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={[styles.pdfContainer, { borderColor: "yellow" }]}
                      onPress={() =>
                        navigation.navigate("Imagen", { imagen: item })
                      }
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignSelf: "center",
                          padding: 5,
                        }}
                      >
                        <Text style={styles.imageText}>Img {index + 1}</Text>
                      </View>
                      <View>
                        <Icon
                          name="image"
                          size={50}
                          style={{
                            padding: 10,
                            color: "orange",
                            alignSelf: "center",
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          ) : (
            <View />
          )}
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
    marginBottom: 20,
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
  titleModulo: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: colors.textInputLabelColor,
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
    borderColor: colors.ttblue,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: colors.background,
    alignSelf: "flex-start",
  },
  videoText: {
    textAlign: "center",
    color: colors.ttblue,
    fontWeight: "bold",
    padding: 5,
  },
  pdfContainer: {
    margin: 5,
    borderWidth: 0.1,
    borderColor: colors.ttred,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: colors.background,
    alignSelf: "flex-start",
  },
  pdfText: {
    textAlign: "center",
    color: colors.ttred,
    fontWeight: "bold",
    padding: 5,
  },
  imageText: {
    textAlign: "center",
    color: "orange",
    fontWeight: "bold",
    padding: 5,
  },
});

export default Modulo;
