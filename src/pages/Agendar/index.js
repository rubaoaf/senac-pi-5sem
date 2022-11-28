import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../LoginStyle";
import Header from "../../component/Header";
import { schedule } from "../../services";

export default function Agendar({ route }) {
  const navigation = useNavigation();
  const { userId, userName } = route.params;
  const [nomeCliente, setNomeCliente] = useState("");
  const [telefoneCliente, setTelefoneCliente] = useState("");
  const [dataAgendada, setDataAgendada] = useState("");
  const [horarioAgendado, setHorarioAgendado] = useState("");
  const [observacao, setObservacao] = useState("");

  const agendar = async () => {
    try {
      const formatDataAgendada = new Date(
        dataAgendada.split("/").reverse().join(",") + " " + horarioAgendado
      );
      const payload = {
        idUsuario: userId,
        nomeCliente: nomeCliente,
        telefoneCliente: telefoneCliente,
        dataAgendada: formatDataAgendada,
        horarioAgendado: formatDataAgendada,
        observacao: observacao,
      };
      const user = await schedule.addSchedule(payload).then((data) => data);
      if (user) {
        return navigation.navigate("Home", {
          userId: userId,
          userName: userName,
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
        style={[styles.container, styles.bgWhite]}
      >
        <Header
          title="Cadastrar agendamento"
          description="preencha  os dados e clique em agendar"
        />
        <View style={styles.bottomView}>
          <View style={styles.boxBottom}>
            <TextInput
              style={[styles.input, styles.shadowProp]}
              onChangeText={(value) => setNomeCliente(value)}
              value={nomeCliente}
              placeholderTextColor="#707070"
              placeholder="Nome do cliente"
            />
            <TextInput
              style={[styles.input, styles.shadowProp]}
              onChangeText={(value) => setTelefoneCliente(value)}
              value={telefoneCliente}
              placeholderTextColor="#707070"
              placeholder="Telefone"
            />
            <TextInput
              style={[styles.input, styles.shadowProp]}
              onChangeText={(value) => setDataAgendada(value)}
              value={dataAgendada}
              placeholderTextColor="#707070"
              placeholder="Data"
            />
            <TextInput
              style={[styles.input, styles.shadowProp]}
              onChangeText={(value) => setHorarioAgendado(value)}
              value={horarioAgendado}
              placeholderTextColor="#707070"
              placeholder="Horário"
            />
            <TextInput
              style={[styles.input, styles.shadowProp]}
              onChangeText={(value) => setObservacao(value)}
              value={observacao}
              placeholderTextColor="#707070"
              placeholder="Observação"
            />
          </View>

          <Pressable style={styles.btnContainer} onPress={() => agendar()}>
            <Text style={styles.textButton}>Agendar</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
