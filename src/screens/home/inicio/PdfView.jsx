import React from "react";
import { View, StyleSheet } from "react-native";
import PDFReader from "rn-pdf-reader-js";

const PdfView = ({ route, navigation }) => {
  const { pdf } = route.params;

  function renderPdf(pdf) {
    const BloquesYAdoquines = "http://134.122.118.141/manual_fabricacion_bloques_adoquines.PDF";
    const Termotanque = "http://134.122.118.141/paso_a_paso_termotanque-inta.pdf";
    
    if (pdf === "termotanque") return Termotanque;
    if (pdf === "bloquesyadoquines") return BloquesYAdoquines;
  };
  const source = "";
  
  return <PDFReader source={{ uri: renderPdf(pdf) }} useGoogleReader={true}  />;
};

const style = StyleSheet.create({});

export default PdfView;
