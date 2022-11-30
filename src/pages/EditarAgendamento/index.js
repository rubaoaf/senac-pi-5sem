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
import { formatDate } from "../../utils/formatDate";

export default function EditarAgendamento({ route, props }) {
  const navigation = useNavigation();
  const { userId, userName } = route.params;
  const [nomeCliente, setNomeCliente] = useState(props.nomeCliente);
  const [telefoneCliente, setTelefoneCliente] = useState(props.telefoneCliente);
  const [dataAgendada, setDataAgendada] = useState(props.dataAgendada);
  const [horarioAgendado, setHorarioAgendado] = useState(props.horarioAgendado);
  const [observacao, setObservacao] = useState(props.observacao);

  const alterar = async () => {
    try {
      const formatDataAgendada = formatDate(dataAgendada, horarioAgendado);
      const payload = {
        id: props.id,
        idUsuario: userId,
        nomeCliente: nomeCliente,
        telefoneCliente: telefoneCliente,
        dataAgendada: formatDataAgendada,
        horarioAgendado: formatDataAgendada,
        observacao: observacao,
      };
      const scheduleData = await schedule
        .editSchedule(payload)
        .then((data) => data);
      if (scheduleData) {
        return navigation.navigate("Home", {
          params: {
            userId: userId,
            userName: userName,
            post: scheduleData,
          },
          merge: true,
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
          title="Alterar agendamento"
          description="altere os dados e clique em alterar"
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

          <Pressable style={styles.btnContainer} onPress={() => alterar()}>
            <Text style={styles.textButton}>Alterar</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
