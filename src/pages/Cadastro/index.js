import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../LoginStyle";
import Header from "../../component/Header";
import { userService } from "../../services";
import { formatDate } from "../../utils/formatDate";

export default function Cadastro() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [dtNascimento, setDtNascimento] = useState("");
  const [telContato, setTelContato] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const cadastrar = async () => {
    try {
      if (senha !== confirmaSenha) return;
      const dtNascimentoFormated = formatDate(dtNascimento);
      const payload = {
        nomeCompleto: nome,
        email: email,
        cpf: cpf,
        nascimento: dtNascimentoFormated,
        telefone: telContato,
        senha: senha,
      };
      const user = await userService
        .cadastraUsuario(payload)
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
        <Header
          title="Crie sua conta"
          description="e organize sua vida e um jeito simples!"
        />
        <View style={styles.bottomView}>
          <View style={styles.boxBottom}>
            <TextInput
              style={[styles.input, styles.shadowProp]}
              onChangeText={(value) => setEmail(value)}
              value={email}
              placeholderTextColor="#707070"
              placeholder="Qual seu e-mail?"
            />
            <TextInput
              style={[styles.input, styles.shadowProp]}
              onChangeText={(value) => setNome(value)}
              value={nome}
              placeholderTextColor="#707070"
              placeholder="Seu nome completo"
            />
            <TextInput
              style={[styles.input, styles.shadowProp]}
              onChangeText={(value) => setCPF(value)}
              value={cpf}
              placeholderTextColor="#707070"
              placeholder="Seu cpf?"
            />
            <TextInput
              style={[styles.input, styles.shadowProp]}
              onChangeText={(value) => setDtNascimento(value)}
              value={dtNascimento}
              placeholderTextColor="#707070"
              placeholder="Sua data de nascimento"
            />
            <TextInput
              style={[styles.input, styles.shadowProp]}
              onChangeText={(value) => setTelContato(value)}
              value={telContato}
              placeholderTextColor="#707070"
              placeholder="Seu telefone de contato"
            />
            <TextInput
              style={[styles.input, styles.shadowProp]}
              onChangeText={(value) => setSenha(value)}
              value={senha}
              placeholderTextColor="#707070"
              placeholder="Digite sua Senha"
              secureTextEntry
            />
            <TextInput
              style={[styles.input, styles.shadowProp]}
              onChangeText={(value) => setConfirmaSenha(value)}
              value={confirmaSenha}
              placeholderTextColor="#707070"
              placeholder="Confirme sua Senha"
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => cadastrar()}
          >
            <Text style={styles.textButton}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
