import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../../constants/constants";

const CardItem = ({ title, image, detail, onPress, ranking }) => {
  console.log(image);
  return (
    <View style={styles.box}>
      <View style={{ borderWidth: 1 }}>
        <Text>{title}</Text>
      </View>
      <View>
        <Image
          source={require(`../../../assets/images/carpinteria.png`)}
          style={{ alignItems: "flex-end", width: 140, height: 160 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "green",
    borderWidth: 1,
    elevation: 2,
    marginVertical: 10,
  },
});

export default CardItem;
