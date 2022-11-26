import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../LoginStyle";
import { auth } from "../../services";
import Header from "../../component/Header";

export default function EsqueciSenha({ route }) {
  const navigation = useNavigation();
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const { userId } = route.params;

  const alterarSenha = async () => {
    if (confirmaSenha !== senha) return;
    try {
      const user = await auth
        .changePass({ userId, senha })
        .then((data) => data);
      if (user) {
        return navigation.navigate("Login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/pexels-olya-kobruseva-5417622.jpg")}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Header title="Esqueci a senha" description="digite sua nova senha" />

        <View style={styles.bottomView}>
          <View style={styles.boxBottom}>
            <TextInput
              secureTextEntry
              textContentType="password"
              style={[styles.input, styles.shadowProp]}
              onChangeText={(value) => setSenha(value)}
              value={senha}
              placeholderTextColor="#707070"
              placeholder="Digite sua nova senha"
            />
            <TextInput
              secureTextEntry
              textContentType="password"
              style={[styles.input, styles.shadowProp]}
              onChangeText={(value) => setConfirmaSenha(value)}
              value={confirmaSenha}
              placeholderTextColor="#707070"
              placeholder="Confirme sua nova senha"
            />
          </View>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => alterarSenha()}
          >
            <Text style={styles.textButton}>Cadastrar nova senha</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
