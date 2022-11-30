import React from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import styles from "../DetailStyle";

export default function DetalheAgendamento({ navigation, route }) {
  const {
    nomeCliente,
    dataAgendada,
    horarioAgendado,
    observacao,
    telefoneCliente,
  } = route.params.detail;
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/pexels-olya-kobruseva-5417622.jpg")}
    >
      <Header
        title="Detalhes do agendamento"
        description={`com ${nomeCliente}`}
      />
      <View>
        <View style={styles.coluna}>
          <Text style={styles.titulo}>Detalhe do Cliente </Text>
          <Text style={styles.texto}>Nome: {nomeCliente} </Text>
          {telefoneCliente && (
            <Text style={styles.texto}>Telefone: {telefoneCliente} </Text>
          )}
          <Text style={styles.texto}>Data: {dataAgendada} </Text>
          <Text style={styles.texto}>Horario: {horarioAgendado} </Text>
          {observacao && (
            <Text style={styles.texto}>Observacao: {observacao} </Text>
          )}
        </View>
        <View>
          <Pressable
            title="Alterar"
            onPress={() =>
              navigation.navigate("EditarAgendamento", {
                detail: { ...route.params.detail },
              })
            }
          />
          <Pressable title="Remover" onPress={() => removeAgendamento()} />
        </View>
      </View>
    </ImageBackground>
  );
}
