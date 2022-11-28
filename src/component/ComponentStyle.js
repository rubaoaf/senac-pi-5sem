import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
  linha: {
    borderBottomColor: "#ccc",
    borderBottomWidth: "1px",
    flexDirection: "row",
    paddingBottom: 20,
    paddingTop: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  coluna: {
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%",
  },
  imagem: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  texto: {
    fontFamily: "Dosis_400Regular",
    fontSize: 14,
    marginHorizontal: "1%",
  },
});

export default styles;
