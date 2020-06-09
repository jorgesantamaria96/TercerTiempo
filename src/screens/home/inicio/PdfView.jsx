import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const PdfView = ({ route, navigation }) => {
  const { pdf } = route.params;
  console.log(pdf);

  const renderPdf = (pdf) => {
    const BloquesYAdoquines = "file://../../../data/pdf/bloquesyadoquines.pdf";
    const Termotanque = "file://../../../data/pdf/termotanque.pdf";

    if (pdf === "bloquesyadoquines") return BloquesYAdoquines;
    if (pdf === "termotanque") return Termotanque;
  };

  return <View />;
};

const style = StyleSheet.create({});

export default PdfView;
