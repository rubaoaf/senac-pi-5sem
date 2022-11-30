import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../ComponentStyle";

export default function SchuduledItem(props) {
  const navigation = useNavigation();

  const {
    nomeCliente,
    dataAgendada,
    horarioAgendado,
    observacao,
    telefoneCliente,
  } = props;
  const formatedDate = new Date(dataAgendada).toLocaleDateString("pt-BR");
  const formatedTime = new Date(horarioAgendado).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  function filterNome(nome) {
    if (nome.length < 40) {
      return nome;
    }
    return `${nome.substring(0, 40)}...`;
  }

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("DetalheAgendamento", { detail: { ...props } })
      }
    >
      <View style={styles.linha}>
        <Image style={styles.imagem} source={props.img} />
        <View style={styles.coluna}>
          <Text style={styles.texto}>
            <strong>Cliente:</strong> {filterNome(nomeCliente)}
          </Text>
          {telefoneCliente && (
            <Text style={styles.texto}>
              <strong>Telefone:</strong> {telefoneCliente}
            </Text>
          )}
          <Text style={styles.texto}>
            <strong>Data:</strong> {formatedDate}
          </Text>
          <Text style={styles.texto}>
            <strong>Horario:</strong> {formatedTime}
          </Text>
          {observacao && (
            <Text style={styles.texto}>
              <strong>Observação:</strong> {observacao}
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
}
