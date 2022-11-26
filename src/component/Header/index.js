import React from "react";
import { Text, View, StyleSheet } from "react-native";
import GoBack from "../GoBack";

const Header = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <GoBack />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: 400,
    padding: 20,
    marginLeft: 0,
    backgroundColor: "#FFF",
    alignContent: "flex-start",
    alignItems: "left",
    justifyContent: "left",
  },
  title: {
    fontFamily: "Dosis_700Bold",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "40px",
    textIndent: "10px",
  },
  description: {
    fontFamily: "Dosis_400Regular",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "40px",
    textIndent: "10px",
  },
});

export default Header;
