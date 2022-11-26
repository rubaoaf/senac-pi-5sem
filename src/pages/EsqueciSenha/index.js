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

export default function EsqueciSenha() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const validaUsuario = async () => {
    try {
      const user = await auth.recoverPass({ email }).then((data) => data);
      if (user) {
        return navigation.navigate("AlterarSenha", { userId: user.id });
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
          title="Esqueci a senha"
          description="não tem problema, te mandamos o link para resolver isso!"
        />

        <View style={styles.bottomView}>
          <View style={styles.boxBottom}>
            <TextInput
              style={[styles.input, styles.shadowProp]}
              onChangeText={(value) => setEmail(value)}
              value={email}
              placeholderTextColor="#707070"
              placeholder="Digite seu e-mail"
            />
          </View>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => validaUsuario()}
          >
            <Text style={styles.textButton}>Recuperar a senha</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
