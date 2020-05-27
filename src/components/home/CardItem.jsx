import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../constants/constants";
import { Rating } from "react-native-ratings";

const CardItem = ({ title, image, detail, onPress, rating }) => {
  const renderImage = (image) => {}
  
  return (
    <View style={styles.box}>
      <View style={{ flex: 1 }}>
        <View style={{ alignSelf: "flex-start" }}>
          <Text
            style={{
              textAlign: "left",
              fontSize: 16,
              fontWeight: "bold",
              color: colors.ttblue,
              paddingTop: 10,
              padding: 5,
            }}
          >
            {title}
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 5,
            width: "85%",
          }}
        >
          <Text style={styles.textDetail}>{detail}</Text>
        </View>
        <View style={{ flexDirection: "row", padding: 5 }}>
          <TouchableOpacity
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 14, color: colors.ttred }}>Comenzar</Text>
            <Icon
              name="arrow-right"
              size={10}
              color={colors.ttred}
              style={{ padding: 5, paddingLeft: 5 }}
            />
          </TouchableOpacity>
          <View style={{ padding: 5 }}>
            <Rating
              ratingCount={5}
              imageSize={10}
              readonly
              startingValue={rating}
            />
          </View>
        </View>
      </View>
      <View style={{ marginLeft: -30, padding: -20 }}>
        <Image
          source={require(`../../../assets/images/barberia.png`)}
          style={{
            alignSelf: "baseline",
            width: 120,
            height: 170,
            marginBottom: -20,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderWidth: 0.01,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  textDetail: {
    fontSize: 14,
    color: colors.inicioText,
    padding: 3,
  },
});

export default CardItem;
