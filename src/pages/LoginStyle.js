import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.6)",
  },
  topView: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  bottomView: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  boxTop: {
    width: 400,
    height: 150,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  boxBottom: {
    width: 400,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "stretch",
  },
  textLogo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#008b8b",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    borderRadius: 5,
    padding: 5,
    color: "#585858",
    backgroundColor: "#FFFFFFCC",
  },
  btnContainer: {
    width: 350,
    height: 40,
    backgroundColor: "#008b8b",
    marginVertical: "5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  btnEsqueciSenha: {
    marginLeft: 20,
  },
  linkEsqueciSenha: {
    color: "#B10D0D",
    textDecorationLine: "underline",
  },
  btnContainerCadastrar: {
    width: 350,
    height: 40,
    backgroundColor: "#8A36F4",
    marginVertical: "5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 2 },
  },
  textOr: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#008B8B",
  },
});

export default styles;
