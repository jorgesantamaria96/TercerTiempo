import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  BackHandler,
  ScrollView,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import Material from "react-native-vector-icons/FontAwesome";
import { colors } from "../../../constants/constants";

const Contacto = ({ route, navigation }) => {
  useEffect(() => {
    const backAction = () => {
      navigation.pop();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const facebook = "https://www.facebook.com/fundaciontercertiemporugby/";
  const twitter = "https://twitter.com/tercertiempoFun?s=09";
  const instagram = "https://www.instagram.com/fundaciontercertiempo/?igshid=1x6sros7s8vwt";

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: colors.inicioText,
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Nuestras redes sociales!
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <TouchableOpacity
            style={[
              styles.box,
              { backgroundColor: "#4B0082", alignItems: "center" },
            ]}
            onPress={() => {
              try {
                Linking.openURL(instagram);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <Material name="instagram" size={14} size={60} color="white" />
            <Text style={styles.text}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.box,
              { backgroundColor: "#00acee", alignItems: "center" },
            ]}
            onPress={() => {
              try {
                Linking.openURL(twitter);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <Material name="twitter" size={14} size={60} color="white" />
            <Text style={styles.text}>Twitter</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <TouchableOpacity
            style={[
              styles.box,
              { backgroundColor: "blue", alignItems: "center" },
            ]}
            onPress={() => {
              try {
                Linking.openURL(facebook);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <Material name="facebook-official" size={60} color="white" />
            <Text style={styles.text}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.box,
              { backgroundColor: "red", alignItems: "center" },
            ]}
            onPress={() => {
              try {
                Linking.openURL(link);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <Material name="dollar" size={14} size={60} color="white" />
            <Text style={styles.text}>Donaciones</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  box: {
    alignSelf: "center",
    borderWidth: 1,
    width: "50%",
    padding: 5,
    margin: 5,
    borderRadius: 20,
    elevation: 4,
    paddingVertical: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
});

export default Contacto;
