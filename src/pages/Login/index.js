import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../LoginStyle";
import { auth } from "../../services";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function validaEmail(email) {
    setEmail(email);
  }

  function validaSenha(senha) {
    setSenha(senha);
  }

  const direciona = async () => {
    try {
      const user = await auth.authUser({ email, senha }).then((data) => data);
      if (user) {
        return navigation.navigate("Home", {
          userId: user.id,
          userName: user.nomeCompleto,
        });
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
        <View style={styles.topView}>
          <View style={styles.boxTop}>
            <MaterialIcons name="support-agent" size={60} color="#008b8b" />
            <Text style={styles.textLogo}> Seja bem vindo ao Secretari-E </Text>
          </View>
        </View>

        <View style={styles.bottomView}>
          <View style={styles.boxBottom}>
            <TextInput
              style={[styles.input, styles.shadowProp]}
              onChangeText={(value) => validaEmail(value)}
              value={email}
              placeholderTextColor="#707070"
              placeholder="E-mail"
            />
            <TextInput
              style={[styles.input, styles.shadowProp]}
              onChangeText={(value) => validaSenha(value)}
              value={senha}
              placeholderTextColor="#707070"
              placeholder="Senha"
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.btnEsqueciSenha}
              onPress={() => navigation.navigate("EsqueciSenha")}
            >
              <Text style={styles.linkEsqueciSenha}>Esqueci a senha</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => direciona()}
          >
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.textOr}>ou</Text>
          <TouchableOpacity
            style={styles.btnContainerCadastrar}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={styles.textButton}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
