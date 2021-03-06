import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  BackHandler,
  Alert,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  Linking,
} from "react-native";
import { colors } from "../../../constants/constants";
import Material from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Menu = ({ route, navigation }) => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Atención!", "Desea cerrar sesión?", [
        {
          text: "NO",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "SI",
          onPress: () => {
            navigation.popToTop();
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const { dni, nombre, apellido, telefono, email } = route.params;
  const params = {
    dni: dni,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    mail: email,
  };

  const facebook = "https://www.facebook.com/fundaciontercertiemporugby/";
  const twitter = "https://twitter.com/tercertiempoFun?s=09";
  const instagram =
    "https://www.instagram.com/fundaciontercertiempo/?igshid=1x6sros7s8vwt";
  const donacion = "http://fundaciontercertiempo.org/";

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.seleccionText}>
          Seleccione Fundación, para saber más sobre nosotros, o Capacitación,
          para comenzar el aprendizaje!
        </Text>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate("About", params)}
        >
          {/* <Icon name="trophy" size={100} style={styles.icon} /> */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Image
              source={require("../../../../assets/images/iconott.png")}
              style={{
                width: 100,
                height: 100,
              }}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Fundación</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate("Main", params)}
        >
          <MaterialCommunityIcons name="rugby" size={100} style={styles.icon} />
          <View style={styles.container}>
            <Text style={styles.text}>Capacitación</Text>
          </View>
        </TouchableOpacity>
        
        {/* REDES SOCIALES */}
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <TouchableOpacity
            style={[
              styles.boxRS,
              { backgroundColor: colors.background, alignItems: "center" },
            ]}
            onPress={() => {
              try {
                Linking.openURL(instagram);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <Material name="instagram" size={40} color={colors.ttblue} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.boxRS,
              { backgroundColor: colors.background, alignItems: "center" },
            ]}
            onPress={() => {
              try {
                Linking.openURL(twitter);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <Material name="twitter" size={40} color={colors.ttblue} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.boxRS,
              { backgroundColor: colors.background, alignItems: "center" },
            ]}
            onPress={() => {
              try {
                Linking.openURL(facebook);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <Material name="facebook-official" size={40} color={colors.ttblue} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.boxRS,
              { backgroundColor: colors.background, alignItems: "center" },
            ]}
            onPress={() => {
              try {
                Linking.openURL(donacion);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <Material name="dollar" size={40} color={colors.ttblue} />
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
    marginTop: 40,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  seleccionText: {
    textAlign: "center",
    color: colors.inicioText,
  },
  box: {
    borderWidth: 1,
    alignItems: "center",
    width: "100%",
    height: 190,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 0.01,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6,
    backgroundColor: colors.background,
  },
  container: {
    justifyContent: "center",
    padding: 5,
  },
  text: {
    width: "100%",
    fontSize: 20,
    fontWeight: "bold",
    color: colors.ttblue,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    color: colors.ttred,
  },
  boxRS: {
    alignSelf: "center",
    borderWidth: 1,
    width: "25%",
    padding: 5,
    margin: 5,
    borderRadius: 20,
    elevation: 4,
    paddingVertical: 10,
  },
});

export default Menu;
