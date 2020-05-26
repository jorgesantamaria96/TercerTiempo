import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../constants/constants";

const CardItem = ({ title, image, detail, onPress, ranking }) => {
  return (
    <View style={styles.box}>
      <View style={{ flex: 1 }}>
        <View style={{ alignSelf: "center" }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              fontWeight: "bold",
              color: colors.ttblue,
            }}
          >
            {title}
          </Text>
        </View>
        <View style={{ paddingTop: 10, paddingBottom: 40, paddingLeft: 10 }}>
          <Text style={styles.textDetail}>{detail}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={{ flexDirection: "row",  }}>
            <Text style={{ fontSize: 14, color: colors.ttred }}>Comenzar</Text>
            <Icon name="" size={6} color={colors.ttred} />
          </TouchableOpacity>
          <View>
            <Text>Ranking</Text>
          </View>
        </View>
      </View>
      <View style={{ borderWidth: 1, marginHorizontal: -20 }}>
        <Image
          source={require("../../../assets/images/carpinteria.png")}
          style={{ alignSelf: "baseline", width: 150, height: 160 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    backgroundColor: "green",
    borderWidth: 1,
    elevation: 2,
    marginVertical: 10,
    paddingVertical: 10,
  },
  textDetail: {
    fontSize: 12,
  },
});

export default CardItem;
